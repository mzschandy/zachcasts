import React from "react"
import HomeEpisodesLister from "../episodes-lister-home/episodes-lister-home"
import EpisodesLister from "./episodes-lister.component"

import "./show.scss"

const Show = () => {
  return (
    <div>
      <div className="show-wrapper">
      <div className="show">
        <div className="cover">
          <div className="fake-img">Img</div>
          <div className="bio">
            <div className="name">Podcast</div>
            <div className="author">by Podcast author</div>
          </div>
        </div>
        <div className="show-info">
          <div className="bio">
            <div className="name">Podcast</div>
            <div className="author">by Podcast author</div>
          </div>
          <div className="description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
    <EpisodesLister/>
    </div>
  )
}

export default Show