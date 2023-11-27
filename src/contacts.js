import "./css/contacts.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Header from "./header";
import Footer from "./footer";

export default function Contacts() {
  return (
    <>
    <Header />
    <div className="contacts">
      <div className="review">
        <form>
          <h1>Feel free to reach out</h1>
        <label for="email">
            Email: 
            <input className="email-input" type="email" name="email" id="email" />
          </label>
          <label for="review">
            Any review is much appreciated
            <input type="text" name="text" id="review" />
          </label>
          <button>send</button>
        </form>
      </div>
      <div className="social-holder">
        <h4>Or you could reach me directly</h4>
        <div className="social-links">
          <p>
              <FaEnvelope />
          </p>
          <p>
              <FaLinkedin />
          </p>
          <p>
              <FaTwitter />
          </p>
          <p>
              <FaGithub />
          </p>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  );
}
