/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/nav/navigation.component";
import config from "../../data/SiteConfig";

import Player from "../components/player/player.component";
import { PlayerProvider } from "../components/player/player.provider";
import MenuBar from "../components/menu-bar/menu-bar.component";

export default ({ children }) => (
  <PlayerProvider>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <html lang="en" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Helmet>
    <Navigation />
    {children}
    <MenuBar />
    <Player />
  </PlayerProvider>
);
