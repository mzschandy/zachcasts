import React, {
  useContext, useEffect, useRef, useState,
} from "react";

const PlayButton = (props) => (
  <>
    <i
      id={episode.title}
      onClick={() => props.setPlayer(props.episode.audio, 
        props.episode.title, props.imgPath + props.episode.cover)}
      className={`fa fa-${icon}-circle-o`}
      ref={iconRef}
    />
  </>
);
