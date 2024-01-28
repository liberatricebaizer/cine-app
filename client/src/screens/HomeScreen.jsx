import React from "react";
import Layout from "../layout/Layout";
import Banner from "../components/home/Banner";
import PopularMovies from "../components/home/PopularMovies";
import Promos from "../components/home/Promos";
import TopRated from "../components/home/TopRated";

const HomeScreen = () => {
  return (
    <Layout>
      <div className="container max-auto min-h-screen px-2 mb-6">
        <Banner />
        <PopularMovies />
        <Promos />
        <TopRated />
      </div>
    </Layout>
  );
};

export default HomeScreen;
