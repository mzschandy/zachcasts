import React, { useState } from "react";
// import Player from "./player.component";
import PlayerContext from "../context/player.context";

export const PlayerProvider = ({ children }) => {
  const [audio, setAudio] = useState();
  // const [playing, setPlaying] = useState();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [status, setStatus] = useState(0);

  return (
    <PlayerContext.Provider value={{
      audio, setAudio, title, setTitle, image, setImage, status, setStatus,
    }}
    >
      {children}
      {/* <Player mp3={audioFolderPath + audio} /> */}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
