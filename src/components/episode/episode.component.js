import React from "react"
import Color from "color-thief-react";

import "./episode.scss"

const Episode = ({episodeNode}) => {
  const episode = episodeNode.frontmatter
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/"
  
  return (
    <div>
      <div>
      <Color src="https://s3.us-east-2.amazonaws.com/zachcasts/blades%26bending_cover.png" crossOrigin="anonymous" format="hex">
      {({ data, loading }) => {
          return (
            <div className="show-wrapper" style={{backgroundColor: data}}>
      <div className="show">
        <div className="cover">
          <div className="fake-img">
            <img id="showLogo" src={imgPath+episode.cover} alt="logo"></img>
          </div>
          <div className="bio">
            <div className="name">{episode.title}</div>
            <div className="author">{episode.show}</div>
          </div>
        </div>
        <div className="show-info">
          <div className="bio">
            <div className="name">{episode.title}</div>
            <div className="author">{episode.show}</div>
            
          </div>
        </div>
      </div>
    </div>
          );
        }}
      
      </Color>
      
    <div className="episode-notes">
      <div className="notes-inner">
        <div dangerouslySetInnerHTML={{ __html: episodeNode.html }} />
      </div>
    </div>
    </div>
    </div>
  )
}

export default Episode