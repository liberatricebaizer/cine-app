import React from "react";
import { FiUser } from "react-icons/fi";

const Promos = () => {
  return (
    <div className="my-20 py-10 md:px-20 px-8 bg-dry">
      <div className="lg:grid lg:grid-cols-2 lg:gap-48 items-center ">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3xl text-lg capitalize font-medium xl:leading-relaxed font-sans">
            Download Your Favorite Movies & Enjoy Them Offline On Your Mobile
            Device
          </h1>
          <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">
            With just a few taps,you can effortlessly bring the magicof cinema
            right into the palm of your hand.Whether you're home, or simply
            craving some entertainment on the go , our user-friendly platform
            allows you to curate a personalized collection of movies and indulge
            in them anytime,anywhere, Get ready to embark on a thrilling
            cinematic adventure as you immerse yourself in captivating stories,
            breathtaking visuals, and unforgettable performances. Now, sit
            back,relax,and let the magic unfold with our amazing offline
            movie-watching experience!
          </p>
          <div className="flex gap-4 md:text-lg text-sm">
            <div className="flex-colo bg-black font-bold text-groon px-6 py-3 rounded">
              HD 3K
            </div>
            <div className="flex-rows gap-4 bg-black font-bold text-groon px-6 py-3 rounded">
              <FiUser />
              5K
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-wrap gap-5">
            <img src="./images/5a.jpg" alt="" className="w-48 object-contain" />
            <img src="./images/6a.jpg" alt="" className="w-48 object-contain" />
            <img src="./images/7a.jpg" alt="" className="w-48 object-contain" />
            <img src="./images/8a.jpg" alt="" className="w-48 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promos;
