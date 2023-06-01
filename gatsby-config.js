module.exports = {
  siteMetadata: {
    title: `gifuzzz`,
    siteUrl: `https://gifuzzz.eu`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-react-svg",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.svg',
      },
    },
  ],
}
