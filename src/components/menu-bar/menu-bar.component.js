import React from "react"
import { useContext } from "react"
import MenuBarContext from "./menu-bar.context"

import "./menu-bar.scss"

const MenuBar = () => {
  const active = useContext(MenuBarContext)
  return (
    <div className={`menu-bar ${active.active}`}>
      <div className="inner">
        <a href="/" className="one-half">
          <div className="action home">
            <i class="fa fa-home"></i>
            <div>Home</div>
          </div>
        </a>
        <a href="/about" className="one-half">
          <div className="action settings">
            <i class="fa fa-gear"></i>
            <div>Settings</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default MenuBar