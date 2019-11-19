import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProductCard from "./ProductCard"

const HighlightedProducts = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProduct {
        edges {
          node {
            description {
              description
            }
            price
            title
            slug
          }
        }
      }
    }
  `)
  const products = data.allContentfulProduct.edges
  return (
    <div>
      <section className="py-12 px-4">
        <h2
          className="text-3xl text-center mb-8 font-heading"
          data-config-id="header"
        >
          Just in
        </h2>
        <div className="flex flex-wrap -mx-4">
          {products.map(product => (
            <ProductCard
              key={product.node.slug}
              slug={product.node.slug}
              name={product.node.title}
              description={product.node.description.description}
              price={product.node.price}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HighlightedProducts
