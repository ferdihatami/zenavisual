const { addDynamicIconSelectors } = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '1rem',
      '2xl': '6rem',
    },
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
      '2xl': '1496px',
    },
    fontFamily: {
      'adelia': ['ADELIA', 'cursive'],
      'hills' : ['HILLS', 'cursive'],
      'million': ['MILLION', 'cursive']
    }
  }, 
    extend: { 
      colors: {
      "dark-purple":"#081A51",
      "light-white": "rgba(255,255,255,0.17)",
      "green-cust": "#00833D",
      "merah-cerah": "#D90D1E",
      "merah-gelap": "#BF0426",
      "merah-maron": "#7F151D",
      "merah-bata" : "#400A0F"
     },
     zIndex: {
      '100' : '100'
     }
    },
     
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    addDynamicIconSelectors(),
  ],
  
}



