import React from "react"
import {Helmet} from "react-helmet"
import {graphql} from "gatsby"
import Layout from "../../layout/layout.component"
import HomeProfile from "../../components/profiles/home-profile/home-profile.component"
import EpisodesList from "../../components/episodes-list/episodes-list.component"

import Container from "react-bootstrap/Container"
import config from "../../../data/SiteConfig"
import "./main.scss"

function Home({data}) {
    const episodes = data.allMarkdownRemark.edges

    return (
        <Layout>
          <Helmet title={config.siteTitle} />
          <Container>
            <HomeProfile/>
            <EpisodesList episodes={episodes} />
          </Container>
        </Layout>
    )
}

export default Home

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;