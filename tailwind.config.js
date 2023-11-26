/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      colors: {
        background: '#100e0e',
        white: '#ffffff',
        gray: '#9A9BA2'
      },
      extend: {
        fontFamily: {
          'poppins': ['Poppins']
        },
      },
    },
    plugins: [
    ],
  }