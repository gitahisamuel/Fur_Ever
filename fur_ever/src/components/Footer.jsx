import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Animal Shelter</h3>
          <p>Providing loving homes for animals in need.</p>
        </div>
        
       
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 123 Shelter Street, Animal City</p>
          <p>📞 (555) 123-4567</p>
          <p>✉️ info@animalshelter.org</p>
        </div>
        
        <div className="footer-section">
          <h4>Hours</h4>
          <p>Monday - Friday: 9AM - 6PM</p>
          <p>Saturday: 10AM - 4PM</p>
          <p>Sunday: 12PM - 3PM</p>
        </div>
      </div>
      
      
    </footer>
  );
};

export default Footer;