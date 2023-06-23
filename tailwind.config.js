/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        large: "6.5rem",
      },
      lineHeight: {
        loose: "1.69",
      },
      colors: {
        light: "hsl(356, 100%, 66%)",
        "light-red": "hsl(13, 100%, 72%)",
        "very-light-red": "hsl(355, 100%, 74%)",
        "very-dark-blue": "hsl(208, 49%, 24%)",
        "grayish-blue": "hsl(240, 2%, 79%)",
        "very-dark-grayish-blue": "hsl(207, 13%, 34%)",
        "very-dark-black-blue": "hsl(240, 10%, 16%)",
      },
      gradientColorStops: {
        redish: ["hsl(13, 100%, 72%)", "hsl(353, 100%, 62%)"],
      },
      backgroundImage: {
        "pattern-mobile-gradient":
          'url("../src/assets/images/bg-pattern-intro-mobile.svg"), linear-gradient(to bottom, hsl(13, 100%, 72%) , hsl(353, 100%, 62%))',
        "pattern-desktop-gradient":
          'url("../src/assets/images/bg-pattern-intro-desktop.svg"), linear-gradient(to right, hsl(13, 100%, 72%) , hsl(353, 100%, 62%))',
        "pattern-circles-gradient":
          'url("../src/assets/images/bg-pattern-circles.svg"), linear-gradient(to bottom, hsl(237, 17%, 21%) , hsl(237, 23%, 32%))',
      },
    },
  },
  plugins: [],
};
