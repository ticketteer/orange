require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'ticketteer',
        accessToken: `${process.env.PRISMIC_API_KEY}`,
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
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
