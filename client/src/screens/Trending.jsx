
import React from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaStar } from "react-icons/fa";
import Layout from "../layout/Layout";
import PageHeader from "../components/PageHeader";
import MovieCard, { score } from "../components/MovieCard";
import { MovieTrends } from "../data/MovieData";

const Trending = () => {
  const [top, ...rest] = MovieTrends.slice(0, 9);

  return (
    <Layout>
      <main className="mx-auto w-full max-w-7xl px-5 pb-16 pt-10 sm:px-8">
        <PageHeader title="Trending now" text="The movies Cineverse viewers are watching right now." />

        {top && (
          <section className="relative mt-10 flex min-h-[440px] items-end overflow-hidden rounded-3xl bg-[#17121f]">
            <img src={`/images/${top.titleImage}`} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[#0d0a12]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a12] via-[#0d0a12]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0a12] via-[#0d0a12]/60 to-transparent" />
            <div className="relative max-w-2xl p-7 sm:p-12">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-white/80">
                <span className="rounded-full bg-[#f4b942] px-3 py-1 font-bold text-black">#1 trending</span>
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <FaStar className="text-[#f4b942]" /> {score(top)}
                </span>
                <span>{top.year}</span>
                <span>{top.category}</span>
              </div>
              <h2 className="cv-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">{top.name}</h2>
              <p className="mt-4 text-white/75">{top.desc}</p>
              <Link
                to={`/movie/${top.name}`}
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#f4b942] px-8 py-4 font-bold text-black transition hover:bg-white"
              >
                <FaPlay className="text-sm" /> Watch now
              </Link>
            </div>
          </section>
        )}

        {rest.length > 0 && (
          <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {rest.map((movie, i) => (
              <div key={`${movie.name}-${i}`}>
                <p className="cv-display mb-3 text-2xl font-extrabold text-[#f4b942]">
                  {String(i + 2).padStart(2, "0")}
                </p>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </main>
    </Layout>
  );
};

export default Trending;