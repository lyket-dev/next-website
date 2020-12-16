const sitemap = require("nextjs-sitemap-generator");

sitemap({
  alternateUrls: {
    en: "https://www.lyket.dev"
  },
  baseUrl: "https://lyket.dev",
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "out/",
  nextConfigPath: __dirname + "/next.config.js",
  ignoreIndexFiles: true,
  sitemapStylesheet: [
    {
      type: "text/sass",
      styleFile: "/styles/main.sass"
    }
  ]
});

console.log(`✅ sitemap.xml generated!`);
