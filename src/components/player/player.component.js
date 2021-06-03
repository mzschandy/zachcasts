import React, {useState, useEffect, useContext} from "react"
import AudioPlayer from "react-h5-audio-player"

import 'react-h5-audio-player/src/styles.scss'
import PlayerContext from "./player.context"


import "./player.scss"

export default function Player({mp3, index, episodeNumber}) {

  const [expand, setExpand] = useState(false)
  const player = useContext(PlayerContext)
  const audioFolderPath = "https://s3.us-east-2.amazonaws.com/zachcasts/"

  useEffect(() => {
    console.log("useEffect expand", expand)
  }, [expand])

  function expandPlayer() {
    const player = document.getElementById("mobilePlayer")
    //console.log(player)
    //console.log("current expand value", expand)

    //console.log("expanding player")

    player.classList.add("active")

    if (player.classList.contains("active") && expand == true) {
      //console.log("player still has active, removing now")
      player.classList.remove("active")
      setExpand(current => !current)
    } else {
      setExpand(current => !current)
      //console.log("new expand value", expand)
    
      //console.log("added active class")
    }
  }

  function shrink() {
    const player = document.getElementById("mobilePlayer")
    //console.log("shrinking mobile player!")

    player.classList.remove("active")

    //console.log("removed active class mobile player")
  }

  const ImageCover = "https://zachcasts.s3.us-east-2.amazonaws.com/blades%26bending_cover.png";

  return(
    <>
      <div className="player" id="player" onClick={expandPlayer}>
        <div className="currently-playing">
          <div className="playing-cover"><img src={ImageCover}></img></div>
          <div className="playing-details">
            <div className="playing-title">Ep. 1: Missing (Book 1 - Chapter 1)</div>
            <div className="playing-source">Blades and Bending</div>
          </div>
        </div>
        <AudioPlayer src={audioFolderPath + player.audio} onPlay={event => console.log("onPlay")} />
      </div>
      <div className="player" id="mobilePlayer">
        <div className="currently-playing">
          <div className="top"><i onClick={shrink} id="slideDown" className="fa fa-sort-down"></i></div>
          <div className="playing-cover"><img src={ImageCover}></img></div>
          <div className="playing-details">
            <div className="playing-title">This is an episode name</div>
            <div className="playing-source">Podcast</div>
          </div>
        </div>
        <AudioPlayer src={audioFolderPath + player.audio} onPlay={event => console.log("onPlay")} />
      </div>
    </>
  )
}