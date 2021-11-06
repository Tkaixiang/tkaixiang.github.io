module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "19/20": "95%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
