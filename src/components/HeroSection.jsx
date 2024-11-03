import React from 'react';
import './HeroSection.css'; 
import Header from './Header/Header';
import Main from './Main/Main';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Header />
      <Main />
    </div>
  );
};

export default HeroSection;
