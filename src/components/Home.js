import React from 'react';
import './Home.css'; // Import the CSS file for styling
import GlobalForex from "./GlobalForex.png"

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-heading">Welcome to Global Forex</h1>
          <p className="home-description">
          "Unlock the World's Wealth: Exchange Anytime, Anywhere!"
          </p>
        </div>
        <div className="home-image">
          <img
            src={GlobalForex}
            alt="Hero Image"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
