const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Andy Wynyard', // Navigation and Site Title
  siteTitleAlt: 'Andy', // Alternative Site title for SEO
  siteTitleShort: 'Andy', // short_name for manifest
  siteHeadline:
    'JS/JAM stack developer living in Stockholm SE currently, but lived in Denver CO, London UK, Australia, and originally from New Zealand.', // Headline for schema.org JSONLD
  siteUrl: 'https://wynyard.ninja', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.JPG', // Used for SEO and manifest
  siteDescription:
    'I use VS-code to develop, and for the FE I focus on GatsbyJS and NextJS, for the BE I prefer Node APIs with GraphQL. I have been looking into abstractions on the backend currently, and Prisma seems to be my favorite so far. I deploy through Netlify for Gatsby Websites and now for NextJS web apps.',
  author: 'Andy Wynyard', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@andyWynyard', // Twitter Username
  ogSiteName: 'andy', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-138756796-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
