import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";
const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-main text-white">
        <NavBar />
        {children}
        <Footer />
        <MobileFooter />
      </div>
    </>
  );
};

export default Layout;
