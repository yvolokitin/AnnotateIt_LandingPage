import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Multiple Annotation Types',
      description: 'Support for bounding boxes, polygons, and classification annotations to meet all your computer vision needs.',
      details: ['Bounding Box Detection', 'Polygon Segmentation', 'Image Classification', 'Multi-label Support']
    },
    {
      icon: '📁',
      title: 'Project Management',
      description: 'Create and manage annotation projects with customizable labels and organized workflows.',
      details: ['Custom Label Creation', 'Project Organization', 'Progress Tracking', 'Team Collaboration']
    },
    {
      icon: '📊',
      title: 'Dataset Import/Export',
      description: 'Import and export datasets in various formats for seamless integration with your ML pipeline.',
      details: ['Multiple Format Support', 'Batch Processing', 'Data Validation', 'Export Optimization']
    },
    {
      icon: '🚀',
      title: 'Google ML Kit Integration',
      description: 'Automatic image labeling using Google\'s ML Kit to accelerate your annotation workflow.',
      details: ['Auto-labeling', 'Object Detection', 'Text Recognition', 'Smart Suggestions']
    },
    {
      icon: '⚡',
      title: 'Intuitive Interface',
      description: 'User-friendly interface designed for efficiency and accuracy in annotation tasks.',
      details: ['Drag & Drop', 'Keyboard Shortcuts', 'Zoom & Pan', 'Undo/Redo Support']
    },
    {
      icon: '🔧',
      title: 'Advanced Tools',
      description: 'Professional-grade tools for precise annotations and quality control.',
      details: ['Precision Tools', 'Quality Validation', 'Batch Operations', 'Custom Workflows']
    }
  ];

  return (
    <section id="features" className="section bg-gray">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="fade-in">Powerful Features for Professional Annotation</h2>
          <p className="text-large text-muted fade-in fade-in-delay-1">
            Everything you need to create high-quality training datasets for machine learning models
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
          <h3>Ready to streamline your annotation workflow?</h3>
          <p className="text-muted mb-6">
            Join thousands of data scientists and ML engineers who trust AnnotateIt for their projects.
          </p>
          <a href="#download" className="btn btn-primary btn-lg">
            Start Annotating Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;