import React from "react";
import Layout from "../layout/Layout";
import Titles from "../components/Titles";
import { MovieTrends } from "../data/MovieData";
import { BsCollectionFill } from "react-icons/bs";
import Movie from "../components/Movie";

const Trending = () => {
  return (
    <Layout>
      <div className="my-16">
        <Titles title="Cineverse Trending Movies" Icon={BsCollectionFill} />
        <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-10">
          {MovieTrends.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Trending;
