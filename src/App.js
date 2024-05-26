import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Photography from './pages/Photography';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about/' element={<About />} />
        <Route path='/about/:photography/' element={<Photography />} />
        <Route path='/projects/' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
