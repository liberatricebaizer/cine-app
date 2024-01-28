import React from "react";
import Titles from "../Titles";
import { FaUserFriends } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { UsersData } from "../../data/MovieData";

const MovieCasts = ({ movie }) => {
  return (
    <div className="mt-56">
      <Titles title=" Top Casts" Icon={FaUserFriends} />
      <div className="mt-10">
        <Swiper
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1 },
            400: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {UsersData.map((user, i) => (
            <SwiperSlide key={i}>
              <div className="w-full p-3 italic text-text rounded flex-colo bg-dry border border-gray-800">
                <img
                  src={`/images/${user.image}`}
                  alt={user.fullName}
                  className="w-full h-56 object-cover rounded mb-2"
                />
                <p>{user?.fullName}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieCasts;
