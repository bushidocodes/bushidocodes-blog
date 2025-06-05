module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  author: 'Sean McBride', // Author for schemaORGJSONLD
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteBanner: '/social/banner.jpg?1', // Your image for og:image tag. You can find it in the /static folder
  siteDescription: 'Codes with Honor, Defends the Just, Pursues Lofty Undertakings on the Cutting Edge', // Your site description
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD
  siteTitle: 'Bushido Codes', // Navigation and Site Title
  siteTitleAlt: 'Bushido Codes - Sean McBride', // Alternative Site title for SEO
  siteUrl: 'https://www.bushido.codes', // Domain of your site. No trailing slash!

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@bushidocodes', // Twitter Username - Optional
  ogSiteName: 'Bushido Codes', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Settings for typography.js
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',
};
