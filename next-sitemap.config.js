/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://xraww.fr",
    generateRobotsTxt: true, // génère aussi un robots.txt
    sitemapSize: 7000, // découpage si beaucoup d’URLs (ici inutile mais clean)
    changefreq: "weekly",
    priority: 0.7,
}  