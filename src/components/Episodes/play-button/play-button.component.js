import React, {
  useContext, useEffect, useRef, useState,
} from "react";
import PlayerContext from "../../../context/player.context";

const PlayButton = ({
  mp3, title, imgPathCover, full,
}) => {
  const player = useContext(PlayerContext);
  const [icon, setIcon] = useState("play");
  const [epStatus, setEpStatus] = useState(false);
  const iconRef = useRef(null);

  // const toggleEp = () => setEpStatus(prevEpSatus => !epStatus);

  const setPlayer = (audio) => {
    console.log("current audio is", player.audio);
    console.log("clicked audio is", audio);
    // iconRef.current.focus();
    iconRef.current.classList.add("test");
    console.log(iconRef.current.classList);
    console.log("icon ref id", iconRef.current.id);
    console.log("player audio", player.audio);
    console.log("clicked audio is", audio);

    setEpStatus((prevEpStatus) => !prevEpStatus);
    console.log("Current playButton audio playing is > ", epStatus);

    const currentAudio = player.audio;
    const newAudio = audio;
    // player.setAudio(audio);
    // player.setImage(image);
    // player.setTitle(title);
    // player.setIsPlaying(true);
    if (player.status === 2) { // Audio is playing
      console.log("---");
      // console.log("player is playing, set to false");
      if (currentAudio !== newAudio) {
        player.setAudio(audio);
        player.setStatus(2);
      } else {
        player.setStatus(1);
      }
      // console.log("Status set to 1 (from lister)");
    } else if (player.status === 1) { // Audio is not playing
      console.log("---");
      // console.log("player is not playing, set to true");
      if (currentAudio !== newAudio) {
        player.setAudio(audio);
        player.setStatus(2);
      }
      player.setStatus(2);
    } else if (player.status === 0) { // Audio is not playing, default value
      console.log("---");
      player.setAudio(audio);
      // console.log("Initial audio played");
      player.setStatus(2);
      // console.log("Status set to 2");
    }
  };

  useEffect(() => {
    console.log("const playing status is", player.status);
    if (player.status === 2) { // AUdio is playing
      // icon = "pause";
      if (player.audio === iconRef.current.id) {
        setIcon("pause");
      } else {
        setEpStatus(false);
        setIcon("play");
      }

      // setEpStatus(true);

      // setEpStatus((prevEpStatus) => !prevEpStatus);
      console.log("playButton status is > ", epStatus);
      // setIcon("pause");
      // iconRef.current.classList.toggle(`fa-${icon}-circle-o`);
      // console.log('icon', icon);
      // console.log("--- tatus is Currently 2 / PLAYING ---");
    } else if (player.status === 1) { // Audio is paused
      // icon = "play";
      if (player.audio === iconRef.current.id) {
        setIcon("play");
      } else {
        // setEpStatus(true);
      }

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
      {full ? fullButton : normalButton}
    </>
  );
};

export default PlayButton;
