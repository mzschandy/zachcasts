/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

import 'react-h5-audio-player/src/styles.scss';
import PlayerContext from "./player.context";

import "./player.scss";

export default function Player() {
  const player = useContext(PlayerContext);
  const audioFolderPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";

  const imageFolderPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";

  return (
    <>
      <div className="player" id="player">
        <div className="currently-playing">
          <div className="playing-cover"><img src={imageFolderPath} alt="cover" /></div>
          <div className="playing-details">
            <div className="playing-title">Ep. 1: Missing (Book 1 - Chapter 1)</div>
            <div className="playing-source">Blades and Bending</div>
          </div>
        </div>
        <AudioPlayer
          layout="stacked-reverse"
          src={audioFolderPath + player.audio}
          onPlay={() => console.log("onPlay")}
          customControlsSection={[
            <div className="playing-cover"><img src={player.image} /></div>,
            <div className="playing-details">
              <div className="playing-title">{player.title}</div>
            </div>,
            RHAP_UI.MAIN_CONTROLS,
          ]}
        />
      </div>
    </>
  );
}
