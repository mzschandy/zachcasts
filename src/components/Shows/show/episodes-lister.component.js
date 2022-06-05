import React, { useContext } from "react";
import { Link } from "gatsby";
import PlayerContext from "../../../context/player.context";

import "./show.scss";

const EpisodesLister = ({ episodes }) => {
  // const episodesList = [];
  // const []
  const player = useContext(PlayerContext);
  console.log(episodes);

  const setPlayer = (audio, title, image) => {
    player.setAudio(audio);
    player.setImage(image);
    player.setTitle(title);
  };

  // const playingToggle = player.playing;
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";
  return (
    <div className="">
      <div className="">
        <div className="">Recent Episodes</div>
        <div className="">
          {episodes.map((episode) => (
            <div className="">
              <div className="">
                <div className="">
                  <div className="">{episode.date}</div>
                  <div className="">{episode.showLength}</div>
                </div>
                <Link to={episode.path} className="">{episode.title}</Link>
                <div className="">
                  {episode.description}
                </div>
              </div>
              <i onClick={() => setPlayer(episode.audioPath, episode.title, imgPath + episode.cover)} className="fa fa-play-circle-o" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodesLister;
