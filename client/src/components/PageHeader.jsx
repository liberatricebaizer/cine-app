import React from "react";

// Replaces your Head and Titles components on inner pages.
const PageHeader = ({ title, text }) => (
    <header className="max-w-2xl">
        <h1 className="cv-display text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl">{title}</h1>
        {text && <p className="mt-4 text-lg leading-8 text-[#a79fb5]">{text}</p>}
    </header>
);

export default PageHeader;