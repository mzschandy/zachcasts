import React, {useState, useEffect} from "react"
import Player from "./player.component"
import PlayerContext from "./player.context"

export const PlayerProvider = ({children}) => {
  const [audio, setAudio] = useState()

  const playAudio = (event, data) => {
    event.preventDefault()
    console.log("audio data" , data)
    setAudio(data);
  }

  const audioFolderPath = "https://s3.us-east-2.amazonaws.com/zachcasts/"
  console.log("audio path", audioFolderPath + audio)

  return (
    <PlayerContext.Provider value={{audio, setAudio}}>
      {children}
      {/*<Player mp3={audioFolderPath + audio} />*/}
    </PlayerContext.Provider>
  )
}

//export default PlayerProvider