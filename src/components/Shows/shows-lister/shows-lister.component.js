import { Link } from "gatsby";
import React from "react";
import _ from "lodash";

import "./shows.scss";

const ShowsLister = ({ shows }) => {
  console.log("shows", shows);
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";

  return (
    <div className="flex flex-col mt-4">
      <div className="mb-4 text-xl">Shows</div>
      <div className="grid grid-cols-5">
        {shows.map((show) => (
          <Link key={show.show} to={`/shows/${_.kebabCase(show.show)}`} className="flex flex-col w-36">
            <div className="cover"><img className="rounded-sm" src={imgPath + show.cover} alt="cover" /></div>
            <div className="text-center text-sm">{show.show}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowsLister;
