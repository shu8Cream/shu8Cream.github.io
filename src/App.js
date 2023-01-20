import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './MenuBar.css';

import AboutMe from './AboutMe';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/about`} element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
