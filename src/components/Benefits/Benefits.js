import React from 'react';
import { useTranslation } from 'react-i18next';
import './Benefits.css';

const Benefits = () => {
  const { t } = useTranslation();
  
  const userBenefits = [
    {
      icon: '⏱️',
      title: t('benefits.userBenefits.items.saveTime.title'),
      description: t('benefits.userBenefits.items.saveTime.description'),
      metric: t('benefits.userBenefits.items.saveTime.metric')
    },
    {
      icon: '🎯',
      title: t('benefits.userBenefits.items.improveAccuracy.title'),
      description: t('benefits.userBenefits.items.improveAccuracy.description'),
      metric: t('benefits.userBenefits.items.improveAccuracy.metric')
    },
    {
      icon: '📈',
      title: t('benefits.userBenefits.items.scaleEfficiently.title'),
      description: t('benefits.userBenefits.items.scaleEfficiently.description'),
      metric: t('benefits.userBenefits.items.scaleEfficiently.metric')
    },
    {
      icon: '💰',
      title: t('benefits.userBenefits.items.reduceCosts.title'),
      description: t('benefits.userBenefits.items.reduceCosts.description'),
      metric: t('benefits.userBenefits.items.reduceCosts.metric')
    }
  ];

  const businessBenefits = [
    {
      icon: '🚀',
      title: t('benefits.businessBenefits.items.fasterTimeToMarket.title'),
      description: t('benefits.businessBenefits.items.fasterTimeToMarket.description')
    },
    {
      icon: '🔒',
      title: t('benefits.businessBenefits.items.dataSecurity.title'),
      description: t('benefits.businessBenefits.items.dataSecurity.description')
    },
    {
      icon: '👥',
      title: t('benefits.businessBenefits.items.teamCollaboration.title'),
      description: t('benefits.businessBenefits.items.teamCollaboration.description')
    },
    {
      icon: '🔧',
      title: t('benefits.businessBenefits.items.easyIntegration.title'),
      description: t('benefits.businessBenefits.items.easyIntegration.description')
    },
    {
      icon: '📊',
      title: t('benefits.businessBenefits.items.qualityAssurance.title'),
      description: t('benefits.businessBenefits.items.qualityAssurance.description')
    },
    {
      icon: '⚡',
      title: t('benefits.businessBenefits.items.performanceOptimized.title'),
      description: t('benefits.businessBenefits.items.performanceOptimized.description')
    }
  ];

  const testimonials = t('benefits.testimonials.items', { returnObjects: true });

  return (
    <section id="benefits" className="section bg-gray">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="fade-in">{t('benefits.title')}</h2>
          <p className="text-large text-muted fade-in fade-in-delay-1">
            {t('benefits.subtitle')}
          </p>
        </div>

        {/* User Benefits */}
        <div className="benefits-section fade-in fade-in-delay-2">
          <h3 className="benefits-title text-center">{t('benefits.userBenefits.title')}</h3>
          <div className="user-benefits grid grid-4">
            {userBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card card hover-lift">
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-metric">{benefit.metric}</div>
                <h4 className="benefit-title">{benefit.title}</h4>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Benefits */}
        <div className="benefits-section fade-in fade-in-delay-3">
          <h3 className="benefits-title text-center">{t('benefits.businessBenefits.title')}</h3>
          <div className="business-benefits grid grid-3">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="business-benefit-card">
                <div className="business-benefit-icon">{benefit.icon}</div>
                <div className="business-benefit-content">
                  <h4 className="business-benefit-title">{benefit.title}</h4>
                  <p className="business-benefit-description">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials-section fade-in fade-in-delay-4">
          <h3 className="benefits-title text-center">{t('benefits.testimonials.title')}</h3>
          <div className="testimonials grid grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card">
                <div className="testimonial-quote">
                  <span className="quote-mark">"</span>
                  <p>{testimonial.quote}</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-role">{testimonial.role}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="benefits-cta text-center fade-in fade-in-delay-5">
          <h3>Ready to Transform Your Annotation Workflow?</h3>
          <p className="text-large text-muted mb-8">
            Join thousands of professionals who have already improved their ML projects with AnnotateIt
          </p>
          <div className="cta-buttons">
            <a href="#download" className="btn btn-primary btn-lg">
              Download Free Trial
            </a>
            <a href="#contact" className="btn btn-secondary btn-lg">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;