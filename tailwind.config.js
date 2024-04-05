const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        "4xl": [
          "1px 1px 1px #0000FF",
          "1px 1px 1px #0000FF",
          "1px 1px 1px  #0000FF",
          "1px 1px 1px #0000FF",
        ],
      },
      inset: {
        0: 0,
        "1/2": "50%",
      },
      colors: {
        cream: "#FFFDD0",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "988px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        sr: { min: "640px", max: "767px" },
      },
    },
  },
  plugins: [],
};
