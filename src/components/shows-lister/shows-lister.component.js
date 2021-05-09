import React from "react"

import "./shows.scss"

const ShowsLister = () => {
  return (
    <div className="shows-lister">
      <div className="header">Shows</div>
      <div className="lister">
        <div className="show">
          <div className="cover"></div>
          <div className="name">Podcast</div>
        </div>
        <div className="show">
          <div className="cover"></div>
          <div className="name">Podcast</div>
        </div>
        <div className="show">
          <div className="cover"></div>
          <div className="name">Podcast</div>
        </div>
      </div>
    </div>
  )
}

export default ShowsLister