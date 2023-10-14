/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chakra-petch': ['Chakra Petch', 'sans'],
      },
    },
  },
  plugins: [],
}
