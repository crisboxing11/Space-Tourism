import React, {useState} from 'react';
import Link from "./Link";
import logo from "../starter-code/assets/shared/logo.svg"


const Nav = () => {
return (
  <div className="container">
      <header>
          <Link to="/"><img src={logo} alt="Space Tourism" title="Space Tourism"></img></Link>
      </header>
    <div className="links">
        
      <a className="nav-link" href ="#"> 00 Home</a>
      <a className="nav-link" href ="#"> 01 Destination</a>
      <a className="nav-link" href ="#"> 02 Crew</a>
      <a className="nav-link" href ="#"> 03 Technology</a>
    </div>
  </div>
);
}


export default Nav;