
import React from "react";

const Titles = ({ title, Icon }) => (
  <div className="flex items-center gap-3">
    {Icon && (
      <span className="flex size-10 items-center justify-center rounded-xl bg-[#f4b942] text-black">
        <Icon />
      </span>
    )}
    <h2 className="cv-display text-2xl font-extrabold text-white sm:text-3xl">{title}</h2>
  </div>
);

export default Titles;