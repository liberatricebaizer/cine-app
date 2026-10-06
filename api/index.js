require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const { z } = require('zod');

const app = express();
const port = Number(process.env.PORT || 4000);
const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 10, ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined });

app.use(cors({ origin: process.env.CLIENT_ORIGIN ? process.env.CLIENT_ORIGIN.split(',') : true }));
app.use(express.json({ limit: '1mb' }));

const movieInput = z.object({
  title: z.string().trim().min(1).max(200),
  description: z.string().trim().max(5000).optional().default(''),
  year: z.coerce.number().int().min(1888).max(2100).optional().default(2024),
  durationMinutes: z.coerce.number().int().min(0).max(1000).optional().default(0),
  rating: z.coerce.number().min(0).max(10).optional().default(0),
  posterUrl: z.string().url().optional().default(''),
  backdropUrl: z.string().url().optional().default(''),
  trailerUrl: z.string().url().optional().default(''),
  director: z.string().trim().max(200).optional().default(''),
  categoryIds: z.array(z.coerce.number().int().positive()).optional().default([])
});

function slugify(value) { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `movie-${Date.now()}`; }
function parseList(value) { return String(value || '').split(',').map(Number).filter(Number.isInteger); }
function mapMovie(row) {
  return { id: row.id, title: row.title, slug: row.slug, description: row.description, year: row.year, durationMinutes: row.duration_minutes, rating: Number(row.rating), posterUrl: row.poster_url, backdropUrl: row.backdrop_url, trailerUrl: row.trailer_url, director: row.director, categories: row.categories || [] };
}

app.get('/health', async (_req, res) => {
  try { await pool.query('SELECT 1'); res.json({ ok: true, service: 'cine-api' }); }
  catch (error) { res.status(503).json({ ok: false, error: 'Database unavailable' }); }
});

app.get('/api/categories', async (_req, res, next) => {
  try { const { rows } = await pool.query('SELECT id, name, slug FROM categories ORDER BY name'); res.json(rows); } catch (error) { next(error); }
});

app.get('/api/movies', async (req, res, next) => {
  try {
    const { search = '', category, year, minRating, sort = 'newest', page = '1', limit = '24' } = req.query;
    const pageNumber = Math.max(1, Number(page) || 1); const pageSize = Math.min(100, Math.max(1, Number(limit) || 24)); const values = []; const filters = [];
    if (search) { values.push(`%${String(search).trim()}%`); filters.push(`(m.title ILIKE $${values.length} OR m.description ILIKE $${values.length})`); }
    if (year) { values.push(Number(year)); filters.push(`m.year = $${values.length}`); }
    if (minRating) { values.push(Number(minRating)); filters.push(`m.rating >= $${values.length}`); }
    const categoryIds = parseList(category); if (categoryIds.length) { values.push(categoryIds); filters.push(`EXISTS (SELECT 1 FROM movie_categories mc2 WHERE mc2.movie_id = m.id AND mc2.category_id = ANY($${values.length}::bigint[]))`); }
    const order = sort === 'rating' ? 'm.rating DESC, m.title ASC' : sort === 'title' ? 'm.title ASC' : sort === 'oldest' ? 'm.year ASC, m.title ASC' : 'm.created_at DESC';
    const where = filters.length ? `WHERE ${filters.join(' AND ')}` : '';
    values.push(pageSize, (pageNumber - 1) * pageSize);
    const query = `SELECT m.*, COALESCE(json_agg(DISTINCT jsonb_build_object('id', c.id, 'name', c.name, 'slug', c.slug)) FILTER (WHERE c.id IS NOT NULL), '[]') AS categories, COUNT(*) OVER() AS total_count FROM movies m LEFT JOIN movie_categories mc ON mc.movie_id = m.id LEFT JOIN categories c ON c.id = mc.category_id ${where} GROUP BY m.id ORDER BY ${order} LIMIT $${values.length - 1} OFFSET $${values.length}`;
    const { rows } = await pool.query(query, values); const total = rows[0] ? Number(rows[0].total_count) : 0;
    res.json({ data: rows.map(mapMovie), pagination: { page: pageNumber, limit: pageSize, total, pages: Math.ceil(total / pageSize) } });
  } catch (error) { next(error); }
});

app.get('/api/movies/:idOrSlug', async (req, res, next) => {
  try {
    const key = req.params.idOrSlug; const isId = /^\d+$/.test(key); const value = isId ? Number(key) : key;
    const movie = await pool.query(`SELECT m.*, COALESCE(json_agg(DISTINCT jsonb_build_object('id', c.id, 'name', c.name, 'slug', c.slug)) FILTER (WHERE c.id IS NOT NULL), '[]') AS categories FROM movies m LEFT JOIN movie_categories mc ON mc.movie_id = m.id LEFT JOIN categories c ON c.id = mc.category_id WHERE m.${isId ? 'id' : 'slug'} = $1 GROUP BY m.id`, [value]);
    if (!movie.rows[0]) return res.status(404).json({ error: 'Movie not found' });
    const [cast, reviews] = await Promise.all([pool.query('SELECT id, name, character_name AS "characterName", photo_url AS "photoUrl", cast_order AS "order" FROM movie_cast WHERE movie_id = $1 ORDER BY cast_order, name', [movie.rows[0].id]), pool.query('SELECT id, author_name AS "authorName", author_avatar_url AS "authorAvatarUrl", rating, review_text AS "reviewText", created_at AS "createdAt" FROM movie_reviews WHERE movie_id = $1 ORDER BY created_at DESC', [movie.rows[0].id])]);
    res.json({ ...mapMovie(movie.rows[0]), cast: cast.rows.map(row => ({ ...row, rating: Number(row.rating) })), reviews: reviews.rows.map(row => ({ ...row, rating: Number(row.rating) })) });
  } catch (error) { next(error); }
});

app.post('/api/movies', async (req, res, next) => {
  const parsed = movieInput.safeParse(req.body); if (!parsed.success) return res.status(400).json({ error: 'Invalid movie data', details: parsed.error.flatten() });
  const client = await pool.connect();
  try { const data = parsed.data; await client.query('BEGIN'); const slug = slugify(data.title); const { rows } = await client.query('INSERT INTO movies (title, slug, description, year, duration_minutes, rating, poster_url, backdrop_url, trailer_url, director) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *', [data.title, slug, data.description, data.year, data.durationMinutes, data.rating, data.posterUrl, data.backdropUrl, data.trailerUrl, data.director]); for (const categoryId of data.categoryIds) await client.query('INSERT INTO movie_categories (movie_id, category_id) VALUES ($1,$2) ON CONFLICT DO NOTHING', [rows[0].id, categoryId]); await client.query('COMMIT'); res.status(201).json(mapMovie({ ...rows[0], categories: [] })); }
  catch (error) { await client.query('ROLLBACK'); next(error); } finally { client.release(); }
});

app.delete('/api/movies/:id', async (req, res, next) => { try { const { rowCount } = await pool.query('DELETE FROM movies WHERE id = $1', [Number(req.params.id)]); if (!rowCount) return res.status(404).json({ error: 'Movie not found' }); res.status(204).end(); } catch (error) { next(error); } });

app.use((error, _req, res, _next) => { console.error('[v0] API error:', error.message); res.status(error.code === '23505' ? 409 : 500).json({ error: error.code === '23505' ? 'A movie with this title already exists' : 'Internal server error' }); });

app.listen(port, () => console.log(`cine-api listening on port ${port}`));
module.exports = app;
