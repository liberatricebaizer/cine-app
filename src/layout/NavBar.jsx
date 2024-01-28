import React from "react";
import { MdSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaHeart, FaSearch } from "react-icons/fa";
const NavBar = () => {
  const hover = "hover:text-groon transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-groon" : hover);
  return (
    <div className="p-4 bg-main shodow-md sticky top-0 z-20">
      <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
        <div className="col-span-1 lg:block hidden">
          <NavLink to="/" className="text-groon">
            <h1 className="">Cineverse</h1>
            {/* <img src="" alt="" className="w-full h-12 object-contain" /> */}
          </NavLink>
        </div>
        <div className="col-span-3 ">
          <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
            <button
              type="submit"
              className="bg-groon w-12 flex-colo h-12 rounded text-white"
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Quick Search"
              className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
            />
          </form>
        </div>
        <div className="col-span-3 font-medium text-sm hidden xl:gap-12 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
          <NavLink to="/" className={Hover}>
            Home
          </NavLink>
          <NavLink to="/favorites" className={`${Hover} relative`}>
            <FaHeart className="w-6 h-6 " />
            <div className="w-5 h-5 flex-colo rounded-full text-xs bg-groon text-white absolute -top-5 -right-1">
              2
            </div>
          </NavLink>
          <NavLink to="/trending" className={Hover}>
            Trending
          </NavLink>
          <NavLink to="/browser-movies" className={Hover}>
            Browser Movies
          </NavLink>
          <div className="flex gap-2">
            <NavLink to="/login" className={Hover}>
              Login
            </NavLink>
            |
            <NavLink to="/register" className={Hover}>
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
