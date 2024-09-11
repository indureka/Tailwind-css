/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary : "#198754"
    },
    screens: {
        xs: "340px",
    },
    },
  },
  plugins: [],
}

