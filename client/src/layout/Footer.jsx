
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPlay } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const columns = [
  {
    title: "Company",
    links: [
      { name: "Home", link: "/" },
      { name: "About us", link: "/about-us" },
      { name: "Contact us", link: "/contact-us" },
      { name: "Browse movies", link: "/browser-movies" },
      { name: "Trending", link: "/trending" },
    ],
  },
  {
    title: "Genres",
    links: ["Action", "Romantic", "Drama", "History", "Comedy"].map((name) => ({
      name,
      link: `/browser-movies?genre=${name}`,
    })),
  },
  {
    title: "My account",
    links: [
      { name: "Dashboard", link: "/dashboard" },
      { name: "My favorites", link: "/favorites" },
      { name: "Profile", link: "/profile" },
      { name: "Register", link: "/register" },
      { name: "Change password", link: "/password" },
    ],
  },
];

const socials = [
  { Icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/your-profile", },
  { Icon: FaFacebook, label: "Facebook", url: "https://www.facebook.com/your-profile", },
  { Icon: FaTwitter, label: "Twitter", url: "https://www.twitter.com/your-profile", },
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#0d0a12] pb-28 lg:pb-10">
    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
      <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <NavLink to="/" className="flex w-fit items-center gap-2.5 text-white">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#f4b942] text-black">
              <FaPlay className="ml-0.5 text-xs" />
            </span>
            <span className="cv-display text-xl font-extrabold" style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}>
              Cineverse
            </span>
          </NavLink>
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#a79fb5]">
            Stream and download your favorite movies, and watch them anywhere in Burundi.
          </p>
          <address className="mt-5 text-sm not-italic leading-7 text-[#a79fb5]">
            8em Road Mirango 1, Kamenge, Bujumbura, Burundi
            <br />
            <a href="tel:+25767157670" className="transition hover:text-white">+257 67 157 670</a>
            <br />
            <a href="mailto:cineverse@gmail.com" className="transition hover:text-white">cineverse@gmail.com</a>
          </address>
          <div className="mt-6 flex gap-3">
            {socials.map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 transition hover:bg-[#f4b942] hover:text-black"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-semibold text-white">{col.title}</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {col.links.map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="text-[#a79fb5] transition hover:text-[#f4b942]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-sm text-[#a79fb5] sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Cineverse. All rights reserved.</p>
        <p>Made in Bujumbura</p>
      </div>
    </div>
  </footer>
);

export default Footer;