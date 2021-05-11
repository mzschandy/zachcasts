import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import config from "../../../data/SiteConfig"
import Show from "../../components/show/show.component";

const ShowTemplate = ({pageContext, data}) => {
  const {show} = pageContext
  const showEdges = data.allMarkdownRemark.edges
  return(
    <>
      <Show showEdges={showEdges} showName={show} />
    </>
  )
}

export default ShowTemplate

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
            audioPath
            showLength
          }
        }
      }
    }
  }
`;