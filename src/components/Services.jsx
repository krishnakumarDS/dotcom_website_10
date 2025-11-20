import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-scroll">
          <div className="services-card">
            <h3>Web Development</h3>
            <p>Custom web solutions tailored to your business needs, using the latest technologies and design trends.</p>
          </div>
          <div className="services-card">
            <h3>Digital Marketing</h3>
            <p>Comprehensive digital marketing strategies to enhance your online presence and drive targeted traffic.</p>
          </div>
          <div className="services-card">
            <h3>App Development</h3>
            <p>Native and cross-platform mobile app development for iOS and Android, delivering seamless user experiences.</p>
          </div>
          <div className="services-card">
            <h3>AI Services</h3>
            <p>AI-powered solutions to automate processes, gain insights, and transform your business with intelligent technologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;