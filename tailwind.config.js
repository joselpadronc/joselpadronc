module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#19BFAB',
      'secondary': '#0E2137',
      'primary-blue': '#0490AE',
      'light-white': '#FAFCFD',
      'light-gray': '#EFF3F8',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#19BFAB',
      'secondary': '#0E2137',
      'primary-blue': '#0490AE',
    }),
    gradientColorStops: theme => ({
      ...theme('colors'),
      'light-white': '#FAFCFD',
      'light-gray': '#EFF3F8',
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
