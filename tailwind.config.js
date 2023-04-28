/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'bebas-neue': ['Bebas Neue'],
      staatliches: ['Staatliches'],
      'roboto-condensed': ['Roboto Condensed'],
    },
    extend: {},
    fontSize: {
      xs: '0.8rem',
      sm: '1rem',
      md: '1.1rem',
      base: '1.2rem',
      lg: '1.3rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2.1rem',
      '4xl': '2.5rem',
      '5xl': '3.5rem',
      '6xl': '4rem',
    },
  },
  plugins: [],
  darkMode: 'class',
};
