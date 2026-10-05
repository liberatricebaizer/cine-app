import React from "react";
import Layout from "../layout/Layout";
import Banner from "../components/home/Banner";
import PopularMovies from "../components/home/PopularMovies";
import Promos from "../components/home/Promos";
import TopRated from "../components/home/TopRated";

const HomeScreen = () => (
  <Layout>
    <main className="container mx-auto min-h-screen max-w-7xl px-4 py-6 lg:px-6 lg:py-8">
      <Banner />
      <div className="flex flex-col gap-2 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-groon">Your next favorite</p><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stories that stay with you</h2></div>
        <p className="max-w-sm text-sm leading-6 text-text">Curated films, unforgettable performances, and new discoveries for every kind of night.</p>
      </div>
      <PopularMovies />
      <Promos />
      <TopRated />
    </main>
  </Layout>
);

export default HomeScreen;
