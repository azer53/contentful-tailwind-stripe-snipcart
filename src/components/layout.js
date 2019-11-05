/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import Navigation from "./Navigation"
import "../css/style.css"

const Layout = ({ children }) => {
  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-gray-200" style={{ minHeight: `640px` }}>
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
