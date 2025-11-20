import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact Us</a>
        </div>
        <p>&copy; 2024 Dot Com Infoway. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;