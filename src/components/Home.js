import React from 'react';
import './Home.css'; // Import the CSS file for styling
import GlobalForex from "./GlobalForex.png"

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-heading">Welcome to Our Portfolio</h1>
          <p className="home-description">
            Explore Our work, skills, and experiences. Feel free to reach out if
            you have any questions.
          </p>
          <a href="#portfolio" className="home-button">
            View Portfolio
          </a>
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
