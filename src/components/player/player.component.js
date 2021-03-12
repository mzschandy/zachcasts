import React from "react"
import AudioPlayer from "react-h5-audio-player"

import 'react-h5-audio-player/src/styles.scss'

export default function Player({mp3, index, episodeNumber}) {
  return(
    <>
      <AudioPlayer src={mp3} onPlay={event => console.log("onPlay")} />
    </>
  )
}