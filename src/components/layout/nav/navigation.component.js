/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Link } from 'gatsby';
import ThemeToggle from "./theme-toggle/theme-toggle.component";
// import Logo from "../../../static/logos/pulse.png";

export default function Navigation() {
  return (
    <>
      <div className="navigation-outer-wrapper">
        <div className="navigation-inner">
          <Link className="text-lg font-bold" to="/">Zachcasts</Link>
          <div className="navigation-button-wrapper">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
