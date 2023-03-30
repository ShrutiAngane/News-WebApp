/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{jsx,js}"],
  mode:"jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#8F9098",
        grayishBlue: "#c5c6ce",
        offWhite: "#fffdfa",
        softOrange: "#e9ab53",
        softRed: "#f15e50",
        darkRed:'#CC3D34',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        errorfont:["Alkatra", "cursive"]
      },
    },
    screens: {
      xxs:"320px",
      xs: "400px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1400px",
      '2xl':"1700px"
    },
  },
  plugins: [],
}
