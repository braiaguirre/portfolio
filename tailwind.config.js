/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        background: '#020617',
        project: '#0F172A',
        projectHover: '#151f38',
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