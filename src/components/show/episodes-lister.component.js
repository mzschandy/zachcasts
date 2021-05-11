import React from "react"

import "./show.scss"

const EpisodesLister = ({episodes}) => {
  const episodesList = []

  console.log(episodes)
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
              <div className="time">1h 22m</div>
            </div>
            <div className="title">{episode.title}</div>
            <div className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            </div>
          </div>
          <i className="fa fa-play" />
        </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default EpisodesLister