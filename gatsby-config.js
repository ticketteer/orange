require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'ticketteer',
        accessToken: 'MC5YVTNiWlJFQUFDQUFkWHRE.aHbvv73vv71R77-9ECzvv73vv73vv73vv70FeWfvv73vv73vv71WcQln77-977-9IEdT77-9Oe-_ve-_ve-_vQ',
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ticketteer - Verkauf doch einfach mehr Tickets',
        short_name: 'Ticketteer',
        start_url: '/',
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    },
    `gatsby-plugin-minify`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-159260397-1',
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NC4FRQ4",
        includeInDevelopment: false,
        defaultDataLayer: null,
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "GTM-NC4FRQ4",
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '410897386283952',
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg-inline/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-plugin-linkedin-insight',
      options: {
        partnerId: '1558148',
        includeInDevelopment: false,
      }
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: "./data/",
    //   },
    // },
    // "gatsby-transformer-json",
    // "gatsby-transformer-sharp",
    // "gatsby-plugin-sharp",
  ],
}
