
import React, { useState } from "react";
import { BiSolidBookmarkStar } from "react-icons/bi";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Titles from "../Titles";
import { Message } from "../UsedInputs";

const LABELS = ["", "Poor", "Fair", "Good", "Very good", "Excellent"];

const initialReviews = [
  { name: "Diana Cole", score: 4.5, text: "A thoughtful story with a beautiful ending." },
  { name: "Marcus Reed", score: 4, text: "The performances kept me hooked from start to finish." },
  { name: "Sofia Lane", score: 5, text: "A warm, memorable movie I would watch again." },
];

const Stars = ({ value }) => (
  <span className="flex gap-0.5 text-[#f4b942]" role="img" aria-label={`${value} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((n) =>
      value >= n ? <FaStar key={n} /> : value >= n - 0.5 ? <FaStarHalfAlt key={n} /> : <FaRegStar key={n} />
    )}
  </span>
);

const MovieRates = ({ movie }) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");

  const average = reviews.reduce((sum, r) => sum + r.score, 0) / reviews.length;
  const canSubmit = rating > 0 && text.trim().length > 0;

  const submit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    // TODO: also send this review to your backend
    setReviews((list) => [{ name: "You", score: rating, text: text.trim() }, ...list]);
    setRating(0);
    setText("");
  };

  const shown = hover || rating;

  return (
    <section className="py-12">
      <Titles title="Reviews" Icon={BiSolidBookmarkStar} />

      <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_3fr]">
        <form onSubmit={submit} className="flex flex-col gap-5 rounded-3xl bg-[#17121f] p-7 ring-1 ring-white/10 sm:p-9">
          <div>
            <h3 className="text-xl font-semibold text-white">Review {movie?.name}</h3>
            <p className="mt-1 text-sm text-[#a79fb5]">Share what you thought with the community.</p>
          </div>

          <fieldset>
            <legend className="text-sm font-medium text-white">Your rating</legend>
            <div className="mt-3 flex items-center gap-1" onMouseLeave={() => setHover(0)}>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setRating(n)}
                  onMouseEnter={() => setHover(n)}
                  aria-label={`${n} star${n > 1 ? "s" : ""}, ${LABELS[n]}`}
                  aria-pressed={rating === n}
                  className="p-1 text-3xl text-[#f4b942] transition hover:scale-110"
                >
                  {n <= shown ? <FaStar /> : <FaRegStar />}
                </button>
              ))}
              <span className="ml-3 text-sm text-[#a79fb5]">{LABELS[shown]}</span>
            </div>
          </fieldset>

          <Message label="Your review" name="review" required value={text} onChange={(e) => setText(e.target.value)} placeholder="What did you think?" />

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full rounded-full bg-[#f4b942] px-6 py-4 font-bold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-[#f4b942]"
          >
            Submit review
          </button>
        </form>

        <div>
          <div className="flex items-center gap-5">
            <p className="cv-display text-6xl font-extrabold text-white">{average.toFixed(1)}</p>
            <div>
              <Stars value={Math.round(average * 2) / 2} />
              <p className="mt-1 text-sm text-[#a79fb5]">{reviews.length} reviews</p>
            </div>
          </div>

          <ul className="mt-6 max-h-[34rem] divide-y divide-white/10 overflow-y-auto border-t border-white/10 pr-2">
            {reviews.map((r, i) => (
              <li key={`${r.name}-${i}`} className="flex gap-4 py-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#f4b942]/15 font-bold text-[#f4b942]">
                  {r.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h4 className="font-semibold text-white">{r.name}</h4>
                    <Stars value={r.score} />
                  </div>
                  <p className="mt-1.5 text-sm leading-7 text-[#a79fb5]">{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieRates;