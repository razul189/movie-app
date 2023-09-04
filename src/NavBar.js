import React from 'react';
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",  
  padding: "12px",
  margin: "0 12px",  
  background: "#333",  
  textDecoration: "none",
  color: "white",
  borderRadius: "4px", 
  textAlign: "center", 
};

const activeLinkStyles = {
  background: "darkblue",
};

const NavBar = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-around', 
      backgroundColor: '#222', 
      padding: '1em'
    }}>
      <NavLink 
        to="/" 
        exact 
        style={linkStyles} 
        activeStyle={activeLinkStyles}
      >
        Home
      </NavLink>
      <NavLink 
        to="/movies" 
        exact 
        style={linkStyles} 
        activeStyle={activeLinkStyles}
      >
        Movies
      </NavLink>
      <NavLink 
        to="/movies/new" 
        exact 
        style={linkStyles} 
        activeStyle={activeLinkStyles}
      >
        Add Movie
      </NavLink>
      <NavLink 
        to="/about" 
        exact 
        style={linkStyles} 
        activeStyle={activeLinkStyles}
      >
        About
      </NavLink>
    </div>
  );
}

export default NavBar;
