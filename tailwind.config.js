/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors:{
        'oranye':"#ffa31a",
        'hover-oranye':"#d17e00",
        "abu-abu":"#808080",
        "abu-gelap":"#292929",
        "abu-super-gelap":"#1b1b1b",
        "putih":"#ffffff"
      },
      fontFamily:{
        'sans':['Calibri','sans']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

