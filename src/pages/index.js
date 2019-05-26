import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello,</h1>
            <h2>I'm Lee, a full-stack developer from sunny San Diego</h2>
            <p>Need a developer? <a href="/contact">contact me</a></p>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default IndexPage
