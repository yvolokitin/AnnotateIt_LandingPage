import React from 'react';
import { useTranslation } from 'react-i18next';
import './Features.css';

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: '🎯',
      title: t('features.items.multipleAnnotationTypes.title'),
      description: t('features.items.multipleAnnotationTypes.description'),
      details: t('features.items.multipleAnnotationTypes.details', { returnObjects: true })
    },
    {
      icon: '📁',
      title: t('features.items.projectManagement.title'),
      description: t('features.items.projectManagement.description'),
      details: t('features.items.projectManagement.details', { returnObjects: true })
    },
    {
      icon: '📊',
      title: t('features.items.datasetImportExport.title'),
      description: t('features.items.datasetImportExport.description'),
      details: t('features.items.datasetImportExport.details', { returnObjects: true })
    },
    {
      icon: '🚀',
      title: t('features.items.preAnnotationAI.title'),
      description: t('features.items.preAnnotationAI.description'),
      details: t('features.items.preAnnotationAI.details', { returnObjects: true })
    },
    {
      icon: '⚡',
      title: t('features.items.intuitiveInterface.title'),
      description: t('features.items.intuitiveInterface.description'),
      details: t('features.items.intuitiveInterface.details', { returnObjects: true })
    },
    {
      icon: '🔧',
      title: t('features.items.advancedTools.title'),
      description: t('features.items.advancedTools.description'),
      details: t('features.items.advancedTools.details', { returnObjects: true })
    }
  ];

  return (
    <section id="features" className="section bg-gray">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="fade-in">{t('features.title')}</h2>
          <p className="text-large text-muted fade-in fade-in-delay-1">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="features-grid grid grid-3 fade-in fade-in-delay-2">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card hover-lift">
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="features-cta text-center fade-in fade-in-delay-3">
          <h3>{t('features.cta.title')}</h3>
          <p className="text-muted mb-6">
            {t('features.cta.subtitle')}
          </p>
          <a href="#download" className="btn btn-primary btn-lg">
            {t('features.cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;