import React from 'react';
import ReactDom from "react-dom"
import {NavLink} from "react-router-dom"


const NavBar = () => {
  return (
    <div className= "navbar" >
      <NavLink to = "/"
      exact 
      >
        Home
      </NavLink>
      <NavLink to = "/movies"
      exact
      >
        Movies
      </NavLink>
    </div>
  )
}

export default NavBar