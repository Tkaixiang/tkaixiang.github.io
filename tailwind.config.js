const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "19/20": "95%",
      },
      width: {
        "19/20": "95%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".glassy-bg": {
          backgroundColor: theme("bg.gray.700"),
          backgroundOpacity: theme("bg.opacity.20"),
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(76, 76, 76, 0.3)",
        },
      });
    }),
  ],
};
