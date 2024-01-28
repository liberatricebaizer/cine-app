/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: { header: "560px", rate: "400px" },
      fontSize: { h1: "2.6rem" },
      colors: {
        square: "hsl(236, 94%, 6%)",
        // main: "#080A1A",
        main: "#000000",
        subMain: "#F20000",
        // dry: "#0B0F29",
        dry: "#1a1a1a",
        star: "#FFB000",
        text: "#C0C0C0",
        border: "#4b5563",
        dryGray: "#E0D5D5",
        groon: "#20cc97",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
