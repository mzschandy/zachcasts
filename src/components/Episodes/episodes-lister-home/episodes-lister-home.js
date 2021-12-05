import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import { Link } from 'gatsby';
import PlayerContext from "../../player/player.context";

import './episodes.scss';
// import MenuBarContext from '../menu-bar/menu-bar.context';
// import NavContext from "../nav/nav.context"

const HomeEpisodesLister = ({ episodes }) => {
  const player = useContext(PlayerContext);
  const [icon, setIcon] = useState("play");
  const iconRef = useRef(null);
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

  const setPlayer = (audio) => {
    console.log("current audio is", player.audio);
    console.log("clicked audio is", audio);
    // iconRef.current.focus();
    iconRef.current.classList.add("test");
    console.log(iconRef.current.classList);
    console.log(iconRef.current.id);

    const currentAudio = player.audio;
    const newAudio = audio;
    // player.setAudio(audio);
    // player.setImage(image);
    // player.setTitle(title);
    // player.setIsPlaying(true);
    if (player.status === 2) {
      console.log("---");
      // console.log("player is playing, set to false");
      if (currentAudio !== newAudio) {
        player.setAudio(audio);
        player.setStatus(2);
      } else {
        player.setStatus(1);
      }
      // console.log("Status set to 1 (from lister)");
    } else if (player.status === 1) {
      console.log("---");
      // console.log("player is not playing, set to true");
      if (currentAudio !== newAudio) {
        player.setAudio(audio);
        player.setStatus(2);
      }
      player.setStatus(2);
    } else if (player.status === 0) {
      console.log("---");
      player.setAudio(audio);
      // console.log("Initial audio played");
      player.setStatus(2);
      // console.log("Status set to 2");
    }
  };

  const episodeList = getEpisodeList();
  const imgPath = 'https://s3.us-east-2.amazonaws.com/zachcasts/';

  // const icon = "play";

  useEffect(() => {
    console.log("const playing status is", player.status);
    if (player.status === 2) {
      // icon = "pause";
      setIcon("pause");
      // console.log('icon', icon);
      // console.log("--- tatus is Currently 2 / PLAYING ---");
    } else if (player.status === 1) {
      // icon = "play";
      setIcon("play");
      // console.log("icon", icon);
      // console.log("--- Status is Currently 1 / PAUSED ---");
    }
  });

  return (
    <div className="episodes-wrapper home">
      {/* background.setBackground("#fff") */}
      <div className="header">Recent Episodes</div>
      <div className="lister">
        {episodeList.map((episode) => (
          <div key={episode.title} className="episode">
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
            {/* player.isPlaying ? <i onClick={() => setPlayer(episode.audio,
            episode.title, imgPath + episode.cover)}
            className={`fa fa-${icon}-circle-o`} />
              : <i onClick={() => setPlayer(episode.audio, episode.title, imgPath + episode.cover)}
              className={`fa fa-${icon}-circle-o`} /> */}
            <i
              id={episode.title}
              onClick={() => setPlayer(episode.audio, episode.title, imgPath + episode.cover)}
              className={`fa fa-${icon}-circle-o`}
              ref={iconRef}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeEpisodesLister;
