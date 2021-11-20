import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
// import Layout from "../../layout/layout.component"
import EpisodesList from "../../components/episodes-list/episodes-list.component";
import config from "../../../data/SiteConfig";

export default function Category({ pageContext, data }) {
  const { category } = pageContext;
  const episodes = data.allMarkdownRemark.edges;

  return (
    <div>
      <div className="category-container">
        <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
        />
        <EpisodesList episodes={episodes} />
      </div>
    </div>
  );
}
/*
export const pageQuery = graphql`
  query Category($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
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
            shortDescription
            episodeNumber
          }
        }
      }
    }
  }
`; */
