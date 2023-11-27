import "./css/portfolio.css"
import Footer from "./footer"
import Header from "./header"
import {portfolio} from "./portcontent"

export default function Portfolio () {
    const myPortfolio = portfolio.map((port) => 
        <li className="portContainer">
            <div className="portMessage">
                <h3>{port.title}</h3>
            <p>{port.message}</p>
            </div>
            
            <div className="portImage">
                <img src={port.portImage} alt=""/>  
            </div>
            <button>{port.portButton}</button>
        </li>
    )

    return (
        <>
        <Header />
        <div className="portfolio-section">
            <h1>My projects</h1>
            <ul className="portfolio">{myPortfolio}</ul>
        </div>
        <Footer />
        </>
    )
}