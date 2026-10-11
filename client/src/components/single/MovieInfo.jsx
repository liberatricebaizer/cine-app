
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCloudDownloadAlt, FaHeart, FaPlay, FaShareAlt, FaStar } from "react-icons/fa";
import { score } from "../MovieCard";

const MovieInfo = ({ movie, setModalOpen }) => {
  const [liked, setLiked] = useState(false);
  const src = movie.video || "/images/movie.mp4";

  return (
    // -mt-20 slides the hero under the fixed navbar
    <section className="relative -mt-20 overflow-hidden">
      <img src={`/images/${movie.titleImage}`} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#0d0a12]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a12] via-[#0d0a12]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0a12] via-[#0d0a12]/50 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-10 px-5 pb-14 pt-36 sm:px-8 lg:grid-cols-[300px_1fr]">
        <div className="mx-auto aspect-[2/3] w-52 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/15 lg:w-full">
          <img src={`/images/${movie.titleImage}`} alt={`${movie.name} poster`} className="h-full w-full object-cover" />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="flex items-center gap-1.5 rounded-full bg-[#f4b942] px-3 py-1 font-bold text-black">
              <FaStar /> {score(movie)}
            </span>
            <span>{movie.year}</span>
            <span>{movie.time}</span>
            <span className="rounded-full border border-white/30 px-3 py-0.5">{movie.category}</span>
            <span className="rounded-md bg-white/15 px-2 py-0.5 text-xs font-semibold">HD 4K</span>
          </div>

          <h1 className="cv-display mt-5 text-4xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {movie.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{movie.desc}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to={`/watch/${movie.name}`}
              className="flex items-center gap-3 rounded-full bg-[#f4b942] px-8 py-4 font-bold text-black transition hover:bg-white"
            >
              <FaPlay className="text-sm" /> Watch now
            </Link>
            <a
              href={src}
              download
              className="flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <FaCloudDownloadAlt /> Download
            </a>
            <button
              type="button"
              onClick={() => setLiked((v) => !v)}
              aria-pressed={liked}
              aria-label={liked ? "Remove from favorites" : "Add to favorites"}
              className={`flex size-14 items-center justify-center rounded-full ring-1 backdrop-blur-md transition ${liked ? "bg-[#f4b942] text-black ring-[#f4b942]" : "bg-white/10 text-white ring-white/20 hover:bg-white/20"
                }`}
            >
              <FaHeart />
            </button>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              aria-label="Share this movie"
              className="flex size-14 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/20"
            >
              <FaShareAlt />
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/10 pt-6">
            <div className="flex items-center gap-4">
              <img
                src={`/images/${movie.directorImage}`}
                alt={movie.nameDirector}
                className="size-14 rounded-full object-cover ring-2 ring-[#f4b942]"
              />
              <div>
                <p className="text-xs text-[#a79fb5]">Director</p>
                <p className="font-semibold capitalize text-white">{movie.nameDirector}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-[#a79fb5]">Language</p>
              <p className="font-semibold text-white">{movie.language}</p>
            </div>
            <div>
              <p className="text-xs text-[#a79fb5]">Reviews</p>
              <p className="font-semibold text-white">{movie.reviews}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;