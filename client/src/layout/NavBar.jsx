import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const links = [
    ["Home", "/"],
    ["Browse", "/browser-movies"],
    ["Trending", "/trending"],
    ["About", "/about-us"],
  ];
  const submit = (event) => {
    event.preventDefault();
    if (query.trim()) navigate(`/browser-movies?search=${encodeURIComponent(query.trim())}`);
  };
  const linkClass = ({ isActive }) => `transition ${isActive ? "text-groon" : "text-text hover:text-white"}`;

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-main/90 backdrop-blur-xl">
      <div className="container mx-auto flex max-w-7xl items-center gap-5 px-4 py-4 lg:px-6">
        <NavLink to="/" className="brand-mark flex shrink-0 items-center gap-2 text-xl font-bold tracking-tight text-white">
          <span className="flex size-9 items-center justify-center rounded-xl bg-groon text-main">C</span>
          Cineverse
        </NavLink>
        <form onSubmit={submit} className="hidden min-w-0 flex-1 items-center rounded-xl border border-white/10 bg-white/5 px-3 md:flex lg:max-w-md">
          <FaSearch className="text-text" aria-hidden="true" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search movies" placeholder="Search titles, genres, people..." className="h-11 w-full bg-transparent px-3 text-sm text-white placeholder:text-text focus:outline-none" />
          <kbd className="hidden rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-text lg:block">⌘ K</kbd>
        </form>
        <nav className="ml-auto hidden items-center gap-7 text-sm font-medium lg:flex" aria-label="Main navigation">
          {links.map(([label, path]) => <NavLink key={path} to={path} className={linkClass}>{label}</NavLink>)}
          <NavLink to="/favorites" className="relative text-text transition hover:text-white" aria-label="Favorites"><FaHeart /><span className="absolute -right-2 -top-3 flex size-4 items-center justify-center rounded-full bg-groon text-[10px] font-bold text-main">2</span></NavLink>
          <NavLink to="/login" className="rounded-full bg-groon px-4 py-2 font-semibold text-main transition hover:bg-white">Sign in</NavLink>
        </nav>
        <button onClick={() => setOpen(!open)} className="ml-auto flex size-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden" aria-label={open ? "Close menu" : "Open menu"}>{open ? <FaTimes /> : <FaBars />}</button>
      </div>
      {open && <div className="border-t border-white/10 px-4 pb-5 pt-3 lg:hidden"><form onSubmit={submit} className="mb-4 flex items-center rounded-xl border border-white/10 bg-white/5 px-3"><FaSearch className="text-text" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search movies..." className="h-11 w-full bg-transparent px-3 text-sm text-white focus:outline-none" /></form><nav className="flex flex-col gap-4 text-sm" aria-label="Mobile navigation">{links.map(([label, path]) => <NavLink key={path} onClick={() => setOpen(false)} to={path} className={linkClass}>{label}</NavLink>)}<NavLink onClick={() => setOpen(false)} to="/favorites" className={linkClass}>Favorites</NavLink><NavLink onClick={() => setOpen(false)} to="/login" className="text-groon">Sign in</NavLink></nav></div>}
    </header>
  );
};

export default NavBar;
