import React, { useState } from "react";
import Titles from "../Titles";
import { BiSolidBookmarkStar } from "react-icons/bi";
import { Message, Select } from "../UsedInputs";
import Rating from "../Star";
import { FaStar } from "react-icons/fa";

const reviews = [
  ["Diana Cole", "2a.jpg", 4.5, "A thoughtful story with a beautiful ending."],
  ["Marcus Reed", "4a.jpg", 4, "The performances kept me hooked from start to finish."],
  ["Sofia Lane", "7a.jpg", 5, "A warm, memorable movie I would watch again."],
];

const MovieRates = ({ movie }) => {
  const [rating, setRating] = useState(0);
  const ratings = ["0 - Poor", "1 - Fair", "2 - Good", "3 - Very Good", "4 - Excellent", "5 - Masterpiece"].map((title, value) => ({ title, value }));
  return <div className="my-12"><Titles title="Reviews" Icon={BiSolidBookmarkStar} /><div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded"><div className="xl:col-span-2 w-full flex flex-col gap-8"><h3 className="text-xl text-text font-semibold">Review &apos;{movie?.name}&apos;</h3><p className="text-sm leading-7 font-medium text-border">Share what you thought about this movie with the community.</p><div className="text-sm w-full"><Select label="Select Rating" options={ratings} onChange={(event) => setRating(event.target.value)} /><div className="flex mt-4 text-lg gap-2 text-star"><Rating value={rating} /></div></div><Message label="Your Message" placeholder="Enter your review..." /><button className="bg-groon text-white py-3 w-full rounded flex-colo">Submit Review</button></div><div className="col-span-3 flex flex-col gap-6"><h3 className="text-xl text-white font-semibold flex gap-3 items-center"><FaStar className="text-groon" /> Movie Reviews ({reviews.length})</h3><div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">{reviews.map(([name, image, score, message]) => <div key={name} className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry border border-gray-800 rounded-lg p-3"><div className="col-span-2 hidden bg-main md:block"><img src={`/images/${image}`} alt={`${name} review avatar`} className="w-full h-24 rounded-lg object-cover" /></div><div className="col-span-7 flex flex-col gap-2"><h2 className="text-white">{name}</h2><p className="text-xs leading-6 font-medium text-text">{message}</p></div><div className="col-span-3 flex-rows border-l border-border text-xs gap-1 text-star"><Rating value={score} /></div></div>)}</div></div></div></div>;
};

export default MovieRates;
