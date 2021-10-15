module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1a1d24",
        secondary: "#0F1119",
        inndigo: "#1e6feb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
