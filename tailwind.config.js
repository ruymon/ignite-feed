const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#00875F',
        'brand-green-light': '#00B37E',
        
        'brand-gray-900': '#121214', // background
        'brand-gray-800': '#202024', // cards
        'brand-gray-700': '#323238', // divider
        'brand-gray-400': '#7C7C8A', // placeholder
        'brand-gray-300': '#8D8D99', // secondary text
        'brand-gray-200': '#C4C4CC', // text
        'brand-gray-100': '#E1E1E6',

        'brand-red-danger': '#F75A68',
      },
      fontFamily: {
        'sans': ['Roboto'],
      },
    },
  },
  plugins: [],
}