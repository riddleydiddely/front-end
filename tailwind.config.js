/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",


    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        "riddle-primary-dark-purple":"#A69AE3",
        "riddle-primary-purple":"#CFC6FF",
        "riddle-primary-green":"#ACE3BD",

        // UI Palette
        "riddle-palette-red":"#EA7D7C",
        "riddle-palette-yellow":"#FFDA58",
        "riddle-palette-dark-yellow":"#FBB751",
        "riddle-palette-dark-purple":"#6A5AD4",
      }
    },
  },
  plugins: [require("daisyui")],
}

