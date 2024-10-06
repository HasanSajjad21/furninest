// src/components/Hero.js
import React from 'react';
import heroImage from '../assets/hero-image.jpg'; // Path is correct according to your folder structure

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Style Your Home Simply</h1>
          <p>"Comfort meets design—shop quality pieces that elevate every room."</p>
          <button className="btn cta">Shop Now</button>
        </div>
        <div className="hero-image">
          {/* Use the imported image */}
          <img src={heroImage} alt="Stylish furniture" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
