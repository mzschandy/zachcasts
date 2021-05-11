import { graphql } from "gatsby"
import React from "react"
import _ from "lodash";
import { Link } from "gatsby";

import "./shows.scss"

const ShowsLister = ({shows}) => {
  console.log("shows", shows)
  return (
    <div className="shows-lister">
      <div className="header">Shows</div>
      <div className="lister">
        {shows.map((show) => (
          <Link key={show.show} to={`/shows/${_.kebabCase(show.show)}`} className="show">
            <div className="cover"><img src={show.cover}></img></div>
            <div className="name">{show.show}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ShowsLister