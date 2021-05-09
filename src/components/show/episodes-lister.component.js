import React from "react"

import "./show.scss"

const EpisodesLister = () => {
  return (
    <div className="wrapper-outer">
      <div className="episodes-wrapper">
      <div className="header">Recent Episdes</div>
      <div className="lister">
        <div className="episode">
          <div className="episode-info">
            <div className="release-info">
              <div className="date">01/01/2021</div>
              <div className="time">1h 22m</div>
            </div>
            <div className="title">This is an episode name</div>
            <div className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            </div>
          </div>
          <i className="fa fa-play" />
        </div>
        <div className="episode">
          <div className="episode-info">
            <div className="release-info">
              <div className="date">01/01/2021</div>
              <div className="time">1h 22m</div>
            </div>
            <div className="title">This is an episode name</div>
            <div className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            </div>
          </div>
          <i className="fa fa-play" />
        </div>
        <div className="episode">
          <div className="episode-info">
            <div className="release-info">
              <div className="date">01/01/2021</div>
              <div className="time">1h 22m</div>
            </div>
            <div className="title">This is an episode name</div>
            <div className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            </div>
          </div>
          <i className="fa fa-play" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default EpisodesLister