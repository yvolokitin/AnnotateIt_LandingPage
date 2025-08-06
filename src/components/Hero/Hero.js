import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-header">
          <h1 className="hero-headline">
            {t('hero.headline', 'Accelerate Your AI Development with Precision Annotation')}
          </h1>
          <div className="hero-visual">
            <iframe 
              src="https://www.youtube.com/embed/XfRXBCKIERw"
              title={t('hero.videoTitle', 'AnnotateIt Features Overview Video')}
              className="hero-video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="hero-content">
          <p className="hero-subheadline">
            {t('hero.subheadline', 'AnnotateIt is the professional vision annotation platform trusted by ML engineers, data scientists, and AI teams to create high-quality training datasets faster and more accurately.')}
          </p>
          <div className="hero-cta">
            <a href="#download" className="cta-button primary">
              {t('hero.ctaPrimary', 'Get Started Free')}
            </a>
            <a href="#features" className="cta-button secondary">
              {t('hero.ctaSecondary', 'Explore Features')}
            </a>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span className="feature-text">{t('hero.feature1', 'Bounding Boxes & Polygons')}</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span className="feature-text">{t('hero.feature2', 'Lightning Fast Workflow')}</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🤖</span>
              <span className="feature-text">{t('hero.feature3', 'AI-Assisted Labeling')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;