import React from "react";

const Head = ({ title }) => {
  return (
    <div className="w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md">
      <img
        src="/images/4a.jpg"
        alt="aboutus"
        className="w-full h-full object-cover"
      />
      <div className="absolute lg:top-24 top-16 w-full flex-colo">
        <h1 className="text-2xl lg:text-h1 hover:underline  text-white text-center font-bold">
          {title && title}
        </h1>
      </div>
    </div>
  );
};

export default Head;
