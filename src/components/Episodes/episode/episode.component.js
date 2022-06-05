import React from "react";
import PlayButton from "../play-button/play-button.component";

import "./episode.scss";

const Episode = ({ episodeNode }) => {
  const episode = episodeNode.frontmatter;
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";
  // const background = useContext(NavContext);

  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <img id="showLogo" className="" src={imgPath + episode.cover} alt="logo" />
          </div>
          <div className="">
            <div className="">{episode.title}</div>
            <div className="">{episode.show}</div>
          </div>
        </div>
        <div className="">
          <PlayButton mp3={episode.audioPath} full />
        </div>
      </div>
      <div className="">
        <div className="notes-inner">
          <div dangerouslySetInnerHTML={{ __html: episodeNode.html }} />
        </div>
      </div>
    </div>
  );
};

export default Episode;
