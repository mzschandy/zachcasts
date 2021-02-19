import React from "react"
import {Helmet} from "react-helmet"
import {graphql} from "gatsby"
import Layout from "../../layout/layout.component"
import EpisodeProfile from "../../components/profiles/episode-profile/episode-profile.component"

import Container from "react-bootstrap/Container"

import config from "../../../data/SiteConfig"
import "./episode.scss"


export default function Episode({data, pageContext}) {
    const {slug} = pageContext
    const episodeNode = data.markdownRemark
    const episode = episodeNode.frontmatter

    if(!episode.id) {
        episode.id = slug
    }

    return (
        <Layout>
            <Helmet><title>{`${episode.title} | ${config.siteTitle}`}</title></Helmet>
            <Container id="podcast-episode">
                <EpisodeProfile episodeDate={episode.date} />
                <div className="episode-meta">
                    <div className="episode-header">
                        <h1 className="episode-title">{episode.title}</h1>
                        <div className="btn play-button">
                            <span className="fa fa-play-circle"></span>
                            Play Episode
                        </div>
                    </div>
                    <div className="episode-notes">
                        <div class="notes-inner">
                            {episode.html}
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
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
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;