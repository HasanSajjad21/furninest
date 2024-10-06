// src/components/Features.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="features" id="features">
      <h2>Why Choose Us</h2>
      <div className="feature-items">
        <div className="feature-item" data-aos="fade-right">
          <h3>Sustainability</h3>
          <p>Eco-friendly materials for a healthier home.</p>
        </div>
        <div className="feature-item" data-aos="fade-left">
          <h3>Craftsmanship</h3>
          <p>High attention to detail and quality.</p>
        </div>
        <div className="feature-item" data-aos="fade-right">
          <h3>Customer Satisfaction</h3>
          <p>Dedicated to exceptional service and experience.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
