module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1a1d24",
        inndigo: "#1e6feb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
