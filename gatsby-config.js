module.exports = {
  siteMetadata: {
    title: `gifuzzz`,
    siteUrl: `https://gifuzzz.me`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-react-svg",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.svg',
      },
    },
  ],
}
