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
  const movie = Movies.find((item) => item.name === id) || Movies[0];
  const relatedMovies = Movies.filter((item) => item.category === movie.category && item !== movie).slice(0, 5);
  return <Layout><ShareModal modalOpen={modalOpen} setModalOpen={setModalOpen} movie={movie} /><MovieInfo movie={movie} setModalOpen={setModalOpen} /><div className="container mx-auto min-h-screen px-2 my-6"><MovieCasts movie={movie} /><MovieRates movie={movie} /><div className="my-16"><Titles title="Related Movies" Icon={BiSolidCollection} /><div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">{relatedMovies.map((related, index) => <Movie key={`${related.name}-${related.titleImage}-${index}`} movie={related} />)}</div></div></div></Layout>;
};

export default SingleMovie;
