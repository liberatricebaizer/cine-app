import React from "react";
import Titles from "../Titles";
import { FaUserFriends } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

const cast = [
  ["Avery Brooks", "1a.jpg", "Lead performer"],
  ["Maya Bennett", "3a.jpg", "Supporting cast"],
  ["Jon Bell", "4a.jpg", "Supporting cast"],
  ["Nia Carter", "5a.jpg", "Featured performer"],
  ["Elliot Stone", "6a.jpg", "Guest performer"],
];

const MovieCasts = () => <div className="mt-56"><Titles title="Top Cast" Icon={FaUserFriends} /><div className="mt-10"><Swiper spaceBetween={16} breakpoints={{ 0: { slidesPerView: 1.4 }, 400: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }, 1280: { slidesPerView: 5 } }}>{cast.map(([name, image, role]) => <SwiperSlide key={name}><div className="group overflow-hidden rounded-2xl border border-white/10 bg-dry"><img src={`/images/${image}`} alt={`${name}, ${role}`} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" /><div className="p-4"><p className="font-semibold text-white">{name}</p><p className="mt-1 text-xs text-text">{role}</p></div></div></SwiperSlide>)}</Swiper></div></div>;

export default MovieCasts;
