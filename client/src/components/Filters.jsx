
import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown, FaCheck, FaSearch } from "react-icons/fa";

export const DEFAULT_FILTERS = { genre: "all", year: "all", time: "all", rate: "all", sort: "popular" };

const YEARS = [
  { value: "all", label: "Any year" },
  { value: "2020", label: "2020 and later" },
  { value: "2010", label: "2010 – 2019" },
  { value: "old", label: "Before 2010" },
];
const TIMES = [
  { value: "all", label: "Any length" },
  { value: "short", label: "Under 90 min" },
  { value: "medium", label: "90 – 120 min" },
  { value: "long", label: "Over 120 min" },
];
const RATES = [
  { value: "all", label: "Any rating" },
  { value: "5", label: "5 stars" },
  { value: "4", label: "4 stars & up" },
  { value: "3", label: "3 stars & up" },
  { value: "2", label: "2 stars & up" },
];
const SORTS = [
  { value: "popular", label: "Most reviewed" },
  { value: "rating", label: "Highest rated" },
  { value: "newest", label: "Newest first" },
  { value: "az", label: "A to Z" },
];

// Genres come from your movie data, so the list always matches what exists.
export const getGroups = (genres) => [
  {
    key: "genre",
    label: "Genre",
    items: [{ value: "all", label: "All genres" }, ...genres.map((g) => ({ value: g.toLowerCase(), label: g }))],
  },
  { key: "year", label: "Year", items: YEARS },
  { key: "time", label: "Length", items: TIMES },
  { key: "rate", label: "Rating", items: RATES },
  { key: "sort", label: "Sort by", items: SORTS },
];

const Filters = ({ groups, values, onChange, search, onSearch }) => (
  <div className="rounded-2xl bg-[#17121f] p-4 ring-1 ring-white/10 sm:p-5">
    <label className="relative block">
      <span className="sr-only">Search by title, genre, language or director</span>
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a79fb5]" aria-hidden="true" />
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search by title, genre, language or director"
        className="w-full rounded-xl bg-[#0d0a12] py-3.5 pl-11 pr-4 text-sm text-white ring-1 ring-white/10 placeholder:text-[#a79fb5] focus:outline-none focus:ring-2 focus:ring-[#f4b942]"
      />
    </label>

    <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-5">
      {groups.map((group) => {
        const current = group.items.find((i) => i.value === values[group.key]) || group.items[0];
        const changed = group.key !== "sort" && values[group.key] !== "all";
        return (
          <Listbox key={group.key} value={values[group.key]} onChange={(v) => onChange(group.key, v)}>
            <div className="relative">
              <Listbox.Button
                aria-label={`${group.label}: ${current.label}`}
                className={`flex w-full items-center justify-between gap-2 rounded-xl bg-[#0d0a12] px-4 py-3 text-left text-sm text-white ring-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4b942] ${changed ? "ring-[#f4b942]" : "ring-white/10 hover:ring-white/30"
                  }`}
              >
                <span className="truncate">{current.label}</span>
                <FaAngleDown className="shrink-0 text-[#a79fb5]" aria-hidden="true" />
              </Listbox.Button>
              <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <Listbox.Options className="absolute z-20 mt-2 max-h-64 w-full min-w-[11rem] overflow-auto rounded-xl bg-[#1d1727] p-1.5 text-sm shadow-2xl ring-1 ring-white/15 focus:outline-none">
                  {group.items.map((item) => (
                    <Listbox.Option
                      key={item.value}
                      value={item.value}
                      className={({ active }) =>
                        `relative cursor-pointer select-none rounded-lg py-2.5 pl-9 pr-3 ${active ? "bg-[#f4b942] text-black" : "text-white"
                        }`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? "font-semibold" : ""}`}>{item.label}</span>
                          {selected && (
                            <span className="absolute inset-y-0 left-3 flex items-center">
                              <FaCheck className="text-xs" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        );
      })}
    </div>
  </div>
);

export default Filters;