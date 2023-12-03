import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from '../pages/Portfolio/Portfolio';
import Landing from "../pages/Landing/"

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/' element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default Routers;
