import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Fur_Ever 🐾</h3>
          <p>Providing loving homes for animals in need.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/adopt">Adopt</a></li>
            <li><a href="/donate">Donate</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="footer-contact">
            <p>📍 1234 Shelter Street</p>
            <p>📞 (254) 12345678</p>
            <p>✉️ fur_ever.org</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2030 Fur_Ever Animal Shelter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;