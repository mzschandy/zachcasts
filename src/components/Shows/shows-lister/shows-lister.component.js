import { Link } from "gatsby";
import React from "react";
import _ from "lodash";

import "./shows.scss";

const ShowsLister = ({ shows }) => {
  console.log("shows", shows);
  // const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";

  return (
    <div className="">
      <div className="">Shows</div>
      <div className="">
        {shows.map((show) => (
          <Link key={show.show} to={`/shows/${_.kebabCase(show.show)}`} className="">
            {/* <div className="">
            <img className="" src={imgPath + show.cover} alt="cover" /></div> */}
            <div className="">{show.show}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowsLister;
