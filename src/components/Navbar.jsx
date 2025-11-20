import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; // Import CSS

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/">Dot Com Infoway</a>
        </div>

        <button className="navbar-toggler" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="hero" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="services" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="testimonials" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;