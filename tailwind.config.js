module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#19BFAB',
      'secondary': '#0E2137',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#19BFAB',
      'secondary': '#0E2137',
    }),
    extend: {
      backgroundImage: theme => ({
        'hero-figure': "url('/img/Figura.svg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
