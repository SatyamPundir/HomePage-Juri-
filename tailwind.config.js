/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-loc_sec': '#17A1FA',
        'blue-dark': '#2A4ECA'
        // 'ribbon-pattern':"url('src/assests/bg-ribbion.png')"
      },
    },
  },
  plugins: [],
}

