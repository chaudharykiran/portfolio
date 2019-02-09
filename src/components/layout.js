import React from "react"
import PropTypes from "prop-types"

import Navigation from './Navigation';
import "./layout.css"

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
