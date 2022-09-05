import { Link } from 'gatsby';
import React, { useRef, useContext, useState } from 'react';
import _ from 'lodash';
import PlayButton from '../../episodes/play-button/play-button.component';
import { useAudioElement } from '../../../providers/audio-element.provider';
import Spinner from '../../spinner/spinner.component';
import PlayerContext from '../../../context/player.context';
import { isInPlayer, useLoadEpisode } from '../../utils/utils.component';
import EpisodeItem from '../episode-item/episode-item.component';
import ShowItem from '../show-item/show-item.component';

const Lister = ({ episodes = null, shows = null, home }) => {
  const activeEpisode = useRef();
  const playerCon = useContext(PlayerContext);
  const audioElement = useAudioElement();
  const load = useLoadEpisode();
  const [stateEpisodeList, setStateEpisodeList] = useState();
  let list;

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
    // setStateEpisodeList(episodeList);
    // console.log(stateEpisodeList);
    return episodeList;
  };

  const episodeList = getEpisodeList();
  const showList = getShowList();
  console.log("episodeList", episodeList);
  // console.log("showlist", showList);

  const playAudio = () => {
    console.log("playAudio() function triggered");
    audioElement.current.audio.current.play();
    playerCon.setStatus(2);
    // playerCon.setAudio(episode.audio);
  };

  const pauseAudio = () => {
    console.log("pauseAudio() function triggered");
    audioElement.current.audio.current.pause();
    playerCon.setStatus(1);
  };

  /*
  const episodeLister = episodeList.map((episode) => (

  )); */
  if (episodes != null) {
     if (episodeList) {
      list = episodeList.map((episode) => {
        let handlePlay;
        let ref;

        if (isInPlayer(playerCon, episode)) {
          console.log("isINPLAYer! continuing audio");
          handlePlay = () => playAudio(episode);
          ref = activeEpisode;
          console.log(ref);

          playerCon.setAudio(episode.audio);
          // if(playerCon.status === 12)
          // playerCon.setStatus(2);
          playerCon.setTitle(episode.title);
        } else {
          console.log("isn'tInPlayer, starting new audio");
          handlePlay = () => load(episode, playerCon);
          ref = null;
          console.log(ref);
        }

        return (
          <EpisodeItem
            key={episode.title}
            episode={episode}
            playerState={playerCon}
            activeEpisode={ref}
            onPlayButton={handlePlay}
            onPauseButton={() => pauseAudio(episode)}
            home={!!home}
          />
        );
      });
    } else {
      list = <Spinner />;
    }
  }

  const showsLister = showList.map((show) => (
    <ShowItem key={show.show} show={show} />
  ));

  if (shows != null) {
    list = (
      <>
        <div>Podcasts</div>
        <div className="list-wrapper__shows">
          {showsLister}
        </div>
      </>
      
    );
  }

  if (shows == null && episodes == null) {
    list = (<div>Lister cannot render</div>);
  }

  return (
    <div className="list-wrapper">
      {list}
    </div>
  );
};

export default Lister;
