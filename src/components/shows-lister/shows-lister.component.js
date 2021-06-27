import { Link } from "gatsby";
import React from "react";
import _ from "lodash";

import "./shows.scss";

const ShowsLister = ({ shows }) => {
  console.log("shows", shows);
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";

  return (
    <div className="shows-lister">
      <div className="header">Shows</div>
      <div className="lister">
        {shows.map((show) => (
          <Link key={show.show} to={`/shows/${_.kebabCase(show.show)}`} className="show-lister-item">
            <div className="cover"><img src={imgPath + show.cover} alt="cover" /></div>
            <div className="name">{show.show}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowsLister;
