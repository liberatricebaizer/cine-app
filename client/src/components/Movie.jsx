import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-dry shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-groon/50">
      <Link to={`/movie/${movie?.name}`} className="relative block aspect-[2/3] overflow-hidden">
        <img
          src={`/images/${movie?.titleImage}`}
          alt={`${movie?.name} poster`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          {movie?.category}
        </span>
        <span className="absolute bottom-3 left-4 text-sm font-medium text-white">{movie?.year}</span>
      </Link>
      <div className="flex items-center justify-between gap-3 px-4 py-4">
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-white">{movie?.name}</h3>
          <p className="mt-1 text-xs text-text">{movie?.time} · {movie?.language}</p>
        </div>
        <button
          type="button"
          aria-label={`${isFavorite ? "Remove" : "Add"} ${movie?.name} ${isFavorite ? "from" : "to"} favorites`}
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((favorite) => !favorite)}
          className={`flex size-9 shrink-0 items-center justify-center rounded-full transition ${isFavorite ? "bg-groon text-main" : "bg-white/5 text-text hover:bg-groon hover:text-main"}`}
        >
          <FaHeart />
        </button>
      </div>
    </article>
  );
};

export default Movie;
