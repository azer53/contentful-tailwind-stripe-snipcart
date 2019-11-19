import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Paper from "../images/paper.jpg"
import { graphql } from "gatsby"

//import SEO from "../components/seo"

const ProductPageTemplate = ({ data }) => {
  const product = data.contentfulProduct
  return (
    <Layout>
      <div className="container mx-auto max-w-6xl">
        <section className="py-12 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="lg:w-1/2 px-4 mb-4 lg:mb-0">
              <img className="rounded shadow-md" src={Paper} alt="" />
            </div>
            <div className="lg:w-1/2 px-4">
              <h2 className="text-4xl mb-4 font-heading">{product.title} </h2>
              <div
                className="mb-6 text-gray-700 leading-relaxed"
                /*                 dangerouslySetInnerHTML={{
                  __html: product.description.description,
                }} */
              >
                {product.description.description}
              </div>
              <div className="mb-6">
                <button className="inline-flex items-center justify-center h-8 w-8 mr-2 bg-gray-400 rounded-full"></button>
                <button className="inline-flex items-center justify-center h-8 w-8 mr-2 bg-gray-300 rounded-full"></button>
                <button className="inline-flex items-center justify-center h-8 w-8 mr-2 bg-gray-200 rounded-full"></button>
              </div>
              <div className="flex mb-6">
                <span className="text-2xl">{product.price}</span>
                <div className="flex flex-wrap ml-4">
                  <div className="w-1/2">
                    <input
                      className="appearance-none block w-full py-2 px-4 leading-snug text-gray-700 bg-gray-100 focus:bg-white border border-gray-100 focus:border-gray-500 rounded md:rounded-r-none focus:outline-none"
                      type="number"
                      value="1"
                    />
                  </div>
                  <div className="w-1/2">
                    <button className="inline-block w-full py-3 px-4 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded md:rounded-l-none">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <button className="text-blue-700 hover:underline">
                  Add to favorites
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      slug
      description {
        description
      }
      price
    }
  }
`

export default ProductPageTemplate
