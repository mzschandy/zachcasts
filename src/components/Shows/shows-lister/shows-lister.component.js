import { Link } from "gatsby";
import React from "react";
import _ from "lodash";

import "./shows.scss";

const ShowsLister = ({ shows }) => {
  console.log("shows", shows);
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";

  return (
    <div className="flex flex-col sm:mt-2 md:mt-4 bg-white border border-gray-300 rounded-md p-3">
      <div className="sm:mb-2 md:mb-4 md:text-lg font-medium sm:text-sm">Shows</div>
      <div className="grid grid-cols-5">
        {shows.map((show) => (
          <Link key={show.show} to={`/shows/${_.kebabCase(show.show)}`} className="flex flex-col w-20 md:w-36">
            <div className="cover"><img className="rounded-md" src={imgPath + show.cover} alt="cover" /></div>
            <div className="text-center md:text-base hidden md:block">{show.show}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowsLister;
