const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Andy Wynyard', // Navigation and Site Title
  siteTitleAlt: 'Andy', // Alternative Site title for SEO
  siteTitleShort: 'Andy', // short_name for manifest
  siteHeadline: 'JAM stack for life', // Headline for schema.org JSONLD
  siteUrl: 'https://wynyard.ninja', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.JPG', // Used for SEO and manifest
  siteDescription: 'Profile site that takes advantage of Paralax',
  author: 'Andy Wynyard', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@andyWynyard', // Twitter Username
  ogSiteName: 'andy', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
