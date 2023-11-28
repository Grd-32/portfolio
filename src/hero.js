import "./css/hero.css";
import Header from "./header";
import Footer from "./footer";
import About from "./about";
import Contacts from "./contacts";
import { Link } from "react-router-dom";
import three from "./images/19362653.jpg";
import Portfolio from "./portfolio";
export default function Hero() {
  return (
    <>
    <Header />
    <div className="hero" id="home">
         <div className="heroImage">
          <img src={three} alt="" />
        </div> 
        <div className="heroMessage">
          <h1>Hello, It's DanielF</h1>
          <p>
            I am a <span className="purple">front end developer</span>. I work to bring forth design dreams to life
          </p>
          <p>
            I also take pleasure in <span className="violet">travelling</span>, <span className="purple">photography</span>, <span className="violet">drawing</span> and <span className="purple">singing</span> in the shower but shhh!!! don't tell anyone
          </p>
          <li>
              <Link to={"/resume"}><button>My Resume</button></Link>
            </li>
        </div>
    </div>
    <About />
    <Portfolio />
    <Contacts />
    <Footer />
    </>
  );
}
