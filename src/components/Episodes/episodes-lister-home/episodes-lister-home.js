import React, { useContext } from 'react';
import { Link } from 'gatsby';
import PlayerContext from "../../player/player.context";

import './episodes.scss';
// import MenuBarContext from '../menu-bar/menu-bar.context';
// import NavContext from "../nav/nav.context"

const HomeEpisodesLister = ({ episodes }) => {
  const player = useContext(PlayerContext);
  // const active = useContext(MenuBarContext);
  // const background = useContext(NavContext);

  const getEpisodeList = () => {
    const episodeList = [];
    episodes.forEach((episode) => {
      episodeList.push({
        path: episode.node.fields.slug,
        tags: episode.node.frontmatter.tags,
        cover: episode.node.frontmatter.cover,
        title: episode.node.frontmatter.title,
        audio: episode.node.frontmatter.audioPath,
        date: episode.node.fields.date,
        show: episode.node.frontmatter.show,
        exerpt: episode.node.frontmatter.shortDescription,
        showLength: episode.node.frontmatter.showLength,
        timeToRead: episode.node.timeToRead,
      });
    // console.log(episode.node.frontmatter)
    });
    return episodeList;
  };

  const setPlayer = (audio, title, image) => {
    player.setAudio(audio);
    player.setImage(image);
    player.setTitle(title);
  };

  const episodeList = getEpisodeList();
  const imgPath = 'https://s3.us-east-2.amazonaws.com/zachcasts/';

  return (
    <div className="episodes-wrapper home">
      {/* active.setActive('home') */}
      {/* background.setBackground("#fff") */}
      <div className="header">Recent Episodes</div>
      <div className="lister">
        {episodeList.map((episode) => (
          <div className="episode">
            <div className="cover"><img src={imgPath + episode.cover} alt="Podcast cover" /></div>
            <div className="episode-info">
              <div className="release-info">
                <div className="date">{episode.date}</div>
                <div className="time">{episode.showLength}</div>
              </div>
              <Link to={episode.path} className="title">{episode.title}</Link>
              <div className="description">{episode.exerpt}</div>
              <div className="show-name">{episode.show}</div>
            </div>
            <i onClick={() => setPlayer(episode.audio, episode.title, imgPath + episode.cover)} className="fa fa-play-circle-o" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeEpisodesLister;
