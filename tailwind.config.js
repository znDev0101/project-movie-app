/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      endcode: ['Encode Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        background: 'url(../src/Assets/img/background.jpg)',
      },
    },
  },
  plugins: [],
};
