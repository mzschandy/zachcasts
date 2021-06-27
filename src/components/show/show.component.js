import React from "react"
import HomeEpisodesLister from "../episodes-lister-home/episodes-lister-home"
import EpisodesLister from "./episodes-lister.component"
//import Logo from "../../../static/"
import ImageCover from "../../../static/logos/blades&bending_cover.png"
import ColorThief from "../../../node_modules/colorthief/dist/color-thief"
import Color from "color-thief-react";

import "./show.scss";

const Loading = () => <div>Loading...</div>;
const Show = ({showEdges, showName}) => {
  const showList = []
  console.log("showedges", showEdges[0].node.frontmatter.cover)

  const coverImage = `${showEdges[0].node.frontmatter.cover}`
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/"

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
      showLength: showEdge.node.frontmatter.showLength,
    });
  });

  //const colorThief = new ColorThief();
  const img = document.getElementById("showLogo");
  console.log("image source", img)
  //img.setAttribute('crossOrigin', '');

  console.log("showlist", showList)
  return (
    <div>
      <Color src="https://s3.us-east-2.amazonaws.com/zachcasts/blades%26bending_cover.png" crossOrigin="anonymous" format="hex">
      {({ data, loading }) => {
          if (loading) return <Loading />;
          return (
            <div className="show-wrapper" style={{backgroundColor: data}}>
      <div className="show">
        <div className="cover">
          <div className="fake-img">
            <img id="showLogo" src={imgPath+coverImage} alt="logo"></img>
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
          );
        }}

      </Color>

      <EpisodesLister episodes={showList} />
    </div>
  );
};

export default Show;
