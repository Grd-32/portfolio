import { FaBars } from "react-icons/fa";
import "./css/header.css";
import { Link } from "react-router-dom";
import { useState }  from "react";

export default function Header() {

  const [openMenu, setOpenMenu] = useState(true)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className="header">
      <div className="logo">
        <h2>danielf</h2>
      </div>
      <div className="menuBar" onClick={toggleMenu}><FaBars /></div>
      
      {openMenu && (<ul className="navbar">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link to={"/contacts"}>Contacts</Link>
        </li>
      </ul>)}
      
    </div>
  );
}
