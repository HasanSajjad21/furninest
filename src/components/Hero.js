// src/components/Hero.js
import React from 'react';
import heroImage from '../assets/hero-image.png'; // Replace this with your actual image path

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Style Your Home Simply</h1>
          <p>"Comfort meets design—shop quality pieces that elevate every room."</p>
          <button className="btn cta">Shop Now</button>
        </div>
        {/* Product showcase floating at the bottom */}
        <div className="product-showcase">
          <div className="product-card">
            <img src="../assets/sofa.png" alt="Luxe Sofa" />
            <p>Luxe Sofa<br/><strong>$1499</strong></p>
          </div>
          <div className="product-card">
            <img src="../assets/bed.png" alt="Sleek Bed" />
            <p>Sleek Bed<br/><strong>$1099</strong></p>
          </div>
          <div className="product-card">
            <img src="../assets/dining.png" alt="Chic Dining Table" />
            <p>Chic Dining Table<br/><strong>$1099</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
