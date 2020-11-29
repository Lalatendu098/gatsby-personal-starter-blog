import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
    render() {
        const siteTitle = "The People's Blog"

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title="Home"
                    keywords={[`society`, `economy`, `democracy`, `humanity`]}
                />
                <img style={{ margin: 0 }} src="./home.jpg" alt="Gatsby Scene" />
                <h1>
                    Hey people{" "}
                    <span role="img" aria-label="wave emoji">
                        👋
          </span>
                </h1>
                <p>Introducing  <b>The people's blog. </b> Living a society with no barrier.</p>
                <Link to="/blog/">
                    <Button marginTop="35px">Start Reading</Button>
                </Link>
            </Layout>
        )
    }
}

export default IndexPage
