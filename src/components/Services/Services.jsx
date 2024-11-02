import React, { useEffect, useRef } from 'react';
import './Services.css';
import { FaLaptopCode, FaMobileAlt, FaServer, FaShoppingCart } from 'react-icons/fa';

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Adding a delay based on index for staggered effect
            entry.target.style.transitionDelay = `${index * 0.1}s`;
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );
  
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => observer.observe(card));
  
    return () => {
      serviceCards.forEach(card => observer.unobserve(card));
    };
  }, []);
  
  return (
    <div className="services" id="services" ref={servicesRef}>
      <div className="serviceshead">
        <h2 className="services-title">Our Services</h2>
        <p className="services-intro">We offer a complete suite of web development services to help bring your ideas to life.</p>
      </div>
      
      <div className="services-container">
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Website Design</h3>
          <p>Crafting responsive and visually appealing designs tailored to your brand.</p>
        </div>
        
        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <h3>Front-end Development</h3>
          <p>Building interactive and dynamic user interfaces for a seamless experience.</p>
        </div>
        
        <div className="service-card">
          <FaServer className="service-icon" />
          <h3>Back-end Development</h3>
          <p>Ensuring robust and scalable backend solutions for optimal performance.</p>
        </div>
        
        <div className="service-card">
          <FaShoppingCart className="service-icon" />
          <h3>E-Commerce Development</h3>
          <p>Building robust e-commerce platforms for seamless online shopping experiences.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
