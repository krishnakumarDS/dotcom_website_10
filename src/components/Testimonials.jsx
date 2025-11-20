import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonial-card">
          <p className="testimonial-text">"Dot Com Infoway transformed our online presence and delivered exceptional results. Their expertise and dedication are truly commendable."</p>
          <p className="testimonial-author">- John Smith, CEO</p>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">"We are extremely satisfied with the app they developed for us. It's user-friendly and has greatly improved our customer engagement."</p>
          <p className="testimonial-author">- Emily Johnson, Marketing Manager</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;