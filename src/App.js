// Import external components to application.js

import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./about"
import Contacts from "./contacts"
import Hero from "./hero"
import Portfolio from "./portfolio"
import Resume from "./resume";

export default function App() {
  return (
    // Adding my functional componets to app js for rendering
      <Router>
        <Routes>
          <Route path="/" element={< Hero/>}/>
          <Route path="/about" element={< About/>}/>
          <Route path="/projects" element={<Portfolio />} />
          {/* <Route path="/resume" element={< Resume/>}/> */}
          <Route path="/contacts" element={< Contacts/>} />
          <Route path="/resume" element={< Resume/>} />
        </Routes>
      </Router>
  )
}