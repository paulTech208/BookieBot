/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        pink_3: "#320B0B",
        pink_5: "#130610",
        pink_7: "#090307",
        blue_3: "#5B46F6",
        purple_3: "#5B46F6",
        purple_3_opacity: "#5b46f68c",
        yellow_3: "#FD8D1E",
        black_3: "#848484",
        white_3: "#7B838F",
        blue_4: "#0500FA",
        green: "rgb(117, 185, 125)",
        black_1: "#323232",
        black: "#000000",
        white: "#ffffff",
        black_2: "#1d1d1d",
        black_3: "#837e7ea1",
        black_4: "rgb(146, 146, 146)",
        green_1: "rgba(117, 185, 125, 0.5)"
      },
      fontFamily: {
        redhat: ["RedHatDisplay Regular", "sans-serif"],
        redhat_bold: ["RedHatDisplay Bold", "sans-serif"],
        inter: ["Inter Regular", "sans-serif"],
        inter_medium: ["Inter Medium", "sans-serif"],
        inter_bold: ["Inter Bold", "sans-serif"],
        inter_semibold: ["Inter SemiBold", "sans-serif"],
        open_san: ["OpenSans-VariableFont_wdth,wght", "open-sans" ],
        blinker_semibold: ["Blinker Semibold", "open-sans"],
        blinker: ["Blinker Regular", "open-sans"]
      },
      screens: {
        'ios' : '320px',
        'sm' : "360px",
        'xs': '390px',
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl":'1315px',
        "3xl": "1920px",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  darkMode: ["class"],
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    // ...
  ],
}
