import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          FMM Graphics
        </Link>
        <div className={isOpen ? "nav-menu active" : "nav-menu"}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Головна
          </Link>
          <Link to="/tactics" className="nav-link" onClick={() => setIsOpen(false)}>
            Тактики
          </Link>
          <Link to="/players" className="nav-link" onClick={() => setIsOpen(false)}>
            Гравці
          </Link>
          <Link to="/news" className="nav-link" onClick={() => setIsOpen(false)}>
            Новини
          </Link>
        </div>
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
