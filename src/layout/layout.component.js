/* eslint-disable react/jsx-filename-extension */
import React from "react";
import {Helmet} from "react-helmet"
import Navigation from "../components/nav/navigation.component"
import config from "../../data/SiteConfig"

import Container from "react-bootstrap/Container"
import Player from "../components/player/player.component";

export default function Layout({children}) {
    return (
        <div>
            <Helmet>
                <meta name="description" content={config.siteDescription} />
                <html lang="en" />
            </Helmet>
            <Navigation/>
            {children}
        </div>
    )
}
