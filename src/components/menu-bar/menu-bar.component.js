import React from "react"

import "./menu-bar.scss"

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="inner">
        <a href="/" className="one-half">
          <div className="action">
            <i class="fa fa-home"></i>
            <div>Home</div>
          </div>
        </a>
        <a href="/about" className="one-half">
          <div className="action">
            <i class="fa fa-gear"></i>
            <div>Home</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default MenuBar