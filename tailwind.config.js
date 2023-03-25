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
        "main-green":"#00735C",
        'light-white': 'rgba(255,255,255,0.18)',
        "secondary-green":"#C1D9B7",
        "tetriary-pink": "#E5A298"
      }
    },
  },
  plugins: [],
}