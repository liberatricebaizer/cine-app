import React, { useState } from "react";
import Layout from "../layout/Layout";
import Filters from "../components/Filters";
import Movie from "../components/Movie";
import { Movies } from "../data/MovieData";
import { CgSpinner } from "react-icons/cg";

const MoviesPage = () => {
  const maxPage = 10;
  const [page, setPage] = useState(maxPage);
  const HandlerLoadingMore = () => {
    setPage(page + maxPage);
  };
  return (
    <Layout>
      <main className="min-h-screen container mx-auto max-w-7xl px-4 py-8 lg:px-6">
        <Filters />
        <p className="text-lg font-medium my-6">
          Total <span className="font-bold text-groon">{Movies?.length}</span>{" "}
          item found
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {Movies.slice(0, page)?.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
        <div className="w-full flex-colo md:my-20 my-10">
          <button
            onClick={HandlerLoadingMore}
            className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border border-groon"
          >
            {" "}
            Loading More <CgSpinner className="animate-spin" />{" "}
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default MoviesPage;
