import React, { useState } from "react";
import MenuBarContext from "./menu-bar.context";

export const MenuBarProvider = ({ children }) => {
  const [active, setActive] = useState();

  return (
    <MenuBarContext.Provider value={{ active, setActive }}>
      {children}
    </MenuBarContext.Provider>
  );
};

export default MenuBarProvider;
