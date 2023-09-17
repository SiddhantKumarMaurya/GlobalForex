import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2 className="footer-heading">
              <img src="./images/GlobalForex.png" alt="Global Forex" className="footer-image"/></h2>
            <p className="footer-description">
              Exchange foreign money with us.
            </p>
          </div>
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li>
                <a href="#home">Home</a>
              </li>
              
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3 className="footer-heading">Our Contact</h3>
            <address className="footer-address">
              <p>Address: Desighnarch E Home Shop No. GF OIV , Opposit Zeta 1, Surajpur Sitr-C , Greater Noida -201308</p>
              <p>Email: globalforex2023@gmail.com</p>
              <p>Phone: 7982911121 , 9667460610</p>
            </address>
          </div>
        </div>
        {/* <div className="footer-social">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div> */}
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Global Forex. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
