module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        15: "60px",
        header: "90px",
      },
      maxWidth: {
        "content-desktop": "1110px",
      },
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
