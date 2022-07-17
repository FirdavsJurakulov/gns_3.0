module.exports = {
  content: [
    "./src/**/*.{html,css,js}",
    "./dist/**/*.{html,css.js}",
    "./index.html"
  ],
  theme: {
    fontFamily: {
      'manrope': ['"Manrope"']
    },
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
      '3xl':'1800px',
      '4xl':'2560px'
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
