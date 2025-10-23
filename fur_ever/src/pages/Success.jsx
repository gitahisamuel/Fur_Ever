import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const location = useLocation();
  
  // Get the data passed from AdoptForm
  const { message = 'Your submission was successful!', animalName } = location.state || {};

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-icon">🎉</div>
        <h1>Success!</h1>
        <p className="success-message">{message}</p>
        
        {animalName && (
          <div className="next-steps">
            <h2>What's Next?</h2>
            <p>We'll review your application for {animalName} and contact you within 2-3 business days.</p>
          </div>
        )}
        
        <div className="success-actions">
          <Link to="/animals" className="btn-primary">
            Browse More Animals
          </Link>
          <Link to="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;