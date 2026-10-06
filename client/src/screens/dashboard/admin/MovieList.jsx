import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import Table from "../../../components/Table";
import { Movies } from "../../../data/MovieData";

const MovieList = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(Movies);
  const deleteMovie = (movie) => setMovies((current) => current.filter((item) => item !== movie));
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Movies List</h2>
          <div className="flex gap-2">
            <button onClick={() => setMovies([])} className="bg-main font-medium transitions hover:bg-groon border border-groon text-white py-3 px-4 rounded">Delete All</button>
            <button onClick={() => navigate("/addMovie")} className="bg-groon font-medium transitions hover:bg-main border border-groon text-white py-3 px-4 rounded">Add Movie</button>
          </div>
        </div>
        {movies.length ? <Table data={movies} admin onDelete={deleteMovie} /> : <p className="text-border py-10 text-center">No movies available. Add a movie to get started.</p>}
      </div>
    </SideBar>
  );
};
export default MovieList;
