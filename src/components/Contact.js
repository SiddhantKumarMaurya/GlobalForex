import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-heading">Get in Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            Have a project in mind or just want to say hello? Feel free to
            reach out to me!
          </p>
          <div className="contact-info">
            <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
