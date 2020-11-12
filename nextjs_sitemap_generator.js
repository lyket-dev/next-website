import sitemap from "nextjs-sitemap-generator";

sitemap({
  alternateUrls: {
    en: "https://www.lyket.dev"
  },
  baseUrl: "https://lyket.dev",
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "out/",
  nextConfigPath: __dirname + "/next.config.js",
  sitemapStylesheet: [
    {
      type: "text/sass",
      styleFile: "/styles/main.sass"
    }
  ]
});

console.log(`✅ sitemap.xml generated!`);