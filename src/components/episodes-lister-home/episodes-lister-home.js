import React from "react"

import "./episodes.scss"

const HomeEpisodesLister = ({episodes}) => {
  const getEpisodeList = () => {
    const episodeList = []
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
        })
    //console.log(episode.node.frontmatter)
    })
    return episodeList
  }

  const episodeList = getEpisodeList()
  return (
    <div className="episodes-wrapper home">
      <div className="header">Recent Episdes</div>
      <div className="lister">
        {episodeList.map((episode, index) => (
          <div className="episode">
          <div className="cover"><img src={episode.cover} alt="Podcast cover" ></img></div>
          <div className="episode-info">
            <div className="release-info">
              <div className="date">{episode.date}</div>
              <div className="time">{episode.showLength}</div>
            </div>
            <div className="title">{episode.title}</div>
            <div className="description">{episode.exerpt}</div>
            <div className="show-name">{episode.show}</div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default HomeEpisodesLister