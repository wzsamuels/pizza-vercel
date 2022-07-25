/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      keyframes: {
        drop: {
          from: {top: "0px"},
          to:   {top: "80px"}
        },
        raise: {
          from : {top: "80px"},
          to: {top: "0px"}
        }
      },
      animation: {
        'drop-down': 'drop .5s ease-in',
        'raise-up' : 'raise .5s ease-out',
      },
    },
  },
  plugins: [],
};
