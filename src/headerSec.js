import { FaArrowLeft } from "react-icons/fa";
import "./css/header.css";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div className="header">
      <div className="logo">
        <h2>danielf</h2>
      </div>
      <div className="menuBar" >
        <li>
            <Link to={"/"}><FaArrowLeft /></Link>
        </li>
        </div>
      
      
    </div>
  );
}
