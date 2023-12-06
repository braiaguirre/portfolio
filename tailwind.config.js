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
        background: '#1b1c30',
        project: '#2b2d47',
        projectHover: '#343657',
        title: '#f46c95',
        subtitle: '#f5f4f5',
        gray: '#e6e3e6',
        lightgray: '#c4c4c4',
        white: '#ffffff'
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