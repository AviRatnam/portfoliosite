module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          charcoalblue: "#2f4858",
          queenblue: "#33658A",
          darkskyblue: "#86bbd8",
        },
        yellow: {
          brightyellowcrayola: "#F6AA1C",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
