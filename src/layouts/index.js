/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/layout/nav/navigation.component";
import config from "../../data/SiteConfig";

import Player from "../components/player/player.component";
import { PlayerProvider } from "../providers/player.provider";
import AudioElementProvider from "../providers/audio-element.provider";
import { AppStateProvider } from "../providers/app-state.provider";
// import MenuBar from "../components/menu-bar/menu-bar.component";

import "./layout.scss";

export default ({ children }) => (
  <AudioElementProvider>
    <AppStateProvider>
      <PlayerProvider>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Helmet>
        <Navigation />
        <div className="main-wrapper">
          {children}
        </div>
        <Player />
      </PlayerProvider>
    </AppStateProvider>
  </AudioElementProvider>
);
