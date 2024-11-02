import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2 className="footer-title">Stay Connected</h2>
        <p className="footer-description">Subscribe to our newsletter for the latest updates and offers.</p>
        <form className="footer-form">
          <input type="email" placeholder="Enter your email" className="footer-input" />
          <button type="submit" className="footer-button">Subscribe</button>
        </form>
        <div className="footer-links">
          <a href="#about" className="footer-link">About Us</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#portfolio" className="footer-link">Portfolio</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
