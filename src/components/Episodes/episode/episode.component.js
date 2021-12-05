import React from "react";
import PlayButton from "../play-button/play-button.component";

import "./episode.scss";

const Episode = ({ episodeNode }) => {
  const episode = episodeNode.frontmatter;
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";
  // const background = useContext(NavContext);

  return (
    <div className="flex flex-col md:flex-row mt-4 relative">
      <div className="md:fixed md:w-1/4 flex flex-col left-col">
        <div className="flex flex-row mb-2 md:block md:static md:mb-0">
          <div className="md:mt-4 w-1/4 md:w-auto">
            <img id="showLogo" className="md:w-4/5 rounded-md" src={imgPath + episode.cover} alt="logo" />
          </div>
          <div className="title-container md:mt-4">
            <div className="text-base md:text-xl font-semibold">{episode.title}</div>
            <div className="text-sm md:text-base md:font-semibold text-gray-600">{episode.show}</div>
          </div>
        </div>
        <div className="self-center -mt-8 md:self-auto md:mt-2">
          <PlayButton mp3={episode.audioPath} full />
        </div>
      </div>
      <div className="mt-4 right-col md:absolute md:right-0 md:w-3/5">
        <div className="notes-inner">
          <div dangerouslySetInnerHTML={{ __html: episodeNode.html }} />
        </div>
      </div>
    </div>
  );
};

export default Episode;
