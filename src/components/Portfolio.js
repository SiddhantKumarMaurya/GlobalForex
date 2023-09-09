import React from 'react';
import './Portfolio.css'; // Import the CSS file for styling

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="portfolio-heading">Our Portfolio</h2>
        <div className="portfolio-items">
          {/* Individual portfolio items go here */}
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img
                src="project-image-1.jpg"
                alt="Project 1"
                className="portfolio-image"
              />
            </div>
            <div className="portfolio-details">
              <h3 className="portfolio-title">Project 1</h3>
              <p className="portfolio-description">
                A stunning project that showcases my skills and creativity.
              </p>
              <a
                href="#"
                className="portfolio-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-image">
              <img
                src="project-image-2.jpg"
                alt="Project 2"
                className="portfolio-image"
              />
            </div>
            <div className="portfolio-details">
              <h3 className="portfolio-title">Project 2</h3>
              <p className="portfolio-description">
                Another amazing project that highlights my expertise.
              </p>
              <a
                href="#"
                className="portfolio-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Add more portfolio items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
