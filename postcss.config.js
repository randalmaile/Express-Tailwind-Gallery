module.exports = {
  plugins: {
    "postcss-import": {}, // imports/merges css files
    tailwindcss: {
      config: "tailwind.config.js",
    },
    autoprefixer: {},
    "postcss-custom-properties": {
      importFrom: "src/stylesheets/tokens.css",
    }, // IE11 support for css variables
  },
};
