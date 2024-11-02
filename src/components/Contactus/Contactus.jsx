import React, { useState } from 'react';
import { db } from '../../firebase/firebaseConfig'; // Adjust the path to your firebaseConfig
import { collection, addDoc } from 'firebase/firestore';
import './Contactus.css';
import { useSnackbar } from 'notistack'; // Import useSnackbar from notistack

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { enqueueSnackbar } = useSnackbar(); // Hook to access the snackbar

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const contactsCollection = collection(db, 'contacts');
      await addDoc(contactsCollection, formData);
      enqueueSnackbar("Message Sent Successfully!", { variant: 'success' }); // Show success message
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error adding document: ', error.message);
      enqueueSnackbar('Error sending message: ' + error.message, { variant: 'error' }); // Show error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us-section" id='contactus'>
      <h2 className="contact-us-title">Get in Touch</h2>
      <p className="contact-us-intro">We'd love to hear from you! Please fill out the form below.</p>
      <form onSubmit={handleSubmit} className="contact-us-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-textarea"
        />
        <button type="submit" className="contact-button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Contactus;
