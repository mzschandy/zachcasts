import React from "react";
import { Link } from "gatsby";
import _ from 'lodash';

const ShowItem = ({show}) => {
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/";
  return (
    <Link
      className="show-item__wrapper"
      key={show.show}
      to={`/shows/${_.kebabCase(show.show)}`}
    >
      <div className="show-item__inner">
        <div className="show-item__image">
          <img src={imgPath + show.cover} alt="podcast cover" />
        </div>
        <div className="show-item__name">{show.show}</div>
      </div>
    </Link>
  )
}

export default ShowItem;