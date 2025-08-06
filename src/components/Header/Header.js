import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
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
          <div className="header-logo" onClick={() => {
            // Remove hash from URL and navigate to clean home page
            window.history.pushState('', document.title, window.location.pathname + window.location.search);
            window.scrollTo(0, 0);
          }} style={{ cursor: 'pointer' }}>
            <img 
              src="/assets/logo/annotateit_white.png" 
              alt={t('header.logoAlt')} 
              className="logo-image"
            />
            <span className="logo-text">AnnotateIt</span>
          </div>
          
          <nav className={`header-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#features" className="nav-link" onClick={closeMobileMenu}>
              {t('header.navigation.features')}
            </a>
            <a href="#screenshots" className="nav-link" onClick={closeMobileMenu}>
              {t('header.navigation.screenshots')}
            </a>
            <a href="#benefits" className="nav-link" onClick={closeMobileMenu}>
              {t('header.navigation.benefits')}
            </a>
            <a href="#download" className="nav-link" onClick={closeMobileMenu}>
              {t('header.navigation.download')}
            </a>
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>
              {t('header.navigation.contact')}
            </a>
            <LanguageSelector />
          </nav>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={t('header.mobileMenuToggle')}
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