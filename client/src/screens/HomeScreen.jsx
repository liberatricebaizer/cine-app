
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaPlay, FaPlus, FaStar, FaSearch, FaDownload, FaTv, FaWifi } from "react-icons/fa";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { Movies } from "../data/MovieData";
import MovieCard, { score } from "../components/MovieCard";
import "swiper/css";
import "swiper/css/navigation";
import Footer from "../layout/Footer";
import Layout from "../layout/Layout";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&display=swap');
.cv-display{font-family:'Bricolage Grotesque',system-ui,sans-serif;letter-spacing:-0.035em}
.cv-outline{-webkit-text-stroke:2px rgba(255,255,255,.3);color:transparent}
@keyframes cv-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes cv-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.cv-progress{transform-origin:left;animation:cv-fill 6s linear forwards}
.cv-in{animation:cv-in .7s ease both}
@media (prefers-reduced-motion:reduce){.cv-progress{animation:none;transform:scaleX(1)}.cv-in{animation:none}}
`;

const wrap = "mx-auto w-full max-w-7xl px-5 sm:px-8";

/* ---------- Hero: full-bleed cinema screen with timed film rail ---------- */
const Hero = ({ featured }) => {
  const [active, setActive] = useState(0);
  const movie = featured[active];

  useEffect(() => {
    const id = setTimeout(() => setActive((i) => (i + 1) % featured.length), 6000);
    return () => clearTimeout(id);
  }, [active, featured.length]);

  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden">
      <img
        key={`bg-${active}`}
        src={`/images/${movie.titleImage}`}
        alt=""
        className="cv-in absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-[#0d0a12]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a12] via-[#0d0a12]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0a12] via-[#0d0a12]/60 to-transparent" />

      <div className={`${wrap} relative pb-10 pt-32`}>
        <div key={`txt-${active}`} className="cv-in max-w-3xl">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="flex items-center gap-1.5 rounded-full bg-[#f4b942] px-3 py-1 font-bold text-black">
              <FaStar /> {score(movie)}
            </span>
            <span>{movie.year}</span>
            <span>{movie.time}</span>
            <span className="rounded-full border border-white/30 px-3 py-0.5">{movie.category}</span>
          </div>
          <h1 className="cv-display text-5xl font-extrabold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            {movie.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">{movie.desc}</p>
          <p className="mt-3 text-sm text-[#a79fb5]">
            Directed by {movie.nameDirector} · {movie.language} · {movie.reviews} reviews
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={`/movie/${movie.name}`}
              className="flex items-center gap-3 rounded-full bg-[#f4b942] px-8 py-4 font-bold text-black transition hover:bg-white"
            >
              <FaPlay className="text-sm" /> Watch now
            </Link>
            <button
              type="button"
              className="flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <FaPlus className="text-sm" /> My list
            </button>
          </div>
        </div>

        <div className="mt-14 flex gap-4 overflow-x-auto pb-1" role="tablist" aria-label="Featured films">
          {featured.map((m, i) => (
            <button
              key={`${m.titleImage}-${i}`}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`w-44 shrink-0 text-left transition ${i === active ? "opacity-100" : "opacity-50 hover:opacity-90"}`}
            >
              <img src={`/images/${m.titleImage}`} alt="" className="aspect-video w-full rounded-lg object-cover" />
              <p className="mt-2 truncate text-sm font-semibold text-white">{m.name}</p>
              <div className="mt-1.5 h-0.5 w-full overflow-hidden rounded bg-white/20">
                {i === active && <div key={active} className="cv-progress h-full bg-[#f4b942]" />}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Top 10: ranked carousel (rank order is real information) ---------- */
const TopTen = () => {
  const top = useMemo(() => [...Movies].sort((a, b) => b.rate - a.rate).slice(0, 10), []);
  const btn =
    "flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-[#f4b942] hover:text-black";

  return (
    <section className={`${wrap} py-16`}>
      <div className="flex items-end justify-between">
        <h2 className="cv-display text-3xl font-extrabold text-white sm:text-5xl">Top 10 this week</h2>
        <div className="flex gap-2">
          <button className={`${btn} top-prev`} aria-label="Previous">
            <BsCaretLeftFill />
          </button>
          <button className={`${btn} top-next`} aria-label="Next">
            <BsCaretRightFill />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: ".top-prev", nextEl: ".top-next" }}
        slidesPerView="auto"
        spaceBetween={12}
        className="mt-10"
      >
        {top.map((m, i) => (
          <SwiperSlide key={`${m.name}-${i}`} className="!w-[270px]">
            <Link to={`/movie/${m.name}`} className="group flex items-end">
              <span className="cv-display cv-outline relative z-0 -mr-7 text-[9rem] font-extrabold leading-[0.8]">
                {i + 1}
              </span>
              <div className="relative z-10 aspect-[2/3] w-40 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10 transition group-hover:ring-[#f4b942]">
                <img
                  src={`/images/${m.titleImage}`}
                  alt={`${m.name} poster, rank ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

