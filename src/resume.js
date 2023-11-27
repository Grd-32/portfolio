import { Link } from "react-router-dom";
import "./css/resume.css";
import Header from "./header";
import Footer from "./footer";

export default function Resume () {
    return (
        <div className="res-home">
        <Header />
        <div className="resume">
            <h1>My Resume</h1>
        <div className=" resume-card intro">
            <p>I have worked as a software engineer developer for the past three years. During this time I have had the opportunity to gain experience in the field and the chance to explore my skills and creativity. As a result, I have realized that I truly enjoy this career because it allows for endless creativity. I am eager to continue growing professionally and hope to one day open my own Web Development firm. However, I think I still have a lot to learn before embarking on that adventure!</p>
        </div>
        <div className="resume-card education">
            <h1>Education</h1>
            <div className="card-Container">
            <div className="university">
                <h3>Mount Kenya University</h3>
                <h5>from september 2020 - current</h5>
                <p>I have been persuing Bachelo's of Science in Information Technology</p>
            </div>
            <div className="online-one">
                <h3>Pirple.com</h3>
                <h5>from september 2021 - December 2021</h5>
                <p>Certified White Hat Ethical Hacker</p>
            </div>
            <div className="online-two">
                <h3>Udemy</h3>
                <h5>from september 2022 - December 2022</h5>
                <p>Front End Developer - React Js, Redux and Redux Toolkit </p>
            </div>
            </div>
        </div>
        <div className="resume-card work">
            <h1>Work Expeirience</h1>
            <div className="card-Container">
            <div className="work">
                <h3>Freelancer.com</h3>
                <h5>Front End Developer</h5>
                <ul>
                    <li>Collaborated with UI/UX designers to bring forth a good user experience</li>
                    <li>Worked with modern technologies to keep the companies' products up to date</li>
                    <li>Used various APIs for data fetching and other auxilliary uses</li>
                    <li>Continuously maintained code and made adjustment wherever  possible to stay up to date </li>
                </ul>
            </div>
            <div className="work">
                <h3>Steja Communication</h3>
                <h5>Software Developer</h5>
                <ul>
                    <li>Designed and implemented a point of sale system</li>
                    <li>tested and launched the product and ensured its functionality</li>
                    <li>Used modern software development technique to bring forth good user experience</li>
                    <li>Use mobile-first technique and other SEO techniques for better optimization</li>
                    <li>Collaborated with the client to produce what they desired and also advice them on best practices</li>
                </ul>
            </div>
            <div className="work">
                <h3>Google Developer Student Club | Mount Kenya University</h3>
                <h5>Vice Lead</h5>
                <ul>
                    <li>Taught club members web development approach and programming.</li>
                    <li>Shared knowledge on programming languages such as Javascript and React JS as a framework.</li>
                    <li>Advised on how to proceed career wise and grow in the tech industry</li>
                    <li>Provided insights on group projects and coordinated them</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="resume-card skills">
            <h1>Skill Sets</h1>
            <div className="card-Container">
            <div className="tech-skills">
                <h3>Technical skills</h3>
                <ul>
                    <li>Javascript</li>
                    <li>REST</li>
                    <li>GIT</li>
                    <li>APIS</li>
                    <li>Html5/Css</li>
                    <li>Agile</li>
                    <li>Microsoft Office</li>
                    <li>Software DEvelopment</li>
                </ul>
            </div>
            <div className="nonTech-skills">
                <h3>Non-technical skills</h3>
                <ul>
                    <li>Communication skills</li>
                    <li>Ability to work under pressure</li>
                    <li>Ability to work with a team</li>
                    <li>Hard working</li>
                    <li>Disciplined</li>
                    <li>Punctual</li>
                    <li>Ability to work without supervision</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="resume-card certs">
            <h1>Achievements and Certifications</h1>
            <ul>
                <li>Vice Lead | Google DEveloper Student Club</li>
                <li>Certified White Hat Ethical Hacker | Pirple.com</li>
                <li>Front End Developer | Udemy</li>
            </ul>
        </div>
        <div className="resume-card links">
            <h1>Links</h1>
            <ul>
                <li>
                    <Link to={"https://github.com/GRD-32"}>Github</Link>
                </li>
                <li>
                    <Link to={"https://linkedin.com/com/daniel-fundi/"}>Linkedin</Link>
                </li>
                <li>
                    <Link to={"https://danf.io"}>My website</Link>
                </li>
            </ul>
        </div>
        </div>
        <Footer />
        </div>
    )
}