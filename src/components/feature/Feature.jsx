import React,{useRef,useEffect} from 'react';
import { FaMobileAlt, FaBolt, FaSearch, FaHeadset } from 'react-icons/fa';
import './Feature.css';

const Feature = () => {

    const featureref = useRef(null);

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
    
      const serviceCards = document.querySelectorAll('.feature-card');
      serviceCards.forEach(card => observer.observe(card));
    
      return () => {
        serviceCards.forEach(card => observer.unobserve(card));
      };
    }, []);

  const features = [
    {
      id: 1,
      title: "Responsive Design",
      description: "Our designs adapt seamlessly to all devices, ensuring an optimal user experience.",
      icon: <FaMobileAlt />
    },
    {
      id: 2,
      title: "High Performance",
      description: "We build fast-loading websites that improve user engagement and conversion rates.",
      icon: <FaBolt />
    },
    {
      id: 3,
      title: "SEO Optimized",
      description: "All our websites are built with SEO best practices in mind, helping you rank higher in search engines.",
      icon: <FaSearch />
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "We provide round-the-clock support to address any issues that arise quickly.",
      icon: <FaHeadset />
    },
  ];

  return (
    <div className="feature-page" ref={featureref}>
      <h2 className="feature-title">Our Features</h2>
      <p className="feature-intro">Discover what makes our services unique and beneficial for your business.</p>
      
      <div className="feature-grid">
        {features.map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
