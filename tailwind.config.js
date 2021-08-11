module.exports = {
  mode: "jit",
  purge: [
    './src/*.html',
    './src/css/*.css'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        volkhov: ['Volkhov', 'serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        dark: '#212832',
        orange: '#DF6951'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
