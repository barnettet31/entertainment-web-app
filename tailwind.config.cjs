/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#10141E",
        "semi-dark-blue": "#161D2F",
        "grayish-blue": "#5A698F",
        red: "#FC4747",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
