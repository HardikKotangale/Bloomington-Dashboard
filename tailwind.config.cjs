/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ferrari: {
          red: "#E02424",
          redDark: "#9b0000",
        },
      },
      boxShadow: {
        "ferrari-card": "0 24px 55px rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};

