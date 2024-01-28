import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const Links = [
    {
      title: "Company",
      links: [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about-us" },
        { name: "Contact Us", link: "/contact-us" },
        { name: "Browser Movies", link: "/browser-movies" },
        { name: "Trending", link: "/trending" },
      ],
    },
    {
      title: "Categories",
      links: [
        { name: "Action", link: "#" },
        { name: "Romantic", link: "#" },
        { name: "Drama", link: "#" },
        { name: "History", link: "#" },
        { name: "Comedy", link: "#" },
      ],
    },
    {
      title: "My Account",
      links: [
        { name: "Dashboard", link: "/dashboard" },
        { name: "My Favorite", link: "/favorite" },
        { name: "Profile", link: "/profile" },
        { name: "Register", link: "/register" },
        { name: "Change Password", link: "/password" },
      ],
    },
  ];
  return (
    <div className="bg-dry py-4 border-t-2 border-black">
      <div className="container max-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
            >
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                {link.title}
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                {link.links.map((text, index) => (
                  <li key={index} className="flex items-baseline">
                    <Link
                      to={text.link}
                      className="text-border inline-block w-full hover:text-groon"
                    >
                      {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <NavLink to="/" className="text-groon">
              <h1 className="">Cineverse</h1>
              {/* <img src="" alt="logo" className="w-2/4 h-12 object-contain" /> */}
            </NavLink>
            <p className="leading-7 text-sm text-border mt-4">
              <span>
                8em Road Mirango1, Kamenge
                <br />
                Bujumbura, Burundi
              </span>
              <br />
              <span>Tel: + 257 67 157 670</span>
              <br />
              <span>Email: cineverse@gmail.com</span>
              <br />
              <span className="flex gap-14 pt-4 text-groon">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
