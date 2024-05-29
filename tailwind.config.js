/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/*.{html,js}",
  "./src/Components/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins]', 'sans-serif'], // Replace 'Roboto' with your desired font family
      },
    },
  },
  plugins: [],
}

