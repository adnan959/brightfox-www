/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://brightfoxdayhome.ca",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
};
