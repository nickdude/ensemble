/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      avenir: ["Avenir", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      bricolage: ["Bricolage Grotesque", "sans-serif"],
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        100: "#D3D3D3",
        200: "#C7C7C7",
        250: "#CDCDCD",
        300: "#C2C2C2",
        400: "#9E9E9E",
        500: "#8A8A8A",
        600: "#6C6C6C",
        700: "#5A5A5A",
        800: "#7B7B7B",
        900: "#121212"
      },
      brand: {
        white: "#FFFFFF",
        black: "#000000",
        blue: "#019EC7",
        red: "#F54029",
        gray: "#F6F6F6"
      },
    },
  },
  plugins: [],
};
