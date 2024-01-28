import React, { useState } from "react";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import { Movies } from "../data/MovieData";
import MovieInfo from "../components/single/MovieInfo";
import MovieCasts from "../components/single/MovieCasts";
import MovieRates from "../components/single/MovieRates";
import Titles from "../components/Titles";
import { BiSolidCollection } from "react-icons/bi";
import Movie from "../components/Movie";
import ShareModal from "../components/Modals/ShareModal";

const SingleMovie = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id);
  const RelatedMovies = Movies.filter((m) => m.category === movie.category);
  return (
    <Layout>
      <ShareModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        movie={movie}
      />
      <MovieInfo movie={movie} setModalOpen={setModalOpen} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCasts />
        <MovieRates movie={movie} />
        <div className="my-16">
          <Titles title="Related Movies" Icon={BiSolidCollection} />
          <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {Movies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleMovie;
