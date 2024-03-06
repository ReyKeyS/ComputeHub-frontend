/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors:{
        'oranye':"#1a90ff",
        'hover-oranye':"#0065d1",
        "abu-abu":"#808080",
        "abu-gelap":"#292929",
        "abu-super-gelap":"#1b1b1b",
        "putih":"#ffffff"
      },
      fontFamily:{
        'sans':['Calibri','sans']
      },
      animation:{
        'geserBg':'bgGerak 3s ease infinite'
      },
      keyframes:{
        bgGerak:{
          '0%,100%':{
              'background-size':'200% 200%',
              'background-position':'left center'
          },
          '50%':{
              'background-size':'200% 200%',
              'background-position':'right center'
          }
      }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

