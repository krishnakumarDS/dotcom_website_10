import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          Dot Com Infoway is a leading IT solutions provider, empowering businesses with innovative technologies and strategic insights. We specialize in web development, digital marketing, app development, and AI services, helping our clients achieve sustainable growth and success.
        </p>
        <div className="about-stats">
          <div className="about-stat">
            <h3>15+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="about-stat">
            <h3>200+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="about-stat">
            <h3>100+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;