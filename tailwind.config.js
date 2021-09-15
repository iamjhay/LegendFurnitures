// added an extra-small scrrensize feature
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "540px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#1c1d22",
      },
      outline: {
        primary: ["10px solid #e8985c", "1px"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
