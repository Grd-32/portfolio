import "./css/portfolio.css"
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
        <div className="portfolio-section" id="portfolio">
            <h1>My projects</h1>
            <ul className="portfolio">{myPortfolio}</ul>
        </div>
        </>
    )
}