/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/index.html',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "color-black": "#1A1A1A",
        "color-blue": "#5267DF",
        "color-purple": "#8A2BE2",
        "color-grey": "#E5E5E5",
        "color-white": "#FFFFFF",

        "dark-purple": "#352F44"
      },
    },
    fontFamily: {
      DMSans: ["DM Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
};
