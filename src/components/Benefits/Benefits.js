import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const userBenefits = [
    {
      icon: '⏱️',
      title: 'Save Time',
      description: 'Reduce annotation time by up to 70% with automated labeling and intelligent tools.',
      metric: '70% faster'
    },
    {
      icon: '🎯',
      title: 'Improve Accuracy',
      description: 'Professional-grade tools ensure precise annotations for better model performance.',
      metric: '99% precision'
    },
    {
      icon: '📈',
      title: 'Scale Efficiently',
      description: 'Handle large datasets with batch processing and automated workflows.',
      metric: '10x scale'
    },
    {
      icon: '💰',
      title: 'Reduce Costs',
      description: 'Lower annotation costs with efficient tools and reduced manual work.',
      metric: '60% savings'
    }
  ];

  const businessBenefits = [
    {
      icon: '🚀',
      title: 'Faster Time-to-Market',
      description: 'Accelerate your ML projects with streamlined annotation workflows and rapid dataset preparation.'
    },
    {
      icon: '🔒',
      title: 'Data Security',
      description: 'Keep your sensitive data secure with local processing and no cloud dependency requirements.'
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration with project sharing, progress tracking, and quality control.'
    },
    {
      icon: '🔧',
      title: 'Easy Integration',
      description: 'Integrate seamlessly with your existing ML pipeline through multiple export formats.'
    },
    {
      icon: '📊',
      title: 'Quality Assurance',
      description: 'Built-in validation tools ensure consistent, high-quality annotations across your team.'
    },
    {
      icon: '⚡',
      title: 'Performance Optimized',
      description: 'Handle large images and complex annotations without performance degradation.'
    }
  ];

  const testimonials = [
    {
      quote: "AnnotateIt has revolutionized our annotation workflow. We've reduced our dataset preparation time by 60% while improving annotation quality.",
      author: "Dr. Sarah Chen",
      role: "ML Research Lead",
      company: "TechVision AI"
    },
    {
      quote: "The Pre-annotation AI Tools integration is a game-changer. It provides excellent starting points for our annotations, saving hours of manual work.",
      author: "Michael Rodriguez",
      role: "Data Scientist",
      company: "AutoDrive Systems"
    },
    {
      quote: "Finally, an annotation tool that understands the needs of professional ML teams. The interface is intuitive and the features are comprehensive.",
      author: "Lisa Wang",
      role: "Computer Vision Engineer",
      company: "RoboTech Solutions"
    }
  ];

  return (
    <section id="benefits" className="section bg-gray">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="fade-in">Why Choose AnnotateIt?</h2>
          <p className="text-large text-muted fade-in fade-in-delay-1">
            Trusted by data scientists and ML engineers worldwide for creating high-quality training datasets
          </p>
        </div>

        {/* User Benefits */}
        <div className="benefits-section fade-in fade-in-delay-2">
          <h3 className="benefits-title text-center">Immediate Benefits for Your Workflow</h3>
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
          <h3 className="benefits-title text-center">Enterprise-Grade Capabilities</h3>
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
          <h3 className="benefits-title text-center">What Our Users Say</h3>
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