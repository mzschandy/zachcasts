/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Link } from 'gatsby';
// import Logo from "../../../static/logos/pulse.png";

export default function Navigation() {
  return (
    <>
      <div className="h-14 border-b-2 border-gray-300 w-full fixed top-0 left-0 bg-white z-50">
        <div className="contain flex self-center">
          <Link className="text-lg font-bold" to="/">Zachcasts</Link>
        </div>
      </div>
    </>
  );
}
