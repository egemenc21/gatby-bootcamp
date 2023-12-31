require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Full-Stack Bootcamp",
    author: "Egemen Celik",
  },
  plugins: [
      {
      resolve:"gatsby-source-contentful",
      options:{
        spaceId:process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          { resolve: "gatsby-remark-images" , options:{
            maxWidth:750,
            linkImagesToOriginal:false
          }},
        ],
      },
    },
  ],
};
