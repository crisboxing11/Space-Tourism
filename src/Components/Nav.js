import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../Style/assets/shared/logo.svg"


const Nav = () => {
return (
  <div className="container">
      <header>
          <Link to="/"><img src={logo} alt="Space Tourism" title="Space Tourism"></img>Hello</Link>
      </header>
    <div className="links">
        <div>
            <a className="nav-link" href ="#"> 00 Home</a>
        </div>
        <div>
            <a className="nav-link" href ="#"> 01 Destination</a>
        </div>
        <div>
            <a className="nav-link" href ="#"> 02 Crew</a>
        </div>
        <div>
              <a className="nav-link" href ="#"> 03 Technology</a>
        </div>
    </div>
  </div>
);
}


export default Nav;