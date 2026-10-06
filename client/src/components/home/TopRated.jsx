import React from "react";
import Titles from "./../Titles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsBookmarkStarFill, BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { Movies } from "./../../data/MovieData";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../Star";
import "swiper/css";
import "swiper/css/navigation";

const TopRated = () => (
  <section className="my-20" aria-labelledby="top-rated-heading">
    <div className="flex items-center justify-between gap-4">
      <div id="top-rated-heading"><Titles title="Top Rated" Icon={BsBookmarkStarFill} /></div>
      <div className="flex gap-2">
        <button className="top-rated-prev flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text transition hover:border-groon hover:bg-groon hover:text-main" aria-label="Previous top rated movies"><BsCaretLeftFill /></button>
        <button className="top-rated-next flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text transition hover:border-groon hover:bg-groon hover:text-main" aria-label="Next top rated movies"><BsCaretRightFill /></button>
      </div>
    </div>
    <Swiper modules={[Navigation]} navigation={{ nextEl: ".top-rated-next", prevEl: ".top-rated-prev" }} spaceBetween={20} slidesPerView={1.15} breakpoints={{ 640: { slidesPerView: 2.2 }, 1024: { slidesPerView: 3.2 }, 1280: { slidesPerView: 4 } }} className="mt-8">
      {Movies.slice(0, 10).map((movie, index) => (
        <SwiperSlide key={`${movie.name}-${index}`}>
          <article className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-dry">
            <img src={`/images/${movie.titleImage}`} alt={`${movie.name} poster`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent p-5">
              <div className="translate-y-2 transition duration-300 group-hover:translate-y-0">
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-groon">{movie.category}</p>
                <Link className="line-clamp-1 text-lg font-bold text-white hover:text-groon" to={`/movie/${movie.name}`}>{movie.name}</Link>
                <div className="mt-2 flex items-center justify-between text-sm text-text"><span>{movie.year}</span><span className="flex items-center gap-1 text-star"><Rating value={movie.rate} /></span></div>
              </div>
            </div>
            <button type="button" aria-label={`Add ${movie.name} to favorites`} className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-groon hover:text-main"><FaHeart /></button>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default TopRated;
