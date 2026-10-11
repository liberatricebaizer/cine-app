import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaPlay, FaStar } from "react-icons/fa";

// Your data stores rate as 100-500, so rate / 100 gives a score out of 5.
export const score = (movie) => ((movie?.rate || 0) / 100).toFixed(1);

const MovieCard = ({ movie }) => {
    const [liked, setLiked] = useState(false);

    return (
        <article className="group">
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-[#17121f] ring-1 ring-white/10 transition duration-300 group-hover:ring-[#f4b942]/60">
                <img
                    src={`/images/${movie.titleImage}`}
                    alt={`${movie.name} poster`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-md">
                    <FaStar className="text-[#f4b942]" /> {score(movie)}
                </span>

                <button
                    type="button"
                    onClick={() => setLiked((v) => !v)}
                    aria-pressed={liked}
                    aria-label={`${liked ? "Remove" : "Add"} ${movie.name} ${liked ? "from" : "to"} favorites`}
                    className={`absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full backdrop-blur-md transition ${liked ? "bg-[#f4b942] text-black" : "bg-black/60 text-white hover:bg-white hover:text-black"
                        }`}
                >
                    <FaHeart className="text-sm" />
                </button>

                <Link
                    to={`/movie/${movie.name}`}
                    aria-label={`Watch ${movie.name}`}
                    className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 opacity-0 transition duration-300 focus-visible:opacity-100 group-hover:opacity-100"
                >
                    <p className="line-clamp-2 text-xs leading-5 text-white/80">{movie.desc}</p>
                    <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-[#f4b942] px-4 py-2 text-sm font-bold text-black">
                        <FaPlay className="text-[10px]" /> Watch
                    </span>
                </Link>
            </div>

            <h3 className="mt-3 truncate font-semibold text-white">{movie.name}</h3>
            <p className="mt-0.5 truncate text-xs text-[#a79fb5]">
                {movie.year} · {movie.category} · {movie.time}
            </p>
        </article>
    );
};

export default MovieCard;