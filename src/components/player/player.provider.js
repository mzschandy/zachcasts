import React, { useState } from "react";
// import Player from "./player.component";
import PlayerContext from "./player.context";

export const PlayerProvider = ({ children }) => {
  const [audio, setAudio] = useState();
  // const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState(0);

  // 0 = initial pause
  // 1 = regular pause
  // 2 = play

  // const audioFolderPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";
  // console.log("audio path", audioFolderPath + audio

  return (
    <PlayerContext.Provider value={{
      audio, setAudio, status, setStatus,
    }}
    >
      {children}
      {/* <Player mp3={audioFolderPath + audio} /> */}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
