module.exports = {
  plugins: {
    tailwindcss: {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {},
    "postcss-normalize": {
      allowDuplicates: false,
    },
    "@fullhuman/postcss-purgecss": {
      content: ["./src/**/*.{ts,tsx}"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
    autoprefixer: {},
  },
};
