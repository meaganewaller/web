/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{ts,tsx}", "./next.config.js"],
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      containers: {
        2xs: '16rem',
      }
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
