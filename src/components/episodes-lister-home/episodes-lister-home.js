import React from "react"

import "./episodes.scss"

const HomeEpisodesLister = () => {
  return (
    <div className="episodes-wrapper home">
      <div className="header">Recent Episdes</div>
      <div className="lister">
        <div className="episode">
          <div className="cover">pod</div>
          <div className="episode-info">
            <div className="release-info">
              <div className="date">01/01/2021</div>
              <div className="time">1h 22m</div>
            </div>
            <div className="title">This is an episode name</div>
            <div className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            </div>
            <div className="show-name">Podcast</div>
          </div>
        </div>
        <div className="episode">
          <div className="cover">pod</div>
          <div className="episode-info">
            <div className="release-info">
              <div className="date">01/01/2021</div>
              <div className="time">1h 22m</div>
            </div>
            <div className="title">This is an episode name</div>
            <div className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            </div>
            <div className="show-name">Podcast</div>
          </div>
        </div>
        <div className="episode">
          <div className="cover">pod</div>
          <div className="episode-info">
            <div className="release-info">
              <div className="date">01/01/2021</div>
              <div className="time">1h 22m</div>
            </div>
            <div className="title">This is an episode name</div>
            <div className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            </div>
            <div className="show-name">Podcast</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeEpisodesLister