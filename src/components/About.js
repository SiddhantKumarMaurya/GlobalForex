import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-heading">Global Forex</h2>
          <p className="about-description">
            What is global forex?
          </p>
          <p className="about-description">
            The foreign exchange (forex or FX) market is a global marketplace for exchanging national currencies. Because of the worldwide reach of trade, commerce, and finance, forex markets tend to be the world's largest and most liquid asset markets. Currencies trade against each other as exchange rate pairs.
          </p>
          <a href="#contact" className="about-button">
            Get in Touch
          </a>
        </div>
        <div className="about-image">
          <img
            src="your-profile-image.jpg"
            alt="Your Image"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
