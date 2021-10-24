module.exports = {
  siteMetadata: {
    title: `Chris Erxleben`,
    description: `A passionate full-stack software engineer located in the Denver area.`,
    siteUrl: `https://www.chriserxleben.com`,
    image: `/images/headshot.png`,
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-disable-404`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/files/`,
        ignore: [`**/\.*`],
      },
    },
  ],
}
