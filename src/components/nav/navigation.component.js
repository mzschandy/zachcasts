/* eslint-disable react/jsx-filename-extension */
import React from "react"
import Container from "react-bootstrap/Container"
import Nav from 'react-bootstrap/Nav'
import {Link} from 'gatsby'
import Logo from "../../../static/logos/pulse.png"

import "./navigation.scss"

export default function Navigation() {
    return (
        <div id="navigation">
            <Container className="inner">
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <Nav>
                    <div>
                        <Link href="/" class="site-title">Frequency</Link>beta
                    </div>
                </Nav>
            </Container>
        </div>
    )
}