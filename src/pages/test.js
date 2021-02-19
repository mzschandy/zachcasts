/* eslint-disable react/jsx-filename-extension */


import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

function testPage() {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div>Test</div>
        <AudioPlayer onPlay={e => console.log("onplay!")}/>
      </div>
    </Layout>
  );
}

export default testPage;
