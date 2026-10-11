
import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHeart, FaPlay, FaStar } from "react-icons/fa";
import Layout from "../layout/Layout";
import MovieCard, { score } from "../components/MovieCard";
import { Movies } from "../data/MovieData";

const genresOf = (m) => m.category.split("/").map((g) => g.trim().toLowerCase());

const WatchPage = () => {
  const { id } = useParams();
  const movie = Movies.find((m) => m.name === id);
  const [play, setPlay] = useState(false);
  const [liked, setLiked] = useState(false);
  const [failed, setFailed] = useState(false);

  const related = useMemo(() => {
    if (!movie) return [];
    const mine = genresOf(movie);
    return Movies.filter((m) => m.name !== movie.name && genresOf(m).some((g) => mine.includes(g))).slice(0, 5);
  }, [movie]);

  if (!movie) {
    return (
      <Layout>
        <main className="mx-auto max-w-xl px-5 py-24 text-center">
          <h1 className="cv-display text-4xl font-extrabold text-white">Movie not found</h1>
          <p className="mt-3 text-[#a79fb5]">We could not find that movie. It may have been removed.</p>
          <Link to="/browser-movies" className="mt-8 inline-flex rounded-full bg-[#f4b942] px-8 py-4 font-bold text-black transition hover:bg-white">
            Browse movies
          </Link>
        </main>
      </Layout>
    );
  }

  const src = movie.video || "/images/movie.mp4";
  const poster = movie.image ? `/images/${movie.image}` : "/images/user.png";
  const details = [
    ["Director", movie.nameDirector],
    ["Language", movie.language],
    ["Year", movie.year],
    ["Length", movie.time],
    ["Genre", movie.category],
  ];

  return (
    <Layout>
      <main className="mx-auto w-full max-w-7xl px-5 pb-16 pt-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to={`/movie/${movie.name}`}
            className="flex items-center gap-3 text-sm font-semibold text-[#a79fb5] transition hover:text-white"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
              <BiArrowBack />
            </span>
            Back to details
          </Link>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setLiked((v) => !v)}
              aria-pressed={liked}
              aria-label={liked ? "Remove from favorites" : "Add to favorites"}
              className={`flex size-12 items-center justify-center rounded-full ring-1 transition ${liked ? "bg-[#f4b942] text-black ring-[#f4b942]" : "bg-white/10 text-white ring-white/10 hover:bg-white/20"
                }`}
            >
              <FaHeart />
            </button>
            <a
              href={src}
              download
              className="flex items-center gap-2 rounded-full bg-[#f4b942] px-7 font-bold text-black transition hover:bg-white"
            >
              <FaCloudDownloadAlt /> Download
            </a>
          </div>
        </div>

        <div className="relative mt-6 aspect-video overflow-hidden rounded-3xl bg-black ring-1 ring-white/10">
          {play ? (
            failed ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                <p className="text-lg font-semibold text-white">This video could not be loaded.</p>
                <button
                  type="button"
                  onClick={() => setFailed(false)}
                  className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-[#f4b942] hover:text-black"
                >
                  Try again
                </button>
              </div>
            ) : (
              <video
                key={src}
                controls
                autoPlay
                playsInline
                poster={poster}
                onError={() => setFailed(true)}
                className="h-full w-full"
              >
                <source src={src} type="video/mp4" />
              </video>
            )
          ) : (
            <>
              <img src={poster} alt={`${movie.name} poster`} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a12] via-[#0d0a12]/30 to-[#0d0a12]/30" />
              <button
                type="button"
                onClick={() => setPlay(true)}
                aria-label={`Play ${movie.name}`}
                className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f4b942] text-xl text-black shadow-2xl transition hover:scale-110 sm:size-24"
              >
                <FaPlay className="ml-1" />
              </button>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="cv-display text-2xl font-extrabold text-white sm:text-4xl">{movie.name}</p>
                <p className="mt-1 text-sm text-white/70">{movie.year} · {movie.time}</p>
              </div>
            </>
          )}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#a79fb5]">
              <span className="flex items-center gap-1.5 rounded-full bg-[#f4b942] px-3 py-1 font-bold text-black">
                <FaStar /> {score(movie)}
              </span>
              <span>{movie.reviews} reviews</span>
              <span className="rounded-full border border-white/25 px-3 py-0.5 text-white">{movie.category}</span>
            </div>
            <h1 className="cv-display mt-4 text-3xl font-extrabold text-white sm:text-5xl">{movie.name}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#a79fb5]">{movie.desc}</p>
          </div>

          <dl className="rounded-2xl bg-[#17121f] p-6 ring-1 ring-white/10">
            {details.map(([label, value], i) => (
              <div key={label} className={`flex justify-between gap-4 py-3 text-sm ${i ? "border-t border-white/10" : ""}`}>
                <dt className="text-[#a79fb5]">{label}</dt>
                <dd className="text-right font-medium capitalize text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="cv-display text-2xl font-extrabold text-white sm:text-3xl">More like this</h2>
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
              {related.map((m, i) => (
                <MovieCard key={`${m.name}-${m.titleImage}-${i}`} movie={m} />
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
};

export default WatchPage;