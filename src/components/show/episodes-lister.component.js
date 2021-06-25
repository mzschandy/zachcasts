import React, { useContext } from "react"
import {Link} from "gatsby"
import PlayerContext from "../player/player.context"

import "./show.scss"

const EpisodesLister = ({episodes}) => {
  const episodesList = []
  //const []
  const player = useContext(PlayerContext)
  console.log(episodes)

  const setPlayer = (audio, title) => {
    player.setAudio(audio);
    //player.setImage(image);
    player.setTitle(title);
  }

  const playingToggle = player.playing;
  return (
    <div className="wrapper-outer">
      <div className="episodes-wrapper">
      <div className="header">Recent Episodes</div>
      <div className="lister">
        {episodes.map((episode) => (
          <div className="episode">
          <div className="episode-info">
            <div className="release-info">
              <div className="date">{episode.date}</div>
              <div className="time">{episode.showLength}</div>
            </div>
            <Link to={episode.path} className="title">{episode.title}</Link>
            <div className="description">
            {episode.description}
            </div>
          </div>
          <i onClick={() => setPlayer(episode.audioPath, episode.title)} className="fa fa-play-circle-o" />
        </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default EpisodesLister