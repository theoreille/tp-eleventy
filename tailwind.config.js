// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{njk,md,js}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
          },
        },
      }),
      colors: {
        'ma-color': '#D946EF',
        'ma-big-color': '#D4234F',
      },
    },
    fontFamily: {
      'ma-popo': ['Helvetica', 'Arial', 'sans-serif'],
    },
    screens: {
      'phone': '640px',
      // => @media (min-width: 640px) { ... }
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
