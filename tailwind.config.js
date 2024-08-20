/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#0B0B0C',
        customBlack2: '#121212',
        customBlack3: '#0E0E10',
      },
    },
  },
  plugins: [],
}