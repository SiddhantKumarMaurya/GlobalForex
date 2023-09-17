import React from 'react';
import './Home.css'; // Import the CSS file for styling
// import GlobalForex from "./GlobalForex.png"

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-heading">Welcome to Global Forex</h1>
          <p className="home-description">
          "Unlock the World's Wealth: Exchange Anytime, Anywhere!"
          </p>
          <p>RBI authorised: PEPL/DEI/RMC/530/2023</p>
          <p>FOREGIN MONEY EXCHANGE & INTERNATIONAL MONEY TRANSFER</p>
          <p>At Global Forex, we specialize in providing top-notch Foreign Money Exchange & International Money Transfer Services. With a focus on efficiency and security, we offer seamless currency exchange solutions for individuals and businesses alike. Our expert team ensures swift and reliable transfers to international destinations, eliminating the complexities associated with cross-border transactions. Whether you need to exchange currency for travel purposes or conduct international business transactions, Global Forex is your trusted partner. Count on us to navigate the world of foreign exchange with ease, giving you peace of mind and financial confidence in every transaction.</p>
        </div>
        {/* <div className="home-image">
          <img
            src={GlobalForex}
            alt="Global Forex"
            className="hero-image"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Home;
