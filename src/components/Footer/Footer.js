import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Screenshots', href: '#screenshots' },
      { name: 'Download', href: '#download' },
      { name: 'System Requirements', href: '#download' },
      { name: 'Release Notes', href: '#' }
    ],
    support: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Contact Support', href: '#contact' },
      { name: 'Community Forum', href: '#' },
      { name: 'Bug Reports', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'License Agreement', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'YouTube', href: '#', icon: '📺' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <img 
                  src="/assets/logo/annotateit_white.png" 
                  alt="AnnotateIt logo - Vision annotation platform for machine learning datasets" 
                  className="footer-logo-image"
                />
                <span className="footer-logo-text">AnnotateIt</span>
              </div>
              <p className="footer-description">
                A powerful vision annotation platform for creating high-quality training datasets 
                for machine learning models. Trusted by data scientists and ML engineers worldwide.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-column-title">Product</h4>
                <ul className="footer-link-list">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-column-title">Support</h4>
                <ul className="footer-link-list">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-column-title">Company</h4>
                <ul className="footer-link-list">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-column-title">Legal</h4>
                <ul className="footer-link-list">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <div className="newsletter-content">
              <h4 className="newsletter-title">Stay Updated</h4>
              <p className="newsletter-description">
                Get the latest updates, feature announcements, and tips delivered to your inbox.
              </p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
              <p className="newsletter-privacy">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {currentYear} AnnotateIt. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy</a>
              <a href="#" className="footer-bottom-link">Terms</a>
              <a href="#" className="footer-bottom-link">Cookies</a>
              <a href="#contact" className="footer-bottom-link">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;