import React from "react";

import "./episode.scss";

const Episode = ({ episodeNode }) => {
  const episode = episodeNode.frontmatter;
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";

  return (
    <div className="flex flex-col md:flex-row mt-4">
      <div className="flex flex-col left-col">
        <div className="flex flex-row mb-2 md:static md:mb-0">
          <div className="md:mt-4 w-1/4">
            <img id="showLogo" className="md:w-4/5 rounded-md" src={imgPath + episode.cover} alt="logo" />
          </div>
          <div className="ml-2 md:ml-0 md:mt-4">
            <div className="text-base md:text-xl font-semibold">{episode.title}</div>
            <div className="text-sm md:text-xl md:font-semibold">{episode.show}</div>
          </div>
        </div>
      </div>
      <div className="mt-4 right-col">
        <div className="notes-inner">
          <div dangerouslySetInnerHTML={{ __html: episodeNode.html }} />
        </div>
      </div>
    </div>
  );
};

export default Episode;
