/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Navigation from "./Navigation"
import "../css/style.css"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-gray-200" style={{ minHeight: `640px` }}>
      <Helmet>
        <script src="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.js"></script>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.css"
        />
      </Helmet>
      <div
        hidden
        id="snipcart"
        data-api-key="ODg0NTFhZTEtZThkMy00OWJlLWIwZmEtOTVhZDk0MjYzMjljNjM3MDIwNTgxMjc3Njg5NjA0
"
      ></div>
      <Navigation open={open} setOpen={setOpen} />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
