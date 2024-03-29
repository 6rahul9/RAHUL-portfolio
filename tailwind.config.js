/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        blue: '#2cbce9',
        red: '#ed1c4d',
        yellow: '#fdcc49',
        grey:'#ededed',
        'deep-blue': '#010026',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0, 0, 0 , 0.35)'
      },
      backgroundImage:(theme)=> ({
        'gradient-rainbow': 'linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba04 78.07%)',
        'gradient-rainblue': 'linear-gradient(90deg, #24cbff 14.53%, #fc59cc 69.36%, #ffbd0c 117.73%)',
      }),

      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans:['Open Sans', 'sans-serif']
      } ,

      content:{
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      }
    },
    screens:{
      xs: '480px',
      ss:"620px",
      sm: "768px",
      md:'1060px',
      lg:"1200px",
      xl:"1700px",
    },
  },
  plugins: [],
}
