/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: { 
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        'brightRed': 'hsl(12, 88%, 59%)',
      },
      fontFamily:{
        'allura': ["Allura", 'sans-serif'],
        'poppins': ["Poppins", 'sans-serif']
      }
    },
  },
  plugins: [],
}