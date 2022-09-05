/* eslint-disable react/jsx-filename-extension */
import React from "react";
// import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
// import config from "../../../data/SiteConfig";
import Feed from "../../components/Shows/feed/feed.component";
import Lister from "../../components/listers/lister/lister.component";

const FeedTemplate = ({ pageContext, data }) => {
  const { feed } = pageContext;
  const showEdges = data.allMarkdownRemark.edges;
  return (
    <>
      <div className="">
        <Feed />
        <Lister episodes={showEdges} />
      </div>
    </>
  );
};

export default FeedTemplate;

export const pageQuery = graphql`
  query ShowPage($show: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { show: { eq: $show } } }
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
            show
            cover
            date
            shortDescription
            showDescription
            audioPath
            showLength
          }
        }
      }
    }
  }
`;
