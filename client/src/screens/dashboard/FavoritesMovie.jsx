import React, { useState } from "react";
import SideBar from "./SideBar";
import Table from "../../components/Table";
import { Movies } from "../../data/MovieData";

const FavoritesMovie = () => {
  const [favorites, setFavorites] = useState(Movies.slice(0, 4));
  const removeFavorite = (movie) => setFavorites((current) => current.filter((item) => item !== movie));
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Favorites Movies</h2>
          <button onClick={() => setFavorites([])} className="bg-main font-medium transitions hover:bg-groon border border-groon text-white py-3 px-6 rounded">Delete All</button>
        </div>
        {favorites.length ? <Table data={favorites} admin={false} onDelete={removeFavorite} /> : <p className="text-border py-10 text-center">Your favorites list is empty.</p>}
      </div>
    </SideBar>
  );
};
export default FavoritesMovie;
