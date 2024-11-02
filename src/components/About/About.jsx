import React from 'react';
import './About.css';
import { FaLaptopCode, FaHandsHelping, FaBullseye } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about" id='about'>
      <h2 className="about-title">About Us</h2>
      <p className="about-intro">
        We are a passionate team of web developers dedicated to bringing your ideas to life. With a focus on modern technologies and user-centered design, we craft websites that not only look great but perform flawlessly.
      </p>

      <div className="about-details">
        <div className="about-card">
          <FaLaptopCode className="about-icon" />
          <h3>Our Expertise</h3>
          <p>We specialize in front-end and back-end development, creating responsive and secure web applications that meet your business needs.</p>
        </div>
        
        <div className="about-card">
          <FaHandsHelping className="about-icon" />
          <h3>Our Values</h3>
          <p>We believe in transparency, innovation, and collaboration, ensuring every project is handled with care and commitment.</p>
        </div>
        
        <div className="about-card">
          <FaBullseye className="about-icon" />
          <h3>Our Mission</h3>
          <p>Our mission is to empower businesses by developing custom digital solutions that enhance user engagement and drive growth.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
