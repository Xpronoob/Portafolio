/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#000000'
      },
      screens: {
        xs: '350px'
      },
      maxWidth: {}
    }
  },
  plugins: [],
  darkMode: 'class'
}
