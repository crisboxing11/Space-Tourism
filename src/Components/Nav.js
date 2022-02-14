import {NavLink} from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import logo from "../Style/assets/shared/logo.svg"


const Nav = () => {

    
return (
  <header className="header px-5 flex items-center justify-between">
    <div className="py-5">
      {" "}
         <NavLink to="/">
        <img src={logo} alt="Space Tourism" title="Space Tourism"></img>Hello
          </NavLink>
    </div>

    {/* <div className="links">
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
    </div> */}
  </header>
);
}


export default Nav;