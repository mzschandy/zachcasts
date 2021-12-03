/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import "./episodes.scss";
import EpisodeItem from "../episode-item/episode-item.component";

const EpisodeLister = ({ episodes }) => {
  // const player = useContext(PlayerContext);

  const getEpisodeList = () => {
    const episodeList = [];
    episodes.forEach((episode) => {
      episodeList.push({
        path: episode.node.fields.slug,
        tags: episode.node.frontmatter.tags,
        cover: episode.node.frontmatter.cover,
        title: episode.node.frontmatter.title,
        audio: episode.node.frontmatter.audioPath,
        date: episode.node.fields.date,
        description: episode.node.frontmatter.shortDescription,
        showLength: episode.node.frontmatter.showLength,
        timeToRead: episode.node.timeToRead,
      });
      // console.log(episode.node.frontmatter)
    });
    return episodeList;
  };

  const episodeList = getEpisodeList();

  return (
    <div className="w-full flex flex-col mt-2 md:mt-4">
      <div className="md:mb-4 text-sm md:text-lg font-medium">All Episodes</div>
      {
        episodeList.map((episode, index) => (
          <EpisodeItem episode={episode} index={index} />
        ))
      }
    </div>

  );
};

export default EpisodeLister;
