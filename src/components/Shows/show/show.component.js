import React from "react";
// import HomeEpisodesLister from "../episodes-lister-home/episodes-lister-home";
// import Logo from "../../../static/"
// import ImageCover from "../../../static/logos/blades&bending_cover.png";
// import ColorThief from "../../../node_modules/colorthief/dist/color-thief";

import "./show.scss";
import EpisodeItem from "../../Episodes/episode-item/episode-item.component";

// const Loading = () => <div>Loading...</div>;
const Show = ({ showEdges, showName }) => {
  const showList = [];
  console.log("showedges", showEdges[0].node.frontmatter.cover);

  const coverImage = `${showEdges[0].node.frontmatter.cover}`;
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";

  console.log(coverImage);

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
  const img = document.getElementById("showLogo");
  console.log("image source", img);
  // img.setAttribute('crossOrigin', '');

  console.log("showlist", showList);
  console.log("showlist 1", showList[0]);
  return (
    <div className="flex flex-row mt-4">
      <div className="flex flex-col" style={{ flex: "40%" }}>
        <div className="mt-4">
          <img id="showLogo" className="w-4/5 rounded-sm" src={imgPath + coverImage} alt="logo" />
        </div>
        <div className="mt-4">
          <div className="text-xl font-semibold">{showName}</div>
          <div className="">by Zach Schandorf-Lartey</div>
        </div>
        <div className="mt-4 w-4/5">{showList[0].showDescription}</div>
      </div>
      <div className="mt-4" style={{ flex: "60%" }}>
        <div className="mb-4">All Episodes</div>
        {showList.map((episode) => (
          <EpisodeItem episode={episode} />
        ))}
      </div>

    </div>
  );
};

export default Show;
