/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        pink: {
          400: '#f9a8d4', 
          500: '#f472b6', 
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d', 
          900: '#500724', 
        },
       
        primary: {
          400: '#f9a8d4',
          500: '#f472b6',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#500724',
        }
      },
    },
  },
  plugins: [],
}
