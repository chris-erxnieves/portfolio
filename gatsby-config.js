module.exports = {
  siteMetadata: {
    title: `Chris Erxnieves`,
    description: `A passionate full-stack software engineer located in Colorado Springs.`,
    siteUrl: `https://www.chriserxnieves.com`,
    image: `/images/headshot.png`,
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
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
