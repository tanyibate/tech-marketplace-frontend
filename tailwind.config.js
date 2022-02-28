module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      orange: "#d87d4a",
      "light-gray": "#979797",
      "apricot-wash": "#fbaf85",
      "light-black": "#101010",
      "white-smoke": "#f1f1f1",
      doctor: "#fafafa",
      silver: "#cfcfcf",
    },
    gridAutoColumns: {
      fr: "1fr",
    },
    gridAutoRows: {
      fr: "1fr",
      auto: "auto",
    },
    extend: {
      height: {
        15: "60px",
        header: "90px",
      },
      spacing: {
        15: "60px",
        header: "90px",
      },
      maxWidth: {
        "content-desktop": "1110px",
      },
      screens: {
        xs: "400px",
      },
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
