import React, { useContext } from "react";
import Color from "color-thief-react";
import analyze from "rgbaster";
// import HomeEpisodesLister from "../episodes-lister-home/episodes-lister-home";
import EpisodesLister from "./episodes-lister.component";
// import Logo from "../../../static/"
// import ImageCover from "../../../static/logos/blades&bending_cover.png";
// import ColorThief from "../../../node_modules/colorthief/dist/color-thief";
import NavContext from "../nav/nav.context";

import "./show.scss";

const Loading = () => <div>Loading...</div>;
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
      audioPath: showEdge.node.frontmatter.audioPath,
      showLength: showEdge.node.frontmatter.showLength,
    });
  });

  // const colorThief = new ColorThief();
  const img = document.getElementById('showLogo');
  console.log("image source >", img);
  // img.setAttribute('crossOrigin', '');

  console.log("show list >", showList);

  const result = analyze(imgPath2 + coverImage);
  // console.log(`The dominant color is ${result[0].color} with ${result[0].count} occurrence(s)`)
  // => The  dominant color is rgb(0,0,255) with 2 occurrence(s)
  console.log("result", result);
  // console.log(`The secondary color is ${result[1].color} with ${result[1].count} occurrence(s)`)

  const background = useContext(NavContext);
  return (
    <div>
      <Color src={imgPath + coverImage} crossOrigin="anonymous" format="hex">
        {({ data, loading }) => {
          if (loading) return <Loading />;
          return (
            <div className="show-wrapper" style={{ backgroundColor: data }}>
              {background.setBackground(data)}
              {/* background.setIsHome(false) */}
              {console.log("Color data >", data)}
              {console.log("img source > ", img)}
              <div className="show">
                <div className="cover">
                  <div className="fake-img">
                    <img id="showLogo" src={imgPath + coverImage} alt="logo" />
                  </div>
                  <div className="bio">
                    <div className="name">{showName}</div>
                    <div className="author">by Zach Schandorf-Lartey</div>
                  </div>
                </div>
                <div className="show-info">
                  <div className="bio">
                    <div className="name">{showName}</div>
                    <div className="author">by Zach Schandorf-Lartey</div>

                  </div>
                  <div className="description">This is a description lots of lorem text</div>
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
