/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";

import 'react-h5-audio-player/src/styles.scss';
import PlayerContext from "./player.context";

import "./player.scss";

export default function Player() {
  const player = useContext(PlayerContext);
  const playerRef = useRef(null);
  const audioFolderPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";

  // const ImageCover = "https://zachcasts.s3.us-east-2.amazonaws.com/blades%26bending_cover.png";

  useEffect(() => {
    if (player.status === 2) {
      console.log("// PLAYER IS PLAYING //");
      playerRef.current.audio.current.play();
      // console.log("AUDIO IS NOW PAUSED");
    } else if (player.status === 1) {
      console.log("// PLAYER IS PAUSED //");
      playerRef.current.audio.current.pause();
      // console.log("AUDIO IS NOW PLAYING");
    } else if (player.status === 0) {
      console.log("// PLAYER IN INTIIAL STATE //");
    }
  });

  const playAudio = () => {
    if (player.status === 1) {
      player.setStatus(2);
      console.log("status set to 2 (from player component)", player.status);
      // playerRef.current.audio.current.play();
      // console.log("AUDIO IS NOW PLAYING");
    }
    if (player.status === 0) {
      player.setStatus(2);
      // playerRef.current.audio.current.play();
      // console.log("AUDIO IS NOW PLAYING", player.status);
    }
  };

  const pauseAudio = () => {
    player.setStatus(1);
    console.log("status set to 1 (from player component)", player.status);
    // playerRef.current.audio.current.pause();
    // console.log("AUDIO IS NOW PAUSED");
    /*
    if (player.status === 2) {
      player.setStatus(1);
      console.log("AUDIO IS PLAYING:", player.status);
      playerRef.current.audio.current.pause();
      // console.log("AUDIO IS NOW PLAYING");
    } */
  };

  return (
    <>
      <div className="fixed z-30 bottom-0 left-0 w-full" id="player">
        <AudioPlayer
          ref={playerRef}
          src={audioFolderPath + player.audio}
          onPlay={() => { playAudio(); }}
          onPause={() => { pauseAudio(); }}
        />
      </div>
    </>
  );
}
