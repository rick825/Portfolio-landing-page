import React, { useEffect } from 'react';
import { FaHome, FaServicestack, FaInfoCircle, FaCommentDots, FaPhone } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.navbar');
      const logo = document.querySelector('.navlogo');

      if (header && logo) { // Check if elements exist
        if (window.scrollY > 100) {
          header.classList.add('active');
          logo.classList.add('logoactive');
        } else {
          header.classList.remove('active');
          logo.classList.remove('logoactive');
        }
      }
    };

    window.addEventListener('scroll', handleScroll); // Use event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on unmount
    };
  }, []); // Empty dependency array means this runs once on mount and unmount

  const handleNavigation = () => {
    const navLinks = document.querySelector('.nav-links');
    const backblack = document.querySelector('.backblack');
    const contact = document.querySelector('.contact');
    const logo = document.querySelector('.navlogo');
    const navbar = document.querySelector('.navbar');

    if (navLinks && backblack && contact && logo && navbar) { // Check if elements exist
      navLinks.classList.toggle('navactive');
      backblack.classList.toggle('navactive');
      contact.classList.toggle('navactive');
      logo.classList.toggle('logoactive');
      navbar.classList.toggle('navbaractive');
    }
  };

  return (
    <div className='header'>
      <div className="backblack"></div>
      <nav className="navbar">
        <div className="ham" onClick={handleNavigation}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVUlEQVR4nO3WsQkAMAwDQY2evV04YxjEHXwfk0YJABdm5jWUmdmGcv0Ah0zxj7yGAgDEjN/rbTXNo3EbStMhr6EAADHj93pbTfNo3IbSdMhrKADkwAfNVkOwdaBILgAAAABJRU5ErkJggg==" alt="menu--v1" />
        </div>
        <div className="navlogo">
          <h2>Thesky.web</h2>
        </div>
        <ul className="nav-links">
          <li><a href="/"><FaHome /> Home</a></li>
          <li><a href="#services"><FaServicestack /> Services</a></li>
          <li><a href="#about"><FaInfoCircle /> About</a></li>
          <li><a href="#testimonials"><FaCommentDots /> Testimonials</a></li>
          <li><a href="#contactus"><FaPhone /> Contact Us</a></li>
        </ul>
        <div className="contact">
          <div className="contact1 cont">
            <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJUlEQVR4nO2UL0sEURTF1z9FBZvBItjFYPADCILCfgGxmKxGq2CxChar0WrQL6Bli92iYxdEYXm/8+TIgxl2YGd0xhU07IUDA+/e87vv3sd0OuP4NyFpE3iU5FEEPCWvKsDZqOYa6HgIYHsS2AdeR+j+JXnYnqgdle1F4OIH5pe2F2qNgWtJ3dLIug138iBpo6iLMe5K6lXtoOjkyvZSfpsZSUdAqOhYkk5tz6Xcfr+/DNwU57WAvPgdOLQ9lc5CCKuS7ko5tyGElbyJaeAAeCt7fAkoqRdCWCseQYxxJyl952Ndl3RfVdsUYOBD0rnt+dJDmJV0AsS6usYADUBZCGEvCXj+Lr81QC01Brj1iJosTs1/G1nVDrZ/AwJkkraGAOP4s/gE7yOLrigu21MAAAAASUVORK5CYII=" />
            <a href="mailto:sky.js.360@gmail.com">sky.js.360@gmail.com</a>
          </div>
          <div className="contact2 cont">
            <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfUlEQVR4nO2ZO2tUURRGjxpfEQvxEfBVWfgHoikUAloEURBiIRG0UtDOzj8giGhrLfgoQqKFoghiFdSQwqQJqCh2iopGjczM+i5+cskIyZCEuXdyZ45hFuxuirtm73POPvuE0KbN8sb2zkqlchYYlDQO/AQ+AJdsrw4xY3ulpMPAA+CPJC8Qz21vC7Fhe0WSJCclvVvk410Tk7a7QiwAPZJGMwh4Vozb3thSAdvrJF0BkpwSTgN4bLujJRJAt6TXjQhoblxvhcR5oLyEEq5uDH1NEbDdCdxaSgHNjZFmSHQ1sKBdZ1amCpUolUp7JL0pUkIz8bIwCeAg8K1oCWAK2F+IhKRe4FcTJB7Z3lWUxBGgVLDAd+BcIQJViX6gUrDEUKHtiaSjWSWAj2mfBQzX8dtPkk4UJlCVOJSjnEZsb6/pu14sIDFoe0uhEsABYDpjJoZtr52vlU+S5IykMeC3pFeSjoWiKZfLe7NuscDtljV685GmWtLbjOV0I/3XQyzY7szRdlwOsQHcXA4SF7KWU4gNoDvLfQK4G9WamHU9ncwg8cT2mhAbkq5lKKcx2+tDbAA99Q4KgM+2d4cY507KsNUmSTIQYiRJkoGMJ/e9EBu2OyS9z7jdptEbYkJSfw6Jf1PAVSEWgGc5RdK1cjrEMtpn8al46yYbWUjfJxqQSBf9dIgBZh5ZcotImggxIGmiQZHjIQaAHw2U1Z0QC8p3fqQSX2xvDbEAXMyZkWJHNnlOdeBpxmwMhRixvSk9peuU+BrVA2Uttjen94s6TvJTIXZsbwDuL5KNh+F/wTMP+ldr25Z0Mm57R/jfkNSXzmirQ4hRYF+rv6lNm9Ac/gJ1sC6iwN5RxAAAAABJRU5ErkJggg==" />
            <a href="tel:+917438049679">+91 7438049679</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
