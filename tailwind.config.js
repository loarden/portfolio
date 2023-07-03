/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    colors: {
      background: "#051b1f",
      text: "#ffffff",
      primary: "#111111",
      secondary: "#616366",
      accent: "#188ba0",
      black: "#1b1b1b",
      white: "#ffffff",
      blue: "#0e76a8",
    },
  },
  plugins: [],
});
