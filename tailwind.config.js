/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg':"url('./assets/images/hero-bg.webp')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      screens: {
        lg: '1025px',
        md:'770px',
      }
      
    },
  },
  plugins: [],
}