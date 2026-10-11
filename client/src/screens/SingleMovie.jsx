
import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiSolidCollection } from "react-icons/bi";
import Layout from "../layout/Layout";
import { Movies } from "../data/MovieData";
import MovieInfo from "../components/single/MovieInfo";
import MovieCasts from "../components/single/MovieCasts";
import MovieRates from "../components/single/MovieRates";
import Titles from "../components/Titles";
import MovieCard from "../components/MovieCard";
import ShareModal from "../components/Modals/ShareModal";

const genresOf = (m) => m.category.split("/").map((g) => g.trim().toLowerCase());

const SingleMovie = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const movie = Movies.find((item) => item.name === id);

  const related = useMemo(() => {
    if (!movie) return [];
    const mine = genresOf(movie);
    return Movies.filter((m) => m.name !== movie.name && genresOf(m).some((g) => mine.includes(g))).slice(0, 5);
  }, [movie]);

  if (!movie) {
    return (
      <Layout>
        <main className="mx-auto max-w-xl px-5 py-24 text-center">
          <h1 className="cv-display text-4xl font-extrabold text-white">Movie not found</h1>
          <p className="mt-3 text-[#a79fb5]">We could not find that movie. It may have been removed.</p>
          <Link to="/browser-movies" className="mt-8 inline-flex rounded-full bg-[#f4b942] px-8 py-4 font-bold text-black transition hover:bg-white">
            Browse movies
          </Link>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <ShareModal modalOpen={modalOpen} setModalOpen={setModalOpen} movie={movie} />
      <MovieInfo movie={movie} setModalOpen={setModalOpen} />
      <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <MovieCasts movie={movie} />
        <MovieRates movie={movie} />
        {related.length > 0 && (
          <section className="py-12">
            <Titles title="Related movies" Icon={BiSolidCollection} />
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
              {related.map((m, i) => (
                <MovieCard key={`${m.name}-${m.titleImage}-${i}`} movie={m} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default SingleMovie;