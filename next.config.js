// const withImages = require("next-images");
const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  include: path.resolve(__dirname, "public/svg"),
  env: {
    appBaseUrl: process.env.APP_BASE_URL,
    apiBaseUrl: process.env.API_BASE_URL
  },
  webpack(config, _options) {
    return config;
  }
});
