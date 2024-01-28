import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Movies } from "../../data/MovieData";
import FlexMovieItems from "../FlexMovieItems";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "swiper/css";

const Banner = () => {
  return (
    <div className="relative w-full">
      <Swiper
        // direction="vertical"
        // spaceBetween={50}
        // slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48"
      >
        {Movies.slice(0, 6).map((movie, index) => (
          <SwiperSlide
            key={index}
            className="relative rounded  overflow-hidden"
          >
            <img
              src={`/images/${movie.titleImage}`}
              alt={movie.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 w-full flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
              <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                {movie.name}
              </h1>
              <div className=" gap-5 items-center text-dryGray">
                <FlexMovieItems movie={movie} />
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  to={`/movie/${movie.name}`}
                  className="bg-groon hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
                >
                  Watch
                </Link>
                <button className="bg-white hover:text-subMain transitions text-white px-4 bg-opacity-30 py-3 rounded text-sm">
                  <FaHeart />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    // <Swiper
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >
    //   <SwiperSlide>Slide 1</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 3</SwiperSlide>
    //   <SwiperSlide>Slide 4</SwiperSlide>
    //   ...
    // </Swiper>
  );
};

export default Banner;
