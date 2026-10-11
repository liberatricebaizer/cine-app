
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHeart, FaSearch, FaBars, FaTimes, FaPlay } from "react-icons/fa";

const FAVORITES_COUNT = 2; // replace with the real count from your favorites state/context

const links = [
  ["Home", "/"],
  ["Browse", "/browser-movies"],
  ["Trending", "/trending"],
  ["About", "/about-us"],
];

const fontStyle = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&display=swap');
.cv-display{font-family:'Bricolage Grotesque',system-ui,sans-serif;letter-spacing:-0.035em}
`;

const NavBar = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ctrl/⌘ + K focuses the search box
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/browser-movies?search=${encodeURIComponent(query.trim())}`);
    setOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `relative py-1 transition ${isActive
      ? "text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded after:bg-[#f4b942]"
      : "text-[#a79fb5] hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b transition duration-300 ${scrolled || open ? "border-white/10 bg-[#0d0a12]/85 backdrop-blur-xl" : "border-transparent"
        }`}
    >
      <style>{fontStyle}</style>
      <div className="mx-auto flex w-full max-w-7xl items-center gap-6 px-5 py-4 sm:px-8">
        <NavLink to="/" className="flex shrink-0 items-center gap-2.5 text-white">
          {/* <span className="flex size-9 items-center justify-center rounded-xl bg-[#f4b942] text-black">
            <FaPlay className="ml-0.5 text-xs" />
          </span> */}
          <span className="cv-display text-xl font-extrabold">Cineverse</span>
        </NavLink>

        <form
          onSubmit={submit}
          className="hidden min-w-0 flex-1 items-center rounded-full bg-white/10 px-4 ring-1 ring-white/10 focus-within:ring-[#f4b942] md:flex lg:max-w-sm"
        >
          <FaSearch className="text-[#a79fb5]" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search movies"
            placeholder="Search titles, genres, people"
            className="h-11 w-full bg-transparent px-3 text-sm text-white placeholder:text-[#a79fb5] focus:outline-none"
          />
          <kbd className="hidden rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] text-[#a79fb5] xl:block">Ctrl K</kbd>
        </form>

        <nav className="ml-auto hidden items-center gap-8 text-sm font-medium lg:flex" aria-label="Main navigation">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === "/"} className={linkClass}>
              {label}
            </NavLink>
          ))}
          {/* <NavLink
            to="/favorites"
            aria-label={`Favorites, ${FAVORITES_COUNT} saved`}
            className="relative flex size-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 transition hover:bg-white/20"
          >
            <FaHeart />
            <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-[#f4b942] text-[11px] font-bold text-black">
              {FAVORITES_COUNT}
            </span>
          </NavLink> */}
          <NavLink
            to="/login"
            className="rounded-full bg-[#f4b942] px-6 py-2.5 font-bold text-black transition hover:bg-white"
          >
            Sign in
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto flex size-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 lg:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-5 pb-6 pt-4 lg:hidden">
          <form onSubmit={submit} className="mb-5 flex items-center rounded-full bg-white/10 px-4 ring-1 ring-white/10">
            <FaSearch className="text-[#a79fb5]" aria-hidden="true" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search movies"
              placeholder="Search movies"
              className="h-11 w-full bg-transparent px-3 text-sm text-white placeholder:text-[#a79fb5] focus:outline-none"
            />
          </form>
          <nav className="flex flex-col gap-1 text-base" aria-label="Mobile navigation">
            {[...links].map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 transition ${isActive ? "bg-white/10 text-white" : "text-[#a79fb5] hover:bg-white/5 hover:text-white"}`
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-[#f4b942] px-4 py-3 text-center font-bold text-black"
            >
              Sign in
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;