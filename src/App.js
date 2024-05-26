import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Photography from './pages/Photography';

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about/' element={<About />} />
        <Route path='/about/:photography/' element={<Photography />} />
        <Route path='/projects/' element={<Portfolio />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
