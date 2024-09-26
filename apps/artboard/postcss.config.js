const path = require("node:path");

module.exports = {//exporting
  plugins: {
    tailwindcss: {
      config: path.join(__dirname, "tailwind.config.js"),
    },
    autoprefixer: {},
  },
};
