import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero bg-gradient">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in">
              Create High-Quality Training Datasets with 
              <span className="text-gradient"> AnnotateIt</span>
            </h1>
            <p className="hero-description fade-in fade-in-delay-1">
              A powerful vision annotation platform designed for data scientists, machine learning engineers, 
              and researchers. Support for bounding boxes, polygons, and classification annotations with 
              Google ML Kit integration for automatic labeling.
            </p>
            <div className="hero-features fade-in fade-in-delay-2">
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <span>Multiple Annotation Types</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚀</span>
                <span>Google ML Kit Integration</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span>Dataset Import/Export</span>
              </div>
            </div>
            <div className="hero-actions fade-in fade-in-delay-3">
              <a href="#download" className="btn btn-primary btn-lg">
                Download Now
              </a>
              <a href="#screenshots" className="btn btn-secondary btn-lg">
                View Screenshots
              </a>
            </div>
            <div className="hero-note fade-in fade-in-delay-3">
              <p className="text-small">
                <strong>Note:</strong> Requires administrator privileges on Windows systems
              </p>
            </div>
          </div>
          <div className="hero-image fade-in fade-in-delay-2">
            <img 
              src="./assets/logo/annotateit_1024.png" 
              alt="AnnotateIt Logo" 
              className="hero-logo"
            />
            <div className="hero-screenshot">
              <img 
                src="./assets/screenshots/main_page_projects.png" 
                alt="AnnotateIt Main Interface" 
                className="img-responsive img-rounded img-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;