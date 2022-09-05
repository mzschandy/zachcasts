import React, { useContext } from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import PlayerContext from "../../../context/player.context";
import { isPlaying, isInPlayer } from "../../utils/utils.component";

import "./episodeItem.scss";

const EpisodeItem = ({
  episode, playerState, activeEpisode, onPlayButton, onPauseButton, home,
}) => {
  const playerCon = playerState;
  let button;
  const active = isInPlayer(playerCon, episode);
  console.log("is active? >", active);
  const imgPath = 'https://s3.us-east-2.amazonaws.com/zachcasts/';

  if (isPlaying(playerCon, episode)) {
    button = <button type="button" onClick={onPauseButton}>PAUSE</button>;
  } else {
    button = <button type="button" onClick={() => onPlayButton(episode)}>PLAY</button>;
  }

  const homeEpisodeLister = (
    <div className={classNames({ "episodeItem--active": active }, "episode-item__home")}>
      <div className="episode-item__image">
        <img src={imgPath + episode.cover} alt="podcast cover" />
      </div>
      <div className="episode-item__inner">
        <Link to={episode.path} className="episode-item__title">
          <span>{episode.title}</span>
        </Link>
        <div className="episode-item__date-time">
          <div className="episode-item__date">
            <span>{episode.date}</span>
          </div>
          <div className="episode-item__time">
            <span>{episode.showLength}</span>
          </div>
        </div>
      </div>
      <div className="episode-item__button">
        {button}
      </div>
    </div>
  );

  const defaultEpisodesLister = (
    <div className={classNames({ "episodeItem--active": active })} ref={activeEpisode}>
      { /* <div className="">
        <img className="rounded-sm" src={imgPath + episode.cover} alt="Podcast cover" /></div> */ }
      <div className="episode-inner">
        <Link to={episode.path} className="episode-item__title">{episode.title}</Link>
        <div className="episode-item__date-time">
          <div className="episode-item__date">{episode.date}</div>
          <div className="episode-item__time">{episode.showLength}</div>
        </div>
      </div>
      <div className="episode-item__button">
        {button}
      </div>
    </div>
  )

  return (
    <>
      {home ? homeEpisodeLister : defaultEpisodesLister}
    </>
  );
};

export default EpisodeItem;
