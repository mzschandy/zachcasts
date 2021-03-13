import React, {useContext} from "react"
import {Helmet} from "react-helmet"
import {graphql} from "gatsby"
//import Layout from "../../layout/layout.component"
import PlayerContext from "../../components/player/player.context"
import EpisodeProfile from "../../components/profiles/episode-profile/episode-profile.component"

import Container from "react-bootstrap/Container"

import config from "../../../data/SiteConfig"
import "./episode.scss"


export default function Episode({data, pageContext}) {
    const {slug} = pageContext
    const episodeNode = data.markdownRemark
    const episode = episodeNode.frontmatter
    const player = useContext(PlayerContext)

    if(!episode.id) {
        episode.id = slug
    }

    const audio = episode.audioPath;

    return (
        <div>
            <Helmet>
              <title>{`${episode.title} | ${config.siteTitle}`}</title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>
            <Container id="podcast-episode">
                <EpisodeProfile episodeDate={episode.date} episodeLength={episode.showLength} />
                <div className="episode-meta">
                    <div className="episode-header">
                        <h1 className="episode-title">{episode.title}</h1>
                        <div className="btn play-button" onClick={() => player.setAudio(audio)}>
                            <span className="fa fa-play-circle"></span>
                            Play Episode
                        </div>
                    </div>
                    <div className="episode-notes">
                        <div class="notes-inner">
                            <div dangerouslySetInnerHTML={{ __html: episodeNode.html }} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
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
        audioPath
        episodeNumber
        audioPath
        showLength
      }
      fields {
        slug
        date
      }
    }
  }
`;