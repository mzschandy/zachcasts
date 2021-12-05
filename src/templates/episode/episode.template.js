import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Episode from "../../components/Episodes/episode/episode.component";

import config from "../../../data/SiteConfig";
import "./episode.scss";

export default function EpisodeTemplate({ data, pageContext }) {
  const { slug } = pageContext;
  const episodeNode = data.markdownRemark;
  const episode = episodeNode.frontmatter;
  // const player = useContext(PlayerContext);

  if (!episode.id) {
    episode.id = slug;
  }

  // const audio = episode.audioPath;

  return (
    <>
      <Helmet>
        <title>{`${episode.title} | ${config.siteTitle}`}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Helmet>
      <div className="contain">
        <Episode episodeNode={episodeNode} />
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query EpisodeBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        show
        showDescription
        tags
        audioPath
        episodeNumber
        audioPath
      }
      fields {
        slug
        date
      }
    }
  }
`;
