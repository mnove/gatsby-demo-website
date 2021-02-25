/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "A Gatsby website",
    author: "Marcello Novelli"
  },
  plugins: [
    'gatsby-plugin-sass',
    { 
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },

    'gatsby-transformer-remark',
  ],
}


