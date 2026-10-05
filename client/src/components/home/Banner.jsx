import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Movies } from "../../data/MovieData";
import { Link } from "react-router-dom";
import { FaPlay, FaPlus } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => (
  <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-dry shadow-2xl shadow-black/30">
    <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 5000, disableOnInteraction: false }} pagination={{ clickable: true }} loop className="hero-swiper h-[510px] sm:h-[560px]">
      {Movies.slice(0, 6).map((movie, index) => (
        <SwiperSlide key={`${movie.name}-${index}`} className="relative">
          <img src={`/images/${movie.titleImage}`} alt={`${movie.name} feature`} className="absolute inset-0 h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090f] via-[#07090f]/75 to-transparent" />
          <div className="relative flex h-full max-w-2xl flex-col justify-end gap-5 px-6 pb-16 sm:px-12 sm:pb-20">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-groon">Featured premiere</p>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.05] text-white sm:text-6xl">{movie.name}</h1>
            <p className="max-w-lg text-sm leading-7 text-white/70 sm:text-base">{movie.desc || "Stories worth staying up for. Discover your next favorite film in the Cineverse."}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-text"><span>{movie.year}</span><span className="size-1 rounded-full bg-groon" /><span>{movie.time}</span><span className="rounded-full border border-white/20 px-2 py-0.5">{movie.category}</span></div>
            <div className="flex flex-wrap gap-3 pt-2"><Link to={`/movie/${movie.name}`} className="flex items-center gap-2 rounded-full bg-groon px-6 py-3 font-semibold text-main transition hover:bg-white"><FaPlay className="text-xs" /> Watch now</Link><button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"><FaPlus className="text-xs" /> My list</button></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Banner;
