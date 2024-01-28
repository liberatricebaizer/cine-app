import React from "react";

function Titles({ title, Icon }) {
  return (
    <div className="w-full sm:gap-4 gap-2  items-center flex">
      <Icon className="sm:h-6 w-4 h-4 text-groon" />
      <h2 className="sm:text-xl font-bold text-lg">{title}</h2>
    </div>
  );
}

export default Titles;
