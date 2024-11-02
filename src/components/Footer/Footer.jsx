import React, { useState } from 'react';
import { db } from '../../firebase/firebaseConfig'; // Adjust the path to your firebaseConfig
import { collection, addDoc } from 'firebase/firestore';
import './Footer.css';
import { useSnackbar } from 'notistack'; // Import useSnackbar from notistack

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { enqueueSnackbar } = useSnackbar(); // Hook to access the snackbar

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subscribersCollection = collection(db, 'subscribers'); 
      await addDoc(subscribersCollection, { email });
      enqueueSnackbar("Subscription successful!", { variant: 'success' }); // Show success message
      setEmail(''); 
    } catch (error) {
      console.error('Error adding document: ', error);
      enqueueSnackbar('Subscription failed. Please try again.', { variant: 'error' }); // Show error message
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2 className="footer-title">Stay Connected</h2>
        <p className="footer-description">Subscribe to our newsletter for the latest updates and offers.</p>
        <form className="footer-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="footer-input"
            value={email}
            onChange={handleChange}
            required
          />
          <button type="submit" className="footer-button" disabled={isSubmitting}>
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        <div className="footer-links">
          <a href="#about" className="footer-link">About Us</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#portfolio" className="footer-link">Portfolio</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Thesky.web. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
