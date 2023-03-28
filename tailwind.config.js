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
    extend: {},
    fontFamily: {
      'font1': ['Bebas Neue', 'cursive'],
      'font2': ['Dela Gothic One', 'cursive'],
      'font3': ['Arima', 'cursive']
    }
  },
  plugins: [],
}
