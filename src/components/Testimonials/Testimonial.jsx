import React,{useRef,useEffect} from 'react';
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

    const testimonialref = useRef(null);

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
    
      const serviceCards = document.querySelectorAll('.testimonial-card');
      serviceCards.forEach(card => observer.observe(card));
    
      return () => {
        serviceCards.forEach(card => observer.unobserve(card));
      };
    }, []);

  return (
    <div className="testimonial-section" id='testimonials'>
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <div className="testimonial-cards">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card" ref={testimonialref}>
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
