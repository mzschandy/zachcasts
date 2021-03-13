/* eslint-disable react/jsx-filename-extension */
import React from "react";
import {Helmet} from "react-helmet"
import Navigation from "../components/nav/navigation.component"
import config from "../../data/SiteConfig"

import Container from "react-bootstrap/Container"
import Player from "../components/player/player.component";
import {PlayerProvider} from "../components/player/player.provider" 

export default ({children}) => {
    return (
        <PlayerProvider>
            <Helmet>
                <meta name="description" content={config.siteDescription} />
                <html lang="en" />
            </Helmet>
            <Navigation/>
            {children}
            <Player />
        </PlayerProvider>
    )
}
