/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'gatsby';
// import Logo from "../../../static/logos/pulse.png";

import './navigation.scss';

export default function Navigation() {
  return (
    <>
      <Nav>
        <div>
          <Link to="/" className="site-title">Zachcasts</Link>
          beta
        </div>
      </Nav>
    </>
  );
}
