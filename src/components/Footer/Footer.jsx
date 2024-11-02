import React, { useState } from 'react';
import { db } from '../../firebase/firebaseConfig'; // Adjust the path to your firebaseConfig
import { collection, addDoc } from 'firebase/firestore';
import './Footer.css';
import { toast, ToastContainer } from 'react-toastify'; // Import Toast for notifications
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subscribersCollection = collection(db, 'subscribers'); 
      await addDoc(subscribersCollection, { email });
      toast.success("Subscription successful!"); 
      setEmail(''); 
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Subscription failed. Please try again.');
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <footer className="footer-section">
      <ToastContainer /> 
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
        <p className="footer-copy">© {new Date().getFullYear()}Thesky.web. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
