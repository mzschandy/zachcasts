import React from "react";

// import MenuBarContext from "./menu-bar.context";

import "./menu-bar.scss";

const MenuBar = () => (
  <div className="menu-bar">
    <div className="inner">
      <a href="/" className="one-half">
        <div className="action">
          <i className="fa fa-home" />
          <div>Home</div>
        </div>
      </a>
      <a href="/about" className="one-half">
        <div className="action">
          <i className="fa fa-gear" />
          <div>Settings</div>
        </div>
      </a>
    </div>
  </div>
);

export default MenuBar;
