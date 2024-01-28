import React, { useState } from "react";
import Titles from "./../Titles";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BsBookmarkStarFill,
  BsCaretLeftFill,
  BsCaretRightFill,
} from "react-icons/bs";
import { Movies } from "./../../data/MovieData";
import { FaChevronLeft, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../Star";
// import {Autoplay,Navigation} from 'swiper'
const TopRated = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  // const classNames =
  //   "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-groon text-white";
  return (
    <div className="my-16">
      <div className="flex items-center justify-between">
        <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
        <div className="w-full  flex justify-end  gap-2">
          <button className="" onClick={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button
            className=""
            onClick={(node) => {
              console.log("clicked");
              setNextEl(node);
            }}
          >
            <BsCaretRightFill />
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div className="pt-12">
          <Swiper
            navigation={{ nextEl, prevEl }}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },

              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 40 },
            }}

            // navigation={{ nextEl, prevEl }}
            // slidesPerview={4}
            // spaceBetween={40}
            // autoplay={true}
            // speed={1000}
            // loop={true}
            // modules={[Navigation, Autoplay]}
          >
            {Movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className="p-4 h-[300px]  hovered border border-gray-800 bg-dry rounded-lg overflow-hidden">
                  <img
                    src={`/images/${movie.titleImage}`}
                    alt={movie.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="px-4 gap-6 hoveres text-center absolute bg-black bg-opacity-70 top-0 left-0 bottom-0 right-0 ">
                    <button className="w-12 h-12 flex-colo transitions hover:bg-groon rounded-full bg-white bg-opacity-30 text-white">
                      <FaHeart />
                    </button>
                    <Link
                      className="font-semibold text-xl trancuted  line-clamp-2"
                      to={`/movie/${movie.name}`}
                    >
                      {movie.name}
                    </Link>
                    <div className="flex gap-2 text-star">
                      <Rating value={movie.rate} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
