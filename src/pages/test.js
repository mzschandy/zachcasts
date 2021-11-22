/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Helmet } from "react-helmet";
// import Layout from "../layout";
// import About from "../components/About/About";
// import config from "../../data/SiteConfig";
import AudioPlayer from "react-h5-audio-player";
import ShowsLister from "../components/shows-lister/shows-lister.component";

import "react-h5-audio-player/lib/styles.css";
// import Audio from "../../static/audio/"

import "./test.scss";
import HomeEpisodesLister from "../components/episodes-lister-home/episodes-lister-home";
import MenuBar from "../components/menu-bar/menu-bar.component";
import Show from "../components/show/show.component";

function testPage() {
  const audio = "/audio/Wire.mp3";
  // const audio2 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  return (
    <div>
      <div className="wrapper">
        <Helmet>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Helmet>
        <div>Test</div>
        <AudioPlayer src={audio} onPlay={() => console.log("onplay!")} />
        <ShowsLister />
        <HomeEpisodesLister />
        <MenuBar />
      </div>
      <Show />
    </div>
  );
}

export default testPage;
