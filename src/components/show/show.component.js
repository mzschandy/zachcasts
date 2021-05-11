import React from "react"
import HomeEpisodesLister from "../episodes-lister-home/episodes-lister-home"
import EpisodesLister from "./episodes-lister.component"
//import Logo from "../../../static/"
import ImageCover from "../../../static/logos/blades&bending_cover.png"


import "./show.scss"

const Show = ({showEdges, showName}) => {
  const showList = []
  console.log("showedges", showEdges[0].node.frontmatter.cover)

  const coverImage = `../../../static/logos/${showEdges[0].node.frontmatter.cover}`

  console.log(coverImage)
  
  showEdges.forEach((showEdge) => {
    showList.push({
      path: showEdge.node.fields.slug,
      tags: showEdge.node.frontmatter.tags,
      cover: showEdge.node.frontmatter.cover,
      title: showEdge.node.frontmatter.title,
      date: showEdge.node.frontmatter.date,
      description: showEdge.node.frontmatter.shortDescription,
      audioPath: showEdge.node.frontmatter.audioPath,
      showLength: showEdge.node.frontmatter.showLength
    })
  })

  console.log("showlist", showList)
  return (
    <div>
      <div className="show-wrapper">
      <div className="show">
        <div className="cover">
          <div className="fake-img">
            <img src={coverImage} alt="logo"></img>
          </div>
          <div className="bio">
            <div className="name">{showName}</div>
            <div className="author">by Podcast author</div>
          </div>
        </div>
        <div className="show-info">
          <div className="bio">
            <div className="name">{showName}</div>
            <div className="author">by Zach Schandorf-Lartey</div>
          </div>
          <div className="description">This is a description lots oflorem text</div>
        </div>
      </div>
    </div>
    <EpisodesLister episodes={showList} />
    </div>
  )
}

export default Show