/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d' },
        ai: { 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce' }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      transitionTimingFunction: {
        'bounce-sm': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    }
  },
  plugins: [],
}
