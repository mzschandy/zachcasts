import React, {useState, useContext} from "react"
import NavContext from "./nav.context"

export const NavProvider = ({children}) => {
  const [background, setBackground] = useState("#fff")

  console.log("nav background >", background);

  return (
    <NavContext.Provider value={{background, setBackground}}>
      {children}
    </NavContext.Provider>
  )
}