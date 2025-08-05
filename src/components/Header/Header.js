import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <img 
              src="/assets/logo/annotateit_white.png" 
              alt="AnnotateIt" 
              className="logo-image"
            />
            <span className="logo-text">AnnotateIt</span>
          </div>
          
          <nav className={`header-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#features" className="nav-link" onClick={closeMobileMenu}>
              Features
            </a>
            <a href="#screenshots" className="nav-link" onClick={closeMobileMenu}>
              Screenshots
            </a>
            <a href="#benefits" className="nav-link" onClick={closeMobileMenu}>
              Benefits
            </a>
            <a href="#download" className="nav-link" onClick={closeMobileMenu}>
              Download
            </a>
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>
              Contact
            </a>
          </nav>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >

            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;