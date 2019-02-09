import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import withRoot from '../withRoot'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello World</h1>
    <h2>Kiran here :)</h2>
  </Layout>
)

export default withRoot(IndexPage)
