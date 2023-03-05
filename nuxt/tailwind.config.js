/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'invisibleGrey': 'rgba(255, 255, 255, 0.1)',
      'gold': '#ffc562'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#1e1e1f',
      'primary-light': '#292929',
      'primary-dark': '#111111',
      'primary-lighter': '#383838',
      'gold': '#ffc562'
    }),
    textColor: {
      DEFAULT: '#fff',
      'primary-grey': 'rgba(255, 255, 255, 0.50)',
      'gold': '#ffc562'
    },
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif']
    },
  },
  plugins: [],
}
