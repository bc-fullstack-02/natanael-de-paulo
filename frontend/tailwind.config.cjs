/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      sky: colors.sky,
      AzureRadiant: {
        100: '#00aeff'
      },
      CuriousBlue: {
        100: '#3ea1db'
      }
    },
    extend: {}
  },
  plugins: []
}
