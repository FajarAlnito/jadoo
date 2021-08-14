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
        'dark-gray': '#5E6282',
        'dark-blue': '#14183E',
        'dark-purple': '#1E1D4C',
        'darker-purple': '#181E4B',
        orange: '#DF6951'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
