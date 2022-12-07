/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      animation: {
        rotate: 'rotate 3s ease-in-out 1'
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(360deg)' }
        }
      }
    }
  },
  plugins: []
}
