
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Layout from "../layout/Layout";
import Filters, { DEFAULT_FILTERS, getGroups } from "../components/Filters";
import MovieCard from "../components/MovieCard";
import { Movies } from "../data/MovieData";

const STEP = 10;
const pretty = (s) => s.charAt(0).toUpperCase() + s.slice(1);
// "Comedy/drama" counts as both Comedy and Drama
const genresOf = (movie) => movie.category.split("/").map((g) => g.trim().toLowerCase());

const minutes = (duration = "") => {
  const h = Number(duration.match(/(\d+)\s*hr/)?.[1] || 0);
  const m = Number(duration.match(/(\d+)\s*min/)?.[1] || 0);
  return h * 60 + m;
};

const yearOk = (year, rule) =>
  rule === "all" || (rule === "2020" ? year >= 2020 : rule === "2010" ? year >= 2010 && year < 2020 : year < 2010);

const timeOk = (mins, rule) =>
  rule === "all" || (rule === "short" ? mins < 90 : rule === "medium" ? mins >= 90 && mins <= 120 : mins > 120);

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const genreParam = (searchParams.get("genre") || "").toLowerCase();

  const allGenres = useMemo(() => [...new Set(Movies.flatMap(genresOf))].sort().map(pretty), []);
  const groups = useMemo(() => getGroups(allGenres), [allGenres]);

  const [filters, setFilters] = useState(() => ({
    ...DEFAULT_FILTERS,
    genre: allGenres.some((g) => g.toLowerCase() === genreParam) ? genreParam : "all",
  }));
  const [visible, setVisible] = useState(STEP);

  // keep the genre filter in sync with links like /browser-movies?genre=Drama
  useEffect(() => {
    if (!genreParam) return;
    if (allGenres.some((g) => g.toLowerCase() === genreParam)) {
      setFilters((f) => ({ ...f, genre: genreParam }));
      setVisible(STEP);
    }
  }, [genreParam, allGenres]);

  const results = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list = Movies.filter((m) => {
      const text = `${m.name} ${m.category} ${m.language} ${m.nameDirector}`.toLowerCase();
      return (
        (!q || text.includes(q)) &&
        (filters.genre === "all" || genresOf(m).includes(filters.genre)) &&
        yearOk(Number(m.year), filters.year) &&
        timeOk(minutes(m.time), filters.time) &&
        (filters.rate === "all" || m.rate / 100 >= Number(filters.rate))
      );
    });
    const sorters = {
      popular: (a, b) => b.reviews - a.reviews,
      rating: (a, b) => b.rate - a.rate,
      newest: (a, b) => Number(b.year) - Number(a.year),
      az: (a, b) => a.name.localeCompare(b.name),
    };
    return [...list].sort(sorters[filters.sort]);
  }, [filters, search]);

  const updateFilter = (key, value) => {
    setVisible(STEP);
    setFilters((f) => ({ ...f, [key]: value }));
  };

  const updateSearch = (value) => {
    const next = new URLSearchParams(searchParams);
    value ? next.set("search", value) : next.delete("search");
    setSearchParams(next, { replace: true });
    setVisible(STEP);
  };

  const clearAll = () => {
    setFilters(DEFAULT_FILTERS);
    setSearchParams({}, { replace: true });
    setVisible(STEP);
  };

  // chips for every active filter, so people can see and remove what is narrowing the list
  const chips = [
    ...(search.trim() ? [{ key: "search", text: `“${search.trim()}”` }] : []),
    ...groups
      .filter((g) => g.key !== "sort" && filters[g.key] !== "all")
      .map((g) => ({ key: g.key, text: g.items.find((i) => i.value === filters[g.key])?.label })),
  ];
  const removeChip = (key) => (key === "search" ? updateSearch("") : updateFilter(key, "all"));

  return (
    <Layout>
      <main className="mx-auto min-h-screen w-full max-w-7xl px-5 pb-16 pt-10 sm:px-8">
        <h1 className="cv-display text-4xl font-extrabold text-white sm:text-6xl">Browse movies</h1>
        <p className="mt-4 max-w-xl text-[#a79fb5]">
          Search the full library, then narrow it down by genre, year, length and rating.
        </p>

        <div className="mt-10">
          <Filters groups={groups} values={filters} onChange={updateFilter} search={search} onSearch={updateSearch} />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <p className="text-sm text-[#a79fb5]">
            <span className="font-bold text-[#f4b942]">{results.length}</span> movie{results.length === 1 ? "" : "s"} found
          </p>
          {chips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              onClick={() => removeChip(chip.key)}
              aria-label={`Remove filter ${chip.text}`}
              className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20"
            >
              {chip.text} <FaTimes className="text-[10px] text-[#a79fb5]" />
            </button>
          ))}
          {chips.length > 0 && (
            <button type="button" onClick={clearAll} className="text-xs font-semibold text-[#f4b942] hover:underline">
              Clear all
            </button>
          )}
        </div>

        {results.length ? (
          <>
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {results.slice(0, visible).map((movie, i) => (
                <MovieCard key={`${movie.name}-${movie.titleImage}-${i}`} movie={movie} />
              ))}
            </div>
            <div className="mt-14 text-center">
              <p className="text-sm text-[#a79fb5]">
                Showing {Math.min(visible, results.length)} of {results.length}
              </p>
              {visible < results.length && (
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + STEP)}
                  className="mt-4 rounded-full border border-white/20 px-9 py-3.5 font-semibold text-white transition hover:bg-[#f4b942] hover:text-black"
                >
                  Show more movies
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="mt-10 rounded-2xl bg-[#17121f] px-6 py-16 text-center ring-1 ring-white/10">
            <h2 className="text-xl font-semibold text-white">No movies match these filters</h2>
            <p className="mt-2 text-sm text-[#a79fb5]">Try a different title, or remove a filter to see more.</p>
            <button
              type="button"
              onClick={clearAll}
              className="mt-6 rounded-full bg-[#f4b942] px-7 py-3 font-bold text-black transition hover:bg-white"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default MoviesPage;