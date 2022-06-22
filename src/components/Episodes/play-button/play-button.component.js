import React, {
  useContext, useEffect, useRef, useState,
} from "react";
import PlayerContext from "../../../context/player.context";

const PlayButton = ({
  mp3, title, imgPathCover,
}) => {
  const playerCon = useContext(PlayerContext);
  const [icon, setIcon] = useState("play");
  const [epStatus, setEpStatus] = useState(false);
  const iconRef = useRef(null);
  const isPlayingText = useState(false);

  // const toggleEp = () => setEpStatus(prevEpSatus => !epStatus);

  const setPlayer = (audio) => {
    // console.log("current audio is", playerCon.audio);
    // console.log("clicked audio is", audio);
    // iconRef.current.focus();
    // iconRef.current.classList.add("test");
    // console.log(iconRef.current.classList);
    // console.log("icon ref id", iconRef.current.id);
    console.log("player audio", playerCon.audio);
    console.log("clicked audio is", audio);

    setEpStatus((prevEpStatus) => !prevEpStatus);
    console.log("Current playButton audio playing is > ", epStatus);

    const currentAudio = playerCon.audio;
    // const currentAudio = "audio.mp3";
    const newAudio = audio;
    // player.setAudio(audio);
    // player.setImage(image);
    // player.setTitle(title);
    // player.setIsPlaying(true);
    if (playerCon.status === 2) { // Audio is playing
      console.log("---");
      // console.log("player is playing, set to false");
      if (currentAudio !== newAudio) {
        playerCon.setAudio(audio);
        playerCon.setStatus(2);
      } else {
        playerCon.setStatus(1);
      }
      // console.log("Status set to 1 (from lister)");
    } else if (playerCon.status === 1) { // Audio is not playing
      console.log("---");
      // console.log("player is not playing, set to true");
      if (currentAudio !== newAudio) {
        playerCon.setAudio(audio);
        playerCon.setStatus(2);
      }
      playerCon.setStatus(2);
    } else if (playerCon.status === 0) { // Audio is not playing, default value
      console.log("---");
      playerCon.setAudio(audio);
      // console.log("Initial audio played");
      playerCon.setStatus(2);
      // console.log("Status set to 2");
    }
  };

  useEffect(() => {
    console.log("const playing status is", playerCon.status);
    if (playerCon.status === 2) { // AUdio is playing
      // icon = "pause";

      // setEpStatus(true);

      // setEpStatus((prevEpStatus) => !prevEpStatus);
      console.log("playButton status is > ", epStatus);
      // setIcon("pause");
      // iconRef.current.classList.toggle(`fa-${icon}-circle-o`);
      // console.log('icon', icon);
      // console.log("--- tatus is Currently 2 / PLAYING ---");
    } else if (playerCon.status === 1) { // Audio is paused
      // icon = "play"
      // setEpStatus(false);

      // setEpStatus((prevEpStatus) => !prevEpStatus);
      console.log("playButton status is > ", epStatus);
      // setIcon("play");
      // iconRef.current.classList.toggle(`fa-${icon}-circle-o`);
      // console.log("icon", icon);
      // console.log("--- Status is Currently 1 / PAUSED ---");
    }
  });
  const fullButton = (
    <div
      id={mp3}
      onClick={() => setPlayer(mp3,
        title, imgPathCover)}
      className="h-9 border bg-gray-100 border-gray-700 w-36 md:w-4/5 rounded-sm flex justify-center cursor-pointer"
    >
      <i className={`fa fa-${icon}-circle-o full-play-button`} ref={iconRef} />
      <div className="self-center uppercase text-gray-400">{icon}</div>
    </div>
  );

  const normalButton = (
    <i
      id={mp3}
      onClick={() => setPlayer(mp3,
        title, imgPathCover)}
      className={`fa fa-${icon}-circle-o play-button`}
      ref={iconRef}
    />
  );
  return (
    <>
      <button type="button" onClick={() => setPlayer(mp3, title, imgPathCover)}>{epStatus ? "Pause" : "Play"}</button>
    </>
  );
};

export default PlayButton;
