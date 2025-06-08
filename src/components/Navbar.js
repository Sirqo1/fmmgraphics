import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          FMM Graphics
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-link">
            Головна
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
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
