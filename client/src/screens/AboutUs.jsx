
import React from "react";
import { Link } from "react-router-dom";
import { FaFilm, FaStar, FaPenNib } from "react-icons/fa";
import Layout from "../layout/Layout";
import PageHeader from "../components/PageHeader";

const stats = [
  { value: "12K", label: "Listed movies", text: "Movies ignite worlds, evoke feelings and inspire. Embrace their magic." },
  { value: "10K", label: "Lovely users", text: "Completely free. Embrace your uniqueness and shine brightly." },
];

const offers = [
  { Icon: FaFilm, title: "Engaging content", text: "From classic masterpieces to the latest blockbusters." },
  { Icon: FaStar, title: "Honest reviews", text: "Ratings and opinions from people who love film." },
  { Icon: FaPenNib, title: "Insightful articles", text: "Stories behind the movies you care about." },
];

const AboutUs = () => (
  <Layout>
    <main className="mx-auto w-full max-w-7xl px-5 pb-16 pt-10 sm:px-8">
      <PageHeader
        title="Where cinematic passion meets storytelling"
        text="Welcome to Cineverse, built in Bujumbura for people who love movies."
      />

      <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
        <div className="space-y-6 text-lg leading-8 text-[#a79fb5]">
          <p>
            At Cineverse, we're dedicated to bringing you the best of the cinematic world. Our team is made up of movie
            enthusiasts who live and breathe the magic of film. From classic masterpieces to the latest blockbusters, we
            share our love for movies through engaging content, reviews and insightful articles.
          </p>
          <p>
            Our mission is to create a vibrant community where movie lovers of all kinds can connect, explore and
            celebrate the art of filmmaking. Join us on the cinematic journey as we delve into the realms of
            imagination, entertainment and creativity.
          </p>
          <Link
            to="/browser-movies"
            className="inline-flex rounded-full bg-[#f4b942] px-8 py-4 font-bold text-black transition hover:bg-white"
          >
            Browse the library
          </Link>
        </div>

        <div className="relative mx-auto flex h-[340px] w-full max-w-md items-center justify-center">
          {["1a.jpg", "2a.jpg", "3a.jpg"].map((img, i) => (
            <img
              key={img}
              src={`/images/${img}`}
              alt=""
              loading="lazy"
              style={{ transform: `translateX(${(i - 1) * 100}px) rotate(${(i - 1) * 7}deg) translateY(${i === 1 ? -12 : 8}px)` }}
              className="absolute aspect-[2/3] w-40 rounded-2xl object-cover shadow-2xl ring-1 ring-white/15 sm:w-44"
            />
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 md:grid-cols-2">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#17121f] p-8 sm:p-12">
            <p className="cv-display text-6xl font-extrabold text-[#f4b942] sm:text-7xl">{s.value}</p>
            <h2 className="mt-3 text-xl font-semibold text-white">{s.label}</h2>
            <p className="mt-2 max-w-sm leading-7 text-[#a79fb5]">{s.text}</p>
          </div>
        ))}
      </div>

      <section className="mt-20">
        <h2 className="cv-display text-3xl font-extrabold text-white sm:text-4xl">What we share</h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-3">
          {offers.map(({ Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b942] text-black">
                <Icon />
              </span>
              <div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-7 text-[#a79fb5]">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  </Layout>
);

export default AboutUs;