import React, {
  useContext, useEffect, useRef, useState,
} from "react";
import PlayerContext from "../../context/player.context";
import { useAudioElement } from "../../providers/audio-element.provider";

export const BASE_AUDIO_URL = "https://s3.us-east-2.amazonaws.com/zachcasts/"

export const isInPlayer = (playerState, episode) => {
  console.log("----Checking to see if Audio is in player");
  let newAudio;
  const currentAudio = playerState.audio;
  console.log("CURRENT AUDIO IS", currentAudio);

  if (typeof episode.audio !== 'undefined') {
    newAudio = episode.audio;
    console.log("NEW AUDIO IS", newAudio);
  } else {
    return false;
  }

  if (currentAudio === newAudio) {
    // console.log("CURRENT AUDIO EQUALS NEW AUDIO.", newAudio, " IS IN PLAYER");
    return true;
  }

  // console.log("AUdio is different, new Audio is NOT IN Player")
  return false;
};

export const isPlaying = (playerState, episode) => {
  // const playerCon = useContext(PlayerContext);
  console.log("IS PLAYING > ", isInPlayer(playerState, episode)
  && (playerState.status === 2));

  return isInPlayer(playerState, episode)
  && (playerState.status === 2);
};

export const useLoadEpisode = () => {
  const audioElement = useAudioElement();

  return function loadEpisode(episode, playerState) {
    const currAudio = audioElement.current.audio.current;
    console.log("LOading audio", episode.audio);
    
    // const testCurrAudio = audioElement.current;
    // console.log("CURRAUDIO (audioelement.current.audio)", currAudio);
    // console.log("CURRAUDIO (audioelement.current)", testCurrAudio);
    // console.log("currAUdio testing", audioElement.current.audio.current.src)

    const src = episode.audio;
    // console.log("SRC,", src)
    playerState.setAudio(src);
    playerState.setTitle(episode.title);
    // console.log("EPISODE AUDIO (SRC)", episode.audio);
    // console.log("CURR AUDIO SRC", currAudio.currentSrc);
    // console.log("TEST CURR AUDIO SRC", testCurrAudio.currentSrc);
    currAudio.src = BASE_AUDIO_URL+src;
    // console.log("CURR AUDIO SRC AFTER", currAudio.currentSrc);

    currAudio.load();
    currAudio.play();
    playerState.setStatus(2);
  }
};
