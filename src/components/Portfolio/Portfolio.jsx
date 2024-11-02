import React from 'react';
import './Portfolio.css';
import portfolio from '../../assets/img/portfolio/ecommerce.png'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A responsive e-commerce platform with a seamless checkout process.",
      imageUrl: portfolio,
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing skills and projects.",
      imageUrl: "https://via.placeholder.com/300x200",
      link: "#"
    },
    {
      id: 3,
      title: "Landing Page",
      description: "A high-conversion landing page designed for lead generation.",
      imageUrl: "https://via.placeholder.com/300x200",
      link: "#"
    },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <p className="portfolio-intro">Take a look at some of our recent projects.</p>
      
      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className="portfolio-card">
            <div className="portfolio-image">
            <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="portfolio-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="portfolio-btn" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
