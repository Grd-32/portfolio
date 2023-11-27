import "./css/about.css";
import one from "./images/one.jpg";
import two from "./images/api.jpg";
import Header from "./header";
import Footer from "./footer";

export default function About() {
  return (
    <>
    <Header />
    <div className="about">
      <div className="about-image">
        <img className="frontend" src={one} alt="front-end" />
        <img className="backend" src={two} alt="back-end" />
      </div>
      <div className="about-info">
        <h1>About me</h1>
        <p>
          I am a passionate software engineer who dreams and make realisations
          of the dreams but also bring those of clients to life. I like trying
          out new things and always ready to learn
        </p>
        <p>
          I focus more on front end development with technologies like{" "}
          <span className="violet">Html/css</span>,{" "}
          <span className="purple">Javascript</span>,{" "}
          <span className="violet">Typescript</span>,{" "}
          <span className="purple">React</span>,{" "}
          <span className="violet">Redux</span>.
        </p>
        <p>
          But my passion for creation also leads me to working in back ends just
          to bring out a self sustaining production. Here i use{" "}
          <span className="violet">Node</span>,{" "}
          <span className="purple">Express</span>,{" "}
          <span className="violet">PHP</span> sometimes and{" "}
          <span className="violet">MongoDB</span>
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}
