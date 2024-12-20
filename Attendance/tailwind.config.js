/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#F4BC01",
        secondary:"#FFFFFF",
        btnColor:"F4BC01",
        tableHeader:"F4BC01",
        tableBorder:"#D9D9D9",
        // accentColor:"#E3CE27",
        // textPrimary:"#308FE8"
      },
    },
  },
  plugins: [],
}

