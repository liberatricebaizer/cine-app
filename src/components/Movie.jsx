import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <>
      <div className="  bg-dry  hover:scale-95 transitions  rounded-md overflow-hidden">
        <Link to={`/movie/${movie?.name}`} className="w-full ">
          <img
            src={`/images/${movie?.titleImage}`}
            alt={movie?.name}
            className="w-full h-56 object-cover"
          />
        </Link>
        <div className="flex-btn  gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 ">
          <h3 className="font-semibold truncate">{movie?.name}</h3>
          <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-subMain rounded-md bg-groon text-white">
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
};

export default Movie;
