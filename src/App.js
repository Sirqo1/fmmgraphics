import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tactics from './pages/Tactics';
import Players from './pages/Players';
import News from './pages/News';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tactics" element={<Tactics />} />
          <Route path="/players" element={<Players />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