/* ---------- Browse: search, genre, sort, grid ---------- */
const Browse = () => {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const [sort, setSort] = useState("popular");
  const [visible, setVisible] = useState(10);

  const genres = useMemo(() => ["All", ...new Set(Movies.map((m) => m.category))], []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = Movies.filter(
      (m) =>
        (genre === "All" || m.category === genre) &&
        (!q || m.name.toLowerCase().includes(q) || m.nameDirector.toLowerCase().includes(q))
    );
    return [...list].sort((a, b) =>
      sort === "newest" ? Number(b.year) - Number(a.year) : sort === "rating" ? b.rate - a.rate : b.reviews - a.reviews
    );
  }, [query, genre, sort]);

  const reset = () => setVisible(10);

  return (
    <section id="browse" className={`${wrap} scroll-mt-24 py-16`}>
      <h2 className="cv-display text-3xl font-extrabold text-white sm:text-5xl">Find something to watch</h2>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-[#17121f] p-4 ring-1 ring-white/10 lg:flex-row lg:items-center">
        <label className="relative lg:w-80">
          <span className="sr-only">Search movies or directors</span>
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a79fb5]" />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              reset();
            }}
            placeholder="Search title or director"
            className="w-full rounded-xl bg-[#0d0a12] py-3 pl-11 pr-4 text-sm text-white placeholder:text-[#a79fb5] focus:outline focus:outline-2 focus:outline-[#f4b942]"
          />
        </label>
        <div className="flex flex-1 flex-wrap gap-2" role="group" aria-label="Filter by genre">
          {genres.map((g) => (
            <button
              key={g}
              type="button"
              aria-pressed={genre === g}
              onClick={() => {
                setGenre(g);
                reset();
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${genre === g ? "bg-[#f4b942] text-black" : "bg-white/5 text-[#a79fb5] hover:bg-white/10 hover:text-white"
                }`}
            >
              {g}
            </button>
          ))}
        </div>
        <label>
          <span className="sr-only">Sort by</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded-xl bg-[#0d0a12] px-4 py-3 text-sm text-white focus:outline focus:outline-2 focus:outline-[#f4b942] lg:w-auto"
          >
            <option value="popular">Most reviewed</option>
            <option value="rating">Highest rated</option>
            <option value="newest">Newest</option>
          </select>
        </label>
      </div>

      {results.length ? (
        <>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {results.slice(0, visible).map((m, i) => (
              <MovieCard key={`${m.name}-${m.titleImage}-${i}`} movie={m} />
            ))}
          </div>
          {visible < results.length && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + 10)}
                className="rounded-full border border-white/20 px-9 py-3.5 font-semibold text-white transition hover:bg-[#f4b942] hover:text-black"
              >
                Show more movies
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="mt-10 rounded-2xl bg-[#17121f] p-10 text-center text-[#a79fb5]">
          No movies match “{query}”. Try another title or switch to All.
        </p>
      )}
    </section>
  );
};

/* ---------- Offline download promo ---------- */
const features = [
  { Icon: FaDownload, title: "Download in one tap", text: "Save films to your phone and keep them." },
  { Icon: FaWifi, title: "Watch without data", text: "Press play on a bus, a flight or a power cut." },
  { Icon: FaTv, title: "HD on any screen", text: "Start on your phone, finish on the TV." },
];

const Promo = () => (
  <section className={`${wrap} py-16`}>
    <div className="grid items-center gap-12 overflow-hidden rounded-[2rem] bg-[#17121f] p-8 ring-1 ring-white/10 sm:p-14 lg:grid-cols-2">
      <div>
        <h2 className="cv-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
          Take your movies anywhere, even offline
        </h2>
        <ul className="mt-8 space-y-5">
          {features.map(({ Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#f4b942] text-black">
                <Icon />
              </span>
              <div>
                <p className="font-semibold text-white">{title}</p>
                <p className="text-sm text-[#a79fb5]">{text}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link
          to="/movies"
          className="mt-9 inline-flex rounded-full bg-[#f4b942] px-8 py-4 font-bold text-black transition hover:bg-white"
        >
          Start watching
        </Link>
      </div>
      <div className="relative mx-auto flex h-[360px] w-full max-w-md items-center justify-center">
        {["5a.jpg", "6a.jpg", "7a.jpg"].map((img, i) => (
          <img
            key={img}
            src={`/images/${img}`}
            alt=""
            loading="lazy"
            style={{ transform: `translateX(${(i - 1) * 105}px) rotate(${(i - 1) * 7}deg) translateY(${i === 1 ? -14 : 8}px)` }}
            className="absolute aspect-[2/3] w-40 rounded-2xl object-cover shadow-2xl ring-1 ring-white/15 sm:w-44"
          />
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Page ---------- */
const HomeScreen = () => (

  <Layout className="min-hscreen bg-[#0d0a12] text-white">
    <style>{styles}</style>
    <Hero featured={Movies.slice(0, 6)} />
    <TopTen />
    <Browse />
    <Promo />

  </Layout>
);

export default HomeScreen;