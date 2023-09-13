import React, { useState, useEffect } from 'react';
import GlobalForex from "./GlobalForex.png"
import './navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const checkWindowWidth = () => {
      // Adjust the breakpoint as needed
      setMenuOpen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', checkWindowWidth);
    checkWindowWidth();

    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  return (
    <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <div className="left-section">
          <h1 className="logo">
            <a className="logo-link" href="/">
              <img
                src={GlobalForex}
                alt="Hero Image"
                className="hero-image"
              />
              </a>
          </h1>
          <h1 className="navbar-title">
            <a className="logo-link" href="/">Global Forex</a>
          </h1>
        </div>
        <div className="right-section">
            <div className={`menu-button ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <li>
                <a href="#home" onClick={handleMenuItemClick}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={handleMenuItemClick}>About</a>
              </li>
              <li>
                <a href="#portfolio" onClick={handleMenuItemClick}>Portfolio</a>
              </li>
              <li>
                <a href="#contact" onClick={handleMenuItemClick}>Contact</a>
              </li>
            </ul>  
        </div> 
      </div>
    </nav>
  );
}

export default Navbar;
