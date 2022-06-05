import React from "react";
// import HomeEpisodesLister from "../episodes-lister-home/episodes-lister-home";
// import Logo from "../../../static/"
// import ImageCover from "../../../static/logos/blades&bending_cover.png";
// import ColorThief from "../../../node_modules/colorthief/dist/color-thief";
// import NavContext from "../nav/nav.context";

import "./show.scss";
import EpisodeItem from "../../episodes/episode-item/episode-item.component";

// const Loading = () => <div>Loading...</div>;
const Show = ({ showEdges, showName }) => {
  const showList = [];
  console.log("show edges >", showEdges[0].node.frontmatter.cover);

  const coverImage = `${showEdges[0].node.frontmatter.cover}`;
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";
  // const imgPath2 = "https://zachcasts.s3.us-east-2.amazonaws.com/";
  console.log("show cover >", coverImage);

  showEdges.forEach((showEdge) => {
    showList.push({
      path: showEdge.node.fields.slug,
      tags: showEdge.node.frontmatter.tags,
      cover: showEdge.node.frontmatter.cover,
      title: showEdge.node.frontmatter.title,
      date: showEdge.node.frontmatter.date,
      description: showEdge.node.frontmatter.shortDescription,
      showDescription: showEdge.node.frontmatter.showDescription,
      audio: showEdge.node.frontmatter.audioPath,
      showLength: showEdge.node.frontmatter.showLength,
    });
  });

  // const colorThief = new ColorThief();
  // img.setAttribute('crossOrigin', '');

  console.log("showlist", showList);
  console.log("showlist 1", showList[0]);
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <img id="showLogo" className="" src={imgPath + coverImage} alt="logo" />
          </div>
          <div className="">
            <div className="">{showName}</div>
            <div className="">by Zach Schandorf-Lartey</div>
          </div>
        </div>
        <div className="">{showList[0].showDescription}</div>
      </div>
      <div className="">
        <div className=" ">All Episodes</div>
        {showList.map((episode) => (
          <EpisodeItem className="" episode={episode} />
        ))}
      </div>

    </div>
  );
};

export default Show;
