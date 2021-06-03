const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./**/*.html", "./src/**/*.vue"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      "blue-gray": colors.blueGray,
      "cool-gray": colors.coolGray,
      gray: colors.trueGray,
      "true-gray": colors.trueGray,
      "warm-gray": colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      abmer: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      "light-blue": colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
