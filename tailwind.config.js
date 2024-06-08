/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// Just tailwind 

// module.exports = {
//   content: [
//     './components/**/*.{vue,js}',
//     './layouts/**/*.vue',
//     './pages/**/*.vue',
//     './plugins/**/*.{js,ts}',
//     './nuxt.config.{js,ts}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind with custom theme

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'primary': '#08415c',
      'secondary': '#cc2936',
      'purple': '#791e94',
      'red': '#ad343e',
      'white': '#eee5e9',
      'green': '#183a37',
      'yellow': '#f2af29',
      'gray-dark': '#273444',
      'gray': '#474747',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Encode', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
