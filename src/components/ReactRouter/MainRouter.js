import React from 'react'

import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from './Pages/NotFound';


const MainRouter = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Home</Link>
        </li>

      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
        
    </div>
  )
}

export default MainRouter