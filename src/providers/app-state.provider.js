import React, { useState, createContext, useContext } from "react";
import { useLoadEpisode } from "../components/utils/utils.component";
import { useAudioElement } from "./audio-element.provider";

export const AppStateContext = createContext();

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider = ({ children }) => {
  // const [audio, setAudio] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState();
  const [status, setStatus] = useState(); //PLAYING, PAUSE, LOADING
  const audioElement = useAudioElement();


  const handlePlay = (episode) => {
    console.log("playAudio() function triggered");
    const episodeUrl = episode.audio;
    if (!episodeUrl) {
      setIsPlaying(true);
      setCurrentTrack(episodeUrl);
      setStatus("PLAYING");

      audioElement.current.audio.current.play();
    } else if (currentTrack !== episodeUrl) {
      setCurrentTrack(episodeUrl);
      const load = useLoadEpisode();
      load(episode);
    } else {
      audioElement.current.audio.current.play();
    }
  }

  const handlePause = () => {
    console.log("pauseAudio() function triggered");
    audioElement.current.audio.current.pause();
    setStatus("PAUSE");
  }

  return (
    <AppStateContext.Provider>
      {children}
    </AppStateContext.Provider>
  );
};
