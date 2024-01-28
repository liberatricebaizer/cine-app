import React from "react";
import MainDrawer from "./MainDrawer";
import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { BsCollectionPlay, BsFillPhoneFill } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaFacebook, FaMedium, FaTelegram, FaTwitter } from "react-icons/fa";

const MenuDrawer = ({ drawerOpen, toggleDrawer }) => {
  const active = "bg-dry text-groon";
  const hover = "hover:bg-dry";
  const inActive =
    "rounded sm:gap-10 font-medium text-sm transitions flex gap-6 items-center sm:px-8 p-4 py-4";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  const Links = [
    { name: "Movies", link: "/browser-movies", icon: BsCollectionPlay },
    { name: "About Us", link: "/about-us", icon: HiOutlineUserGroup },
    { name: "Contact Us", link: "/contact-us", icon: BsFillPhoneFill },
  ];
  const LinkDatas = [
    { icon: FaFacebook, link: "https://www.facebook.com" },
    { icon: FaMedium, link: "https://www.facebook.com" },
    { icon: FaTelegram, link: "https://www.facebook.com" },
    { icon: FaTwitter, link: "https://www.facebook.com" },
  ];
  return (
    <MainDrawer drawerOpen={drawerOpen} closeDrawer={toggleDrawer}>
      <div className="flex flex-col w-full h-full justify-between items-center bg-main text-white rounded">
        <div className="w-full flex-btn h-16 px-6 py-4 bg-dry">
          <Link onClick={toggleDrawer} to="/">
            {/* <h1 className="text-sm">Cineverse</h1> */}
            <img
              src="/images/5a.jpg"
              alt="logo"
              className="w-8 object-contain h-8"
            />
          </Link>
          <button
            onClick={toggleDrawer}
            type="button"
            className="w-10 h-10  overflow-y-auto flex-colo text-base font-bold text-red-800 bg-groon rounded-full transitions hover:bg-white hover:text-groon     "
          >
            <IoMdClose />
          </button>
        </div>
        <div className="w-full overflow-y-scroll flex-grow max-height-full">
          <div className="pb-12 pt-4">
            {Links.map((link, index) => (
              <NavLink
                to={link.link}
                key={index}
                onClick={toggleDrawer}
                className={Hover}
              >
                <link.icon className="text-lg" />
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="flex-rows gap-6 w-full">
            {LinkDatas.map((link, index) => (
              <a
                href={link.link}
                key={index}
                target="_blank"
                rel="noreferrer"
                className="flex-colo w-12 h-12 transitions hover:bg-groon text-lg bg-white rounded bg-opacity-30"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </MainDrawer>
  );
};

export default MenuDrawer;
