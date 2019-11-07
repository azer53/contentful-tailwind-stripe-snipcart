import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HighlightedProducts from "../components/HighlightedProducts"
import Sample from "../images/work.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="container mx-auto py-8">
      <img class="rounded shadow-md" src={Sample} alt="" />
    </section>
    <div className="max-w-6xl mx-auto">
      <HighlightedProducts />
    </div>
  </Layout>
)

export default IndexPage
