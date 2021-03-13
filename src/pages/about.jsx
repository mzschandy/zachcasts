import React from "react";
import { Helmet } from "react-helmet";
//import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

function AboutPage() {
  return (
    <div>
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <About />
      </div>
    </div>
  );
}

export default AboutPage;
