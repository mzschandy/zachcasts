import React, {useState, useEffect, useContext} from "react"
import AudioPlayer from "react-h5-audio-player"

import 'react-h5-audio-player/src/styles.scss';
import PlayerContext from "./player.context";

import "./player.scss";

export default function Player() {
  const player = useContext(PlayerContext);
  const audioFolderPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";

  const ImageCover = "https://zachcasts.s3.us-east-2.amazonaws.com/blades%26bending_cover.png";

  return (
    <>
      <div className="player" id="player">
        <div className="currently-playing">
          <div className="playing-cover"><img src={ImageCover} /></div>
          <div className="playing-details">
            <div className="playing-title">Ep. 1: Missing (Book 1 - Chapter 1)</div>
            <div className="playing-source">Blades and Bending</div>
          </div>
        </div>
        <AudioPlayer src={audioFolderPath + player.audio} onPlay={event => console.log("onPlay")} />
      </div>
      <div className="player" id="mobilePlayer">
        <div className="currently-playing">
          <div className="top"><i onClick={shrink} id="slideDown" className="fa fa-sort-down"></i></div>
          <div className="playing-cover"><img src={ImageCover}></img></div>
          <div className="playing-details">
            <div className="playing-title">This is an episode name</div>
            <div className="playing-source">Podcast</div>
          </div>
        </div>
        <AudioPlayer src={audioFolderPath + player.audio} onPlay={event => console.log("onPlay")} />
      </div>
    </>
  );
}
