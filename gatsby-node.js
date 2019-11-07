const path = require(`path`)

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/product.js`)
  const result = await graphql(`
    {
      allContentfulProduct {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)
  result.data.allContentfulProduct.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: productTemplate,
      context: {
        title: edge.node.title,
        slug: edge.node.slug,
      },
    })
  })
}
