import React from 'react';
import { FiMonitor } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import './Main.css';
import webdevsvg3 from '../../assets/img/webdevsvg3.png';
import webdevsvg5 from '../../assets/img/webdevsvg5.png';

const Main = () => {
  return (
    <div className='main'>
      <div className="mainleft maincont">
        <div className="mainhead">
          <h1>Build Your Website With Us!</h1>
          <ul className="mainlist">
            <li>Get a website that reflects your unique brand.</li>
            <li>Enjoy a smooth, user-friendly experience on any device.</li>
            <li>Let us handle everything—from design to launch.</li>
          </ul>
          <div className="mainbtn">
            <a href="#services"><button className="btn btn-primary">Our Services</button></a>
            <a href="#about"><button className="btn btn-secondary">About Us →</button></a>
          </div>

          {/* Features Section with React Icons */}
          <div className="features">
            <div className="feature">
              <div className="icon"><img width="50" height="50" src="https://img.icons8.com/ios/50/web.png" alt="web"/></div>
              <p>Responsive Design</p>
            </div>
            <div className="feature">
              <div className="icon"><img width="50" height="50" src="https://img.icons8.com/ios/50/laptop-metrics--v1.png" alt="laptop-metrics--v1"/></div>
              <p>SEO Optimization</p>
            </div>
            <div className="feature">
              <div className="icon"><img width="50" height="50" src="https://img.icons8.com/ios/50/shopping-bag--v1.png" alt="shopping-bag--v1"/></div>
              <p>E-commerce Development</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mainright maincont">
        <div className="imgbackground"></div>
        <img src={webdevsvg3} alt="" className='img1' />
        <img src={webdevsvg5} alt="" className='img2' />
      </div>
    </div>
  );
};

export default Main;
