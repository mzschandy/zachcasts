import React from "react";
import Color from "color-thief-react";

import "./episode.scss";

const Episode = ({ episodeNode }) => {
  const episode = episodeNode.frontmatter;
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";

  return (
    <div className="flex flex-row mt-4">
      <div className="flex flex-col" style={{ flex: "40%" }}>
        <div className="mt-4">
          <img id="showLogo" className="w-4/5 rounded-sm" src={imgPath + episode.cover} alt="logo" />
        </div>
        <div className="mt-4">
          <div className="text-xl font-semibold">{episode.show}</div>
          <div className="">by Podcast author</div>
        </div>
        <div className="mt-4">This is a description lots oflorem text</div>
      </div>
      <div className="mt-4" style={{ flex: "60%" }}>
        <div className="text-xl font-semibold">{episode.title}</div>
        <div className="notes-inner">
          <div dangerouslySetInnerHTML={{ __html: episodeNode.html }} />
        </div>
      </div>
    </div>
  );
};

export default Episode;
