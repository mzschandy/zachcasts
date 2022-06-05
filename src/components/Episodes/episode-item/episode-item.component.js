import React from "react";
import { Link } from "gatsby";
import PlayButton from "../play-button/play-button.component";

const EpisodeItem = ({ episode }) => {
  const imgPath = 'https://s3.us-east-2.amazonaws.com/zachcasts/';

  return (
    <>
      <div key={episode.audio} className="">
        { /* <div className="">
        <img className="rounded-sm" src={imgPath + episode.cover} alt="Podcast cover" /></div> */ }
        <div className="">
          <Link to={episode.path} className="font-semibold md:font-normal">{episode.title}</Link>
          <div className="">
            <div className="">{episode.date}</div>
            <div className="">{episode.showLength}</div>
          </div>
        </div>
        <PlayButton
          mp3={episode.audio}
          title={episode.title}
          imgPathCover={imgPath + episode.cover}
        />

        {/* player.isPlaying ? <i onClick={() => setPlayer(episode.audio,
            episode.title, imgPath + episode.cover)}
            className={`fa fa-${icon}-circle-o`} />
              : <i onClick={() => setPlayer(episode.audio, episode.title, imgPath + episode.cover)}

       className={`fa fa-${icon}-circle-o`} /> */}
        {/* }
        <i
          id={episode.title}
          onClick={() => setPlayer(episode.audio, episode.title, imgPath + episode.cover)}
          className={`fa fa-${icon}-circle-o`}
          ref={iconRef}
      /> */}
      </div>
    </>
  );
};

export default EpisodeItem;
