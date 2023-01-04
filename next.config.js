// const withImages = require("next-images");
const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
	include: path.resolve(__dirname, "public/icons"),
	transpilePackages: [
		"react-syntax-highlighter",
		"swagger-client",
		"swagger-ui-react",
	],
	env: {
		appBaseUrl: process.env.APP_BASE_URL,
		apiBaseUrl: process.env.API_BASE_URL,
		lyketPublicApiKey: process.env.LYKET_PUBLIC_API_KEY,
		lyketResetApiKey: process.env.LYKET_RESET_API_KEY,
	},
	async redirects() {
		return [
			{
				source: "/blog/posts/react-clap-button",
				destination: "/blog/posts/clap-button",
				permanent: true,
			},
			{
				source: "/blog/posts/like-clap-button-on-worpress",
				destination: "/blog/posts/wordpress-like-button",
				permanent: true,
			},
			{
				source: "/docs/widget",
				destination: "/docs/html",
				permanent: true,
			},
		];
	},
	webpack(config, _options) {
		config.resolve.alias = {
			...config.resolve.alias,
			// your aliases
			react: path.resolve("./node_modules/react"),
		};

		return config;
	},
});
