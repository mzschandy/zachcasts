import React, { useContext } from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import PlayButton from "../play-button/play-button.component";
import PlayerContext from "../../../context/player.context";
import { isPlaying, isInPlayer } from "../../utils/utils.component";

import "./episodeItem.scss";

const EpisodeItem = ({
  episode, playerState, activeEpisode, onPlayButton, onPauseButton,
}) => {
  const playerCon = playerState;
  let button;
  const active = isInPlayer(playerCon, episode);
  console.log("is active? >", active)
  const imgPath = 'https://s3.us-east-2.amazonaws.com/zachcasts/';

  if (isPlaying(playerCon, episode)) {
    button = <button type="button" onClick={onPauseButton}>PAUSE</button>;
  } else {
    button = <button type="button" onClick={() => onPlayButton(episode)}>PLAY</button>;
  }

  return (
    <>
      <div className={classNames({ "episodeItem--active": active })} ref={activeEpisode}>
        { /* <div className="">
        <img className="rounded-sm" src={imgPath + episode.cover} alt="Podcast cover" /></div> */ }
        <div className="episode-inner">
          <Link to={episode.path} className="font-semibold md:font-normal">{episode.title}</Link>
          <div className="">
            <div className="">{episode.date}</div>
            <div className="">{episode.showLength}</div>
          </div>
        </div>
        <div>
          {button}
        </div>

        {/* player.isPlaying ? <i onClick={() => setPlayer(episode.audio,
            episode.title, imgPath + episode.cover)}
            className={`fa fa-${icon}-circle-o`} />
              : <i onClick={() => setPlayer(episode.audio, episode.title, imgPath + episode.cover)}

       className={`fa fa-${icon}-circle-o`} /> */}
        {/* }
        <i
          id={episode.title}
          onClick={() => setPlayer(episode.audio, episode.title, imgPath + episode.cover)}
          className={`fa fa-${icon}-circle-o`}
          ref={iconRef}
      /> */}
      </div>
    </>
  );
};

export default EpisodeItem;
