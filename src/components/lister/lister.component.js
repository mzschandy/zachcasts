import { Link } from 'gatsby';
import React, { useRef, useContext } from 'react';
import _ from 'lodash';
import PlayButton from '../Episodes/play-button/play-button.component';
import EpisodeItem from '../Episodes/episode-item/episode-item.component';
import { useAudioElement } from '../../providers/audio-element.provider';
import Spinner from '../spinner/spinner.component';
import PlayerContext from '../../context/player.context';
import { isInPlayer, useLoadEpisode } from '../utils/utils.component';

const Lister = ({ episodes = null, shows = null, home }) => {
  const activeEpisode = useRef();
  const playerCon = useContext(PlayerContext);
  const audioElement = useAudioElement();
  const load = useLoadEpisode();

  // const { home, image } = options;

  const getShowList = () => {
    const showList = [];
    if (shows != null) {
      shows.forEach((show) => {
        showList.push(show);
      });
    }

    return showList;
  };

  const getEpisodeList = () => {
    const episodeList = [];
    if (episodes != null) {
      episodes.forEach((episode) => {
        episodeList.push({
          path: episode.node.fields.slug,
          tags: episode.node.frontmatter.tags,
          cover: episode.node.frontmatter.cover,
          title: episode.node.frontmatter.title,
          audio: episode.node.frontmatter.audioPath,
          date: episode.node.fields.date,
          show: episode.node.frontmatter.show,
          exerpt: episode.node.frontmatter.shortDescription,
          showLength: episode.node.frontmatter.showLength,
          timeToRead: episode.node.timeToRead,
        });
      });
    }
    return episodeList;
  };

  

  const episodeList = getEpisodeList();
  const showList = getShowList();
  //console.log("episodeList", episodeList);
  //console.log("showlist", showList);

  const playAudio = () => {
    console.log("playAudio() function triggered");
    audioElement.current.audio.current.play();
    // playerCon.setAudio(episode.audio);
  };

  const pauseAudio = () => {
    console.log("pauseAudio() function triggered");
    audioElement.current.audio.current.pause();
    playerCon.setStatus(1);
  };


  const homeEpisodeLister = episodeList.map((episode) => (
    <div key={episode.title} className="">
      <div className="">
        <div>HOME PAGE</div>
        <div className="">
          <div className="">{episode.date}</div>
          <div className="">{episode.showLength}</div>
        </div>
        <Link to={episode.path} className="">{episode.title}</Link>
        <div className="">{episode.show}</div>
      </div>
      <i className="fa fa-play-circle-o" />
    </div>
  ));

  /*
  const episodeLister = episodeList.map((episode) => (

  )); */
  if (episodes != null) {
    if (home) {
      return homeEpisodeLister;
    }
    if (episodeList) {
      return episodeList.map((episode) => {
        let handlePlay;
        let ref;

        if (isInPlayer(playerCon, episode)) {
          console.log("isINPLAYer! continuing audio");
          handlePlay = () => playAudio(episode);
          ref = activeEpisode;
          console.log(ref);
          
          playerCon.setAudio(episode.audio);
          playerCon.setStatus(2);
          playerCon.setTitle(episode.title);
        } else {
          console.log("isn'tInPlayer, starting new audio")
          handlePlay = () => load(episode, playerCon);
          ref = null;
          console.log(ref)
        }

        return (
          <EpisodeItem
            key={episode.title}
            episode={episode}
            playerState={playerCon}
            activeEpisode={ref}
            onPlayButton={handlePlay}
            onPauseButton={() => pauseAudio(episode)}
          />
        );
      });
    }
    return <Spinner />;
  }


  const showsLister = showList.map((show) => (
    <Link key={show.show} to={`/shows/${_.kebabCase(show.show)}`}>
      <div>{show.show}</div>
    </Link>
  ));

  let list;

  if (shows != null) {
    list = (
      <>
        {showsLister}
      </>
    );
  }

  if (shows == null && episodes == null) {
    list = (<div>Lister cannot render</div>);
  }

  return (
    <>
      {list}
    </>
  );
};

export default Lister;
