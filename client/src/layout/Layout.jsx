
import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen bg-[#0d0a12] text-white">
      <NavBar />
      {/* The navbar is fixed. The home hero sits under it; other pages get space so nothing hides. */}
      <div className={isHome ? "" : "pt-20"}>{children}</div>
      <Footer />
      <MobileFooter />
    </div>
  );
};

export default Layout;