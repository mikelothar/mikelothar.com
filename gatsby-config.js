module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/pages/posts`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
