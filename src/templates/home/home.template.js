/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
// import Layout from "../../layout/layout.component"
// import HomeProfile from "../../components/profiles/home-profile/home-profile.component"
// import EpisodesList from "../../components/episodes-list/episodes-list.component"

// import Container from "react-bootstrap/Container"
import config from "../../../data/SiteConfig";
import "./main.scss";
// import Player from "../../components/player/player.component"
// import PlayerContext from "../../components/player/player.context"
import ShowsLister from "../../components/Shows/shows-lister/shows-lister.component";
import HomeEpisodesLister from "../../components/Episodes/episodes-lister-home/episodes-lister-home";

const Home = ({ data }) => {
  const episodes = data.allMarkdownRemark.edges;
  /*
    const [audio, setAudio] = useState()
    const playAudio = (event, data) => {
      event.preventDefault()
      console.log("audio data" , data)
      setAudio(data);
    }
    const audioFolderPath = "/audio/"
    console.log("audio path", audioFolderPath + audio)
    */

  const shows = [];
  // const shows = data.allMarkdownRemark.edges.node.frontmatter.shows

  episodes.forEach((episode) => {
    if (shows.length === 0) {
      console.log("New show!");
      shows.push({
        show: episode.node.frontmatter.show,
        cover: episode.node.frontmatter.cover,
      });
      // episode.node.frontmattter.sho
      console.log("shows", shows);
    }

    shows.forEach((existingShow) => {
      const existingShowTitle = existingShow.show;
      const newShowTitle = episode.node.frontmatter.show;
      // console.log("comparing ", existingShow, " to", newShowTitle);

      if (existingShowTitle !== newShowTitle) {
        console.log("added a new show", newShowTitle);
        shows.push({
          show: episode.node.frontmatter.show,
          cover: episode.node.frontmatter.cover,
        });
      }
    });
  });
  return (
    <>
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Helmet>
      <div className="wrapper">
        <ShowsLister shows={shows} />
        <HomeEpisodesLister episodes={episodes} />
      </div>
      {/* <Player mp3={audioFolderPath + audio} /> */}
    </>
  );
};

export default Home;

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
            show
            audioPath
            shortDescription
            episodeNumber
            audioPath
            showLength
          }
        }
      }
    }
  }
`;
