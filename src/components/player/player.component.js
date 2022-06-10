/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/alt-text */
import React, {
  useContext, useEffect, useLayoutEffect, useRef,
} from "react";
import 'shikwasa/dist/shikwasa.min.css';
import Shikwasa from 'shikwasa';
// import AudioPlayer from "react-h5-audio-player";

import 'react-h5-audio-player/src/styles.scss';
import PlayerContext from "../../context/player.context";

import "./player.scss";

export default function Player() {
  const playerCon = useContext(PlayerContext);
  const playerRef = useRef(null);
  const audioFolderPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";

  const ImageCover = "https://zachcasts.s3.us-east-2.amazonaws.com/blades%26bending_cover.png";

  /*
  const player = new Shikwasa({
    container: () => document.querySelector('.player'),
    audio: {
      title: 'Hello World!',
      artist: 'Shikwasa FM',
      cover: ImageCover,
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
  });*/
  useEffect(() => {
    playerRef.current = new Shikwasa({
      container: () => document.querySelector('.player'),
      audio: {
        title: 'Hello World!',
        artist: 'Shikwasa FM',
        cover: ImageCover,
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      },
    });
  }, []);
  
  useEffect(() => {

    console.log(playerRef.current);
    if (playerCon.status === 2) {
      console.log("// PLAYER IS PLAYING //");
      // playerRef.current.audio.current.play();
      //player.play();
      // console.log("AUDIO IS NOW PAUSED");
    } else if (playerCon.status === 1) {
      console.log("// PLAYER IS PAUSED //");
      // playerRef.current.audio.current.pause();
      //player.pause();
      // console.log("AUDIO IS NOW PLAYING");
    } else {
      console.log("// PLAYER IN INTIIAL STATE //");
    }
  }, [playerCon.status]);

  

  const playAudio = () => {
    if (playerCon.status === 1) {
      playerCon.setStatus(2);
      console.log("status set to 2 (from player component)", playerCon.status);
      playerRef.current.play();
      // playerRef.current.audio.current.play();
      // console.log("AUDIO IS NOW PLAYING");
    }
    if (playerCon.status === 0) {
      playerCon.setStatus(2);
      playerRef.current.play();
      // playerRef.current.audio.current.play();
      // console.log("AUDIO IS NOW PLAYING", player.status);
    }
  };

  const pauseAudio = () => {
    playerCon.setStatus(1);
    console.log("status set to 1 (from player component)", playerCon.status);
    playerRef.current.pause();
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

  // let player;

  const testFunc = () => {
    console.log("BEFOUBEUF");
    playerRef.current.toggle();
    //console.log(player.audio.duration);
  };

  console.log(playerRef.current);

  return (
    <>
      <div className="fixed z-30 bottom-0 left-0 w-full">
        <button type="button" onClick={testFunc}>Button</button>
        <div className="player" ref={playerRef}>test</div>
      </div>
    </>
  );
}
