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
    <nav id="navbar">
      <ul className="flex items-center">
        <li className="mx-2 py-5 text-gray-400 font-semibold">
          <NavLink
            to="/"
            exact
            activeClassName="text-white border-b-4 border-white pb-7"
          >
            <span>00</span> Home
          </NavLink>
        </li>
        <li className="mx-2 py-5 text-gray-400 font-semibold">
          <NavLink
            to="/destination"
            exact
            activeClassName="text-white border-b-4 border-white pb-7"
          >
            <span>01</span> Destination
          </NavLink>
        </li>
        <li className="mx-2 py-5 text-gray-400 font-semibold">
          <NavLink
            to="/crew"
            exact
            activeClassName="text-white border-b-4 border-white pb-7"
          >
            <span>02</span> Crew
          </NavLink>
        </li>
        <li className="mx-2 py-5 text-gray-400 font-semibold">
          <NavLink
            to="/technology"
            exact
            activeClassName="text-white border-b-4 border-white pb-7"
          >
            <span>03</span> Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
}


export default Nav;