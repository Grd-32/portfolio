import { FaBars } from "react-icons/fa";
import "./css/header.css";
import { HashLink } from "react-router-hash-link";
import { useState }  from "react";

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    setOpenMenu(openMenu)
  }

  return (
    <div className="header">
      <div className="logo">
        <h2>danielf</h2>
      </div>
      <div className="menuBar" onClick={toggleMenu}><FaBars /></div>
      
      {!openMenu && (<ul className="navbar">
        <li>
          <HashLink smooth to={"#home"}>Home</HashLink>
        </li>
        <li>
          <HashLink smooth to={"#about"}>About</HashLink>
        </li>
        <li>
          <HashLink smooth to={"#portfolio"}>Projects</HashLink>
        </li>
        <li>
          <HashLink smooth to={"#contacts"}>Contacts</HashLink>
        </li>
      </ul>)}
      
    </div>
  );
}
