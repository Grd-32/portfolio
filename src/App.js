// Import external components to application.js

import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from "./hero"
import Resume from "./resume";

export default function App() {
  return (
    // Adding my functional componets to app js for rendering
      <Router>
        <Routes>
          <Route path="/" element={< Hero/>}/>
          <Route path="/resume" element={< Resume/>} />
        </Routes>
      </Router>
  )
}