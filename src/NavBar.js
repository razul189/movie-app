// import React from 'react';
// import {NavLink} from "react-router-dom"


// const linkStyles = {
//   display: "inline-block",
//   width: "50px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "black",
//   textDecoration: "none",
//   color: "white",
// };

// const NavBar = () => {
//   return (
//     <div className= "navbar" >
//       <NavLink to = "/"
//       exact 
//       style={linkStyles}
//       activeStyle={{
//         background: "darkblue",
//       }}
//       >
//         Home
//       </NavLink>
//       <NavLink to = "/movies"
//       exact
//       style={linkStyles}
//       activeStyle={{
//         background: "darkblue",
//       }}
//       >
//         Movies
//       </NavLink>
//       <NavLink to = "/movies/new"
//       exact
//       style={linkStyles}
//       activeStyle={{
//         background: "darkblue",
//       }}
//       >
//         Add Movie
//       </NavLink>
//     </div>
//   )
// }

// export default NavBar

import React from 'react';
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",  // Adjusted from 50px for better spacing
  padding: "12px",
  margin: "0 12px",  // Adjusted for better spacing
  background: "#333",  // Darker background for better contrast
  textDecoration: "none",
  color: "white",
  borderRadius: "4px",  // Rounded corners
  textAlign: "center",  // Center-aligned text
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
    </div>
  );
}

export default NavBar;
