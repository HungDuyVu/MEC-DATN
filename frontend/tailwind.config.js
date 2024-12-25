/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#FE5454",
        blue: "#60B3F5",
        gray: '#E5E7EB',
        white: '#FFFFFF',
        pink: '#FCDBC9',
        gray: '#F2F2F2',
        main: "#FDACA0",

        darkPurple: "#1B1931",
        deepBlue: "#44174E",
        royalPurple: "#682149",
        roseRed: "#9D3E50",
        sunsetOrange: "#ED9E59",
        pastelPink: "#E9BCB9",
      }
    },
  },
  plugins: [],
}