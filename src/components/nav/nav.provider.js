import React, { useState } from "react";
import NavContext from "./nav.context";

export const NavProvider = ({ children }) => {
  const [background, setBackground] = useState("#fff");
  // const [isHome, setIsHome] = useState(true);

  console.log("nav background >", background);

  return (
    <NavContext.Provider value={{
      background, setBackground,
    }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
