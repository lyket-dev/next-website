// const withImages = require("next-images");
const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  include: path.resolve(__dirname, "public/icons"),
  env: {
    appBaseUrl: process.env.APP_BASE_URL,
    apiBaseUrl: process.env.API_BASE_URL
  },
  async redirects() {
    return [
      {
        source: "/blog/posts/react-clap-button",
        destination: "/blog/posts/clap-button",
        permanent: true
      },
      {
        source: "/docs/widget",
        destination: "/docs/html",
        permanent: true
      },
      {
        source: "/blog/posts/like-clap-button-on-worpress",
        destination: "/blog/posts/wordpress-like-button",
        permanent: true
      }
    ];
  },
  webpack(config, _options) {
    return config;
  }
});
