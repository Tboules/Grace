const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const theLatestTemplate = path.resolve("./src/templates/TheLatest.jsx")

  const res = await graphql(`
    {
      allContentfulTheLatestPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulTheLatestPost.edges.forEach(edge => {
    createPage({
      path: `/the-latest/${edge.node.slug}`,
      component: theLatestTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
