import React from 'react';
import "./navbar.css"
const NavBar = () => {
  return (
    <nav>
      <div className="left">
        <ul>
          <li>
            <a href="/">
              <h2>Global Forex</h2>
            </a>
          </li>
        </ul>
        </div>
        <div className="right">
        <ul>
          <li>
            <a href="#home">
              <h4>
                Home
              </h4>
              </a>
          </li>
          <li>
            <a href="#about">
              <h4>
                About
              </h4>
              </a>
          </li>
          <li>
            <a href="#portfolio">
              <h4>
                Portfolio
              </h4>
            </a>
          </li>
          <li>
            <a href="#contact">
              <h4>
                Contact
              </h4>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
