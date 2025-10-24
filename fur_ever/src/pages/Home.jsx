import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';


const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Fur_Ever 🐾</h1>
        <p className="hero-subtitle">Find your perfect furry companion</p>
        <Link to="/animals">
          <button className="cta-button">
            Meet Our Animals
          </button>
        </Link>
      </div>

  
      <div className="mission-section">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-text">
          Connecting loving homes with animals in need. Every animal deserves a 
          second chance at happiness, and we're here to make that happen.
        </p>
      </div>
    </div>
  );
};

export default Home;