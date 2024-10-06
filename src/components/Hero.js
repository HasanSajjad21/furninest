// src/components/Hero.js
import React from 'react';
// Add your hero image later
// import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Style Your Home Simply</h1>
        <p>Comfort. Style. Design.</p>
        <button className="btn cta">Shop Now</button>
      </div>
      <div className="hero-image">
        {/* Add your image here */}
        {/* <img src={heroImage} alt="Hero" /> */}
      </div>
    </section>
  );
};

export default Hero;
