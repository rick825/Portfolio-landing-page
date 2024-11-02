import React from 'react';
import './Testimonial.css'; 
import portfolio from '../../assets/img/portfolio/ecommerce.png'
import travel from '../../assets/img/portfolio/travel.png'
import task from  '../../assets/img/portfolio/task.png'

const testimonials = [
  {
    id: 1,
    name: "OneStore",
    role: "Ecommerce Website",
    feedback: "This team transformed our online presence! Their attention to detail and commitment to quality is unmatched.",
    image: portfolio 
  },
  {
    id: 2,
    name: "Travel Agency",
    role: "Trip Booking Web App",
    feedback: "Our sales have significantly increased since we launched our new website. Highly recommend their services!",
    image: travel
  },
  {
    id: 3,
    name: "Emily Jack",
    role: "Task Management System",
    feedback: "Fantastic experience! The team was very communicative and delivered exactly what we needed.",
    image: task
  }
];

const Testimonial = () => {
  return (
    <div className="testimonial-section" id='testimonials'>
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <div className="testimonial-cards">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-image-container">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            </div>
            <div className="testimonial-content">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
