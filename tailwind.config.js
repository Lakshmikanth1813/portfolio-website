/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          DEFAULT: '#d2f15d', // Lime green accent
          light: '#e8fa8a',
          dark: '#b9d945',
        },
        'dark': {
          DEFAULT: '#1c1c1e', // Very dark background
          lighter: '#2c2c2e', // Card background
        }
      },
      fontFamily: {
        'heading': ['Oswald', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
