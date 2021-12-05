import React from "react";
// import HomeEpisodesLister from "../episodes-lister-home/episodes-lister-home";
// import Logo from "../../../static/"
// import ImageCover from "../../../static/logos/blades&bending_cover.png";
// import ColorThief from "../../../node_modules/colorthief/dist/color-thief";
// import NavContext from "../nav/nav.context";

import "./show.scss";
import EpisodeItem from "../../Episodes/episode-item/episode-item.component";

// const Loading = () => <div>Loading...</div>;
const Show = ({ showEdges, showName }) => {
  const showList = [];
  console.log("show edges >", showEdges[0].node.frontmatter.cover);

  const coverImage = `${showEdges[0].node.frontmatter.cover}`;
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";
  const imgPath2 = "https://zachcasts.s3.us-east-2.amazonaws.com/";
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
  const img = document.getElementById('showLogo');
  console.log("image source >", img);
  // img.setAttribute('crossOrigin', '');

  console.log("showlist", showList);
  console.log("showlist 1", showList[0]);
  return (
    <div className="flex flex-col md:flex-row mt-4 relative">
      <div className="md:fixed md:w-1/4 flex flex-col left-col">
        <div className="flex flex-row mb-2 md:block md:mb-0">
          <div className="md:mt-4 w-1/4 md:w-auto">
            <img id="showLogo" className="md:w-4/5 rounded-md" src={imgPath + coverImage} alt="logo" />
          </div>
          <div className="md:mt-4 title-container">
            <div className="md:text-xl font-semibold">{showName}</div>
            <div className="text-gray-400">by Zach Schandorf-Lartey</div>
          </div>
        </div>
        <div className="md:mt-4 md:w-4/5 text-sm md:text-base text-gray-600">{showList[0].showDescription}</div>
      </div>
      <div className="mt-4 right-col md:absolute md:right-0 md:w-3/5 lister">
        <div className="md:mb-4 text-sm md:text-lg font-medium ">All Episodes</div>
        {showList.map((episode) => (
          <EpisodeItem className="item" episode={episode} />
        ))}
      </div>

    </div>
  );
};

export default Show;
