import React from "react";
import { Link } from "gatsby";
import PlayButton from "../play-button/play-button.component";

const EpisodeItem = ({ episode }) => {
  const imgPath = 'https://s3.us-east-2.amazonaws.com/zachcasts/';

  return (
    <>
      <div key={episode.title} className="flex w-full py-3 border-b-2 border-gray-300 mb-2">
        <div className="cover w-16 h-16 self-center rounded-sm"><img className="rounded-sm" src={imgPath + episode.cover} alt="Podcast cover" /></div>
        <div className="ml-4 flex flex-col self-center" style={{ flex: "60%" }}>
          <Link to={episode.path} className="">{episode.title}</Link>
          <div className="flex">
            <div className="text-xs mr-2">{episode.date}</div>
            <div className="text-xs">{episode.showLength}</div>
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
