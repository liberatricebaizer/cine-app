
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUserFriends } from "react-icons/fa";
import Titles from "../Titles";
import "swiper/css";

const cast = [
  ["Avery Brooks", "1a.jpg", "Lead performer"],
  ["Maya Bennett", "3a.jpg", "Supporting cast"],
  ["Jon Bell", "4a.jpg", "Supporting cast"],
  ["Nia Carter", "5a.jpg", "Featured performer"],
  ["Elliot Stone", "6a.jpg", "Guest performer"],
];

const MovieCasts = () => (
  <section className="py-12">
    <Titles title="Top cast" Icon={FaUserFriends} />
    <Swiper
      spaceBetween={20}
      slidesPerView={1.5}
      breakpoints={{ 480: { slidesPerView: 2.3 }, 768: { slidesPerView: 3.3 }, 1024: { slidesPerView: 4.3 }, 1280: { slidesPerView: 5 } }}
      className="mt-8"
    >
      {cast.map(([name, image, role]) => (
        <SwiperSlide key={name}>
          <div className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[#17121f] ring-1 ring-white/10">
              <img
                src={`/images/${image}`}
                alt={`${name}, ${role}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 font-semibold text-white">{name}</p>
            <p className="text-xs text-[#a79fb5]">{role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default MovieCasts;