import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
// import Layout from "../../layout/layout.component"
import EpisodesList from "../../components/Episodes/episode-list/episodes-list.component";

import config from "../../../data/SiteConfig";

export default function Tag({ pageContext, data }) {
  const { tag } = pageContext;
  const episodes = data.allMarkdownRemark.edges;

  return (
    <div>
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag} | ${config.siteTitle}`} />
        <EpisodesList episodes={episodes} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
    query Tags($tag: String) {
        allMarkdownRemark(
            limit: 1000
            sort: {fields: [fields___date], order: DESC}
            filter: {frontmatter: {tags: {in: [$tag]}}}
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
`;
