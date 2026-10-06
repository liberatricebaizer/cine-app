import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../layout/Layout";
import Filters from "../components/Filters";
import Movie from "../components/Movie";
import { Movies } from "../data/MovieData";
import { CgSpinner } from "react-icons/cg";

const defaults = {
  category: { title: "Category" },
  year: { title: "Sort By Year" },
  time: { title: "Sort By Hours" },
  rate: { title: "Sort By Rates" },
};

const MoviesPage = () => {
  const [page, setPage] = useState(10);
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState(defaults);
  const query = searchParams.get("search")?.trim().toLowerCase() || "";

  const filteredMovies = useMemo(() => Movies.filter((movie) => {
    const searchable = `${movie.name} ${movie.category} ${movie.language} ${movie.nameDirector}`.toLowerCase();
    const category = filters.category.title === "Category" || searchable.includes(filters.category.title.toLowerCase());
    const year = filters.year.title === "Sort By Year" || (() => {
      const [from, to] = filters.year.title.split(" - ").map(Number);
      return Number(movie.year) >= from && Number(movie.year) <= to;
    })();
    const hours = Number.parseFloat(movie.time) * 60 + (movie.time.includes("hr") ? Number.parseInt(movie.time.match(/(\d+) min/)?.[1] || "0", 10) : 0);
    const time = filters.time.title === "Sort By Hours" || (() => {
      const [from, to] = filters.time.title.split(" - ").map(Number);
      return hours >= from * 60 && hours <= to * 60;
    })();
    const rate = filters.rate.title === "Sort By Rates" || Math.round(movie.rate / 100) === Number.parseInt(filters.rate.title, 10);
    return (!query || searchable.includes(query)) && category && year && time && rate;
  }), [filters, query]);

  const updateFilter = (key, value) => {
    setPage(10);
    setFilters((current) => ({ ...current, [key]: value }));
  };

  return (
    <Layout>
      <main className="min-h-screen container mx-auto max-w-7xl px-4 py-8 lg:px-6">
        <div className="mb-8"><p className="text-sm uppercase tracking-[0.2em] text-groon">Explore the collection</p><h1 className="mt-2 text-3xl font-bold text-white">Find your next favorite</h1><p className="mt-2 max-w-2xl text-sm text-text">Search by title, genre, language, or director and narrow the library with the filters below.</p></div>
        <Filters value={filters} onChange={updateFilter} />
        <p className="text-lg font-medium my-6">Total <span className="font-bold text-groon">{filteredMovies.length}</span> item{filteredMovies.length === 1 ? "" : "s"} found</p>
        {filteredMovies.length ? <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">{filteredMovies.slice(0, page).map((movie, index) => <Movie key={`${movie.name}-${movie.titleImage}-${index}`} movie={movie} />)}</div> : <div className="rounded-2xl border border-white/10 bg-dry px-6 py-16 text-center"><h2 className="text-xl font-semibold text-white">No movies match those filters</h2><p className="mt-2 text-sm text-text">Try a different title, genre, year, or rating.</p></div>}
        {page < filteredMovies.length && <div className="w-full flex-colo md:my-20 my-10"><button onClick={() => setPage((current) => current + 10)} className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border border-groon">Loading More <CgSpinner className="animate-spin" /></button></div>}
      </main>
    </Layout>
  );
};

export default MoviesPage;
