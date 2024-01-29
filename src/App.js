import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home,Solutions, Team ,Business,Careers,Digital,US,Blogs} from './pages'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; 
}



const App = () => {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Routes>
      <Route path="/Solutions" element={<Solutions />} />
            <Route path="/" element={<Home />}/>
             <Route path="/Solutions/empowering-careers" element={<Business />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/Solutions/digital-marketing" element={<Digital />} />
            <Route path="/Solutions/us-rcm" element={<US />} />
            {/* <Route path= "/Solutions/business-consulting" element = {<BC/>} */}
            <Route path="/Team" element={<Team />} />
            <Route path="/Blogs" element={<Blogs />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
