// Header.jsx
import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Find Your Forever Friend</h1>
      <p className="header-subtitle">
        Discover loving animals waiting for their second chance at happiness. 
        Every adoption saves a life and creates a forever bond.
      </p>
      
      <div className="header-stats">
        <div className="stat-item">
          <span className="stat-number">250+</span>
          <span className="stat-label">Animals Saved</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">150+</span>
          <span className="stat-label">Happy Families</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">99%</span>
          <span className="stat-label">Success Rate</span>
        </div>
      </div>
    </header>
  );
};

export default Header;