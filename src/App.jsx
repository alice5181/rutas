// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Contacto from './components/Contacto';
import Beer from './components/Beer';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/beer/:id" element={<Beer />} />
      </Routes>
    </Router>
  );
}

export default App;

