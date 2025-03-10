import React, { Fragment, useState } from "react";
import { categoryData } from "../data/CategoriesData";

import { Listbox, Transition } from "@headlessui/react";

import { FaAngleDown, FaCheck } from "react-icons/fa";

const YearData = [
  { title: "Sort By Year" },
  { title: "1700 - 1800" },
  { title: "1800 - 1900" },
  { title: "1900 - 2000" },
  { title: "2000 - 2010" },
  { title: "2010 - 2030" },
];
const TimeData = [
  { title: "Sort By Hours" },
  { title: "1 - 5" },
  { title: "5 - 10" },
  { title: "10 -1 5" },
  { title: "15 - 15" },
];
const RatesData = [
  { title: "Sort By Rates" },
  { title: "1 Star" },
  { title: "2 Star" },
  { title: "3 Star" },
  { title: "4 Star" },
  { title: "5 Star" },
];
const Filters = () => {
  const [category, setCategory] = useState({ title: "Category" });
  const [year, setYear] = useState(YearData[0]);
  const [times, setTimes] = useState(TimeData[0]);
  const [rates, setRates] = useState(RatesData[0]);

  const Filter = [
    { value: category, onChange: setCategory, items: categoryData },
    { value: year, onChange: setYear, items: YearData },
    { value: times, onChange: setTimes, items: TimeData },
    { value: rates, onChange: setRates, items: RatesData },
  ];
  return (
    <div className="my-6 bg-dry text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative">
            <Listbox.Button className="relative border border-gray-800 w-full text-white bg-main rounded-lg  shadow-sm cursor-default py-4 pl-6 pr-10 text-left text-sm">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ">
                <FaAngleDown className="h-4 w-4 aria-hidden='true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {item.items.map((iterm, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-groon text-white" : "text-main"
                      }`
                    }
                    value={iterm}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {iterm.title}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <p>
                              <FaCheck className="h-3 w-3" aria-hidden="true" />
                            </p>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
};

export default Filters;
