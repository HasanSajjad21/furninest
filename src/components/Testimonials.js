// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>"The quality is amazing! I'm so happy with my purchase."</p>
          <h3>- Sarah Williams</h3>
        </div>
        <div className="testimonial">
          <p>"This furniture adds real character to my living room."</p>
          <h3>- James Carter</h3>
        </div>
        <div className="testimonial">
          <p>"Exceptional craftsmanship and excellent service."</p>
          <h3>- Nadine Akur</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
