/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'rgba(2, 85, 149, 1)',
        secondary : 'rgba(239, 248, 255, 1)',
        header : 'rgba(34, 34, 34, 1)',
        desc : 'rgba(34, 34, 34, 0.5)',
        cards : 'rgba(255, 255, 255, 0.8)',
        bgOpacity : 'rgba(0, 0, 0, 0.5)',
        navActive : 'rgba(215, 230, 234, 1)'
      }
    },
  },
  plugins: [],
}