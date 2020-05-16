module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    fontFamily: {
      serif: ['"Playfair Display"', 'serif'],
      sans: ['"Nunito Sans"', 'sans-serif']
    },
    colors: {
      primary: '#090909',
      'grey-lightest': '#f0f0f0',
      'grey-lighter': '#b6bdc7',
      'grey': '#969a9f',
      'grey-darker': '#5e5e5e',
      'grey-darkest': '#383d45',
      black: '#000000',
      white: '#ffffff',
    },
    extend: {
    },
  },
  variants: {},
  plugins: [],
}
