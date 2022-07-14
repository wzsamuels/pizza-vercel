/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      keyframes: {
        drop: {
          from: {top: "-500px", opacity: 0},
          to:   {top: 0, opacity: 1}
        },
      },
      animation: {
        'drop-down': 'drop .5s linear',
      },
    },
  },
  plugins: [],
};
