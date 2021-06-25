/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from "react"
import Container from "react-bootstrap/Container"
import Nav from 'react-bootstrap/Nav'
import {Link} from 'gatsby'
import Logo from "../../../static/logos/pulse.png"
import NavContext from "./nav.context"

import "./navigation.scss"

export default function Navigation() {
    const background = useContext(NavContext)
    const bg = "#fff"
    console.log("background context > ",background)
    return (
        <div id="navigation" style={{backgroundColor: background.background}}>
            <div className="inner">
                <div className="logo">
                    {/*<img src={Logo} alt="logo"/>*/}
                </div>
                <Nav>
                    <div>
                        <Link to="/" className="site-title">Zachcasts</Link>beta
                    </div>
                </Nav>
            </div>
        </div>
    )
}