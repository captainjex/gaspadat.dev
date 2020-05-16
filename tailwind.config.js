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
      'gray-100': '#f0f0f0',
      'gray-200': '#b6bdc7',
      'gray-500': '#969a9f',
      'gray-700': '#5e5e5e',
      'gray-800': '#383d45',
      black: '#000000',
      white: '#ffffff',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
