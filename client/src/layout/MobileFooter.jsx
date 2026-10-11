
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsCollectionPlay } from "react-icons/bs";
import { FiHeart, FiHome, FiUserCheck } from "react-icons/fi";
import { CgMenuBoxed } from "react-icons/cg";
import MenuDrawer from "../components/Drawer/MenuDrawer";
import { SidebarContext } from "../context/DrawerContext";

const FAVORITES_COUNT = 2; // replace with the real count from your favorites state/context

const item = "flex flex-1 flex-col items-center gap-1 rounded-xl py-2 text-[11px] font-medium transition";
const tabClass = ({ isActive }) =>
  `${item} ${isActive ? "bg-[#f4b942] text-black" : "text-[#a79fb5] hover:text-white"}`;

const MobileFooter = () => {
  const { mobileDrawer, toggleDrawer } = useContext(SidebarContext);

  return (
    <>
      <MenuDrawer drawerOpen={mobileDrawer} toggleDrawer={toggleDrawer} />
      <nav
        aria-label="Quick navigation"
        className="fixed inset-x-3 bottom-3 z-50 flex gap-1 rounded-2xl bg-[#17121f]/90 p-1.5 ring-1 ring-white/10 backdrop-blur-xl lg:hidden"
      >
        <NavLink to="/" end className={tabClass}>
          <FiHome className="text-xl" /> Home
        </NavLink>
        <NavLink to="/browser-movies" className={tabClass}>
          <BsCollectionPlay className="text-xl" /> Browse
        </NavLink>
        {/* <NavLink to="/favorites" className={tabClass}>
          <span className="relative">
            <FiHeart className="text-xl" />
            <span className="absolute -right-2.5 -top-2 flex size-4 items-center justify-center rounded-full bg-[#f4b942] text-[10px] font-bold text-black ring-2 ring-[#17121f]">
              {FAVORITES_COUNT}
            </span>
          </span>
          Saved
        </NavLink> */}
        <NavLink to="/login" className={tabClass}>
          <FiUserCheck className="text-xl" /> Account
        </NavLink>
        <button type="button" onClick={toggleDrawer} className={`${item} text-[#a79fb5] hover:text-white`}>
          <CgMenuBoxed className="text-xl" /> Menu
        </button>
      </nav>
    </>
  );
};

export default MobileFooter;