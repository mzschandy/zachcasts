import React, {useState, useEffect} from "react"
import AudioPlayer from "react-h5-audio-player"

import 'react-h5-audio-player/src/styles.scss'

import "./player.scss"

export default function Player({mp3, index, episodeNumber}) {

  const [expand, setExpand] = useState(false)

  useEffect(() => {
    console.log("useEffect expand", expand)
  }, [expand])

  function expandPlayer() {
    const player = document.getElementById("player")
    console.log(player)
    console.log("current expand value", expand)

    console.log("expanding player")

    player.classList.add("active")

    if (player.classList.contains("active") && expand == true) {
      console.log("player still has active, removing now")
      player.classList.remove("active")
      setExpand(current => !current)
    } else {
      setExpand(current => !current)
      console.log("new expand value", expand)
    
      console.log("added active class")
    }
  }

  function shrink() {
    const player = document.getElementById("player")
    console.log("shrinking player!")

    player.classList.remove("active")

    console.log("removed active class")
  }

  return(
    <div className="player" id="player" onClick={expandPlayer}>
      <div className="currently-playing">
        <div className="top"><i onClick={shrink} id="slideDown" className="fa fa-sort-down"></i></div>
        <div className="playing-cover"></div>
        <div className="playing-details">
          <div className="playing-title">Chapter 1: A New Adventure</div>
          <div className="playing-source">Blades and Bending</div>
        </div>
      </div>
      <AudioPlayer src={mp3} onPlay={event => console.log("onPlay")} />
    </div>
  )
}