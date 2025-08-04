import React from 'react';
import './Download.css';

const Download = () => {
  const downloadOptions = [
    {
      platform: 'Microsoft Store',
      icon: '🏪',
      description: 'Download from Microsoft Store for Windows 10/11',
      version: 'Latest Version',
      size: '~50 MB',
      requirements: 'Windows 10/11, Admin privileges required',
      primary: true,
      available: true,
      link: '#', // Replace with actual Microsoft Store link
      buttonText: 'Download from Store'
    },
    {
      platform: 'Direct Download',
      icon: '💾',
      description: 'Direct download for Windows systems',
      version: 'v1.0.0',
      size: '~45 MB',
      requirements: 'Windows 10/11, Admin privileges required',
      primary: false,
      available: false,
      link: '#',
      buttonText: 'Coming Soon'
    },
    {
      platform: 'macOS',
      icon: '🍎',
      description: 'Native macOS application',
      version: 'In Development',
      size: 'TBD',
      requirements: 'macOS 11.0 or later',
      primary: false,
      available: false,
      link: '#',
      buttonText: 'Coming Soon'
    }
  ];

  const systemRequirements = {
    minimum: [
      'Windows 10 or Windows 11',
      'Administrator privileges required',
      '4 GB RAM',
      '500 MB available disk space',
      '1280 x 720 display resolution'
    ],
    recommended: [
      'Windows 11 (latest version)',
      'Administrator privileges',
      '8 GB RAM or more',
      '1 GB available disk space',
      '1920 x 1080 display resolution',
      'Dedicated graphics card (optional)'
    ]
  };

  return (
    <section id="download" className="section bg-gradient">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="fade-in">Download AnnotateIt</h2>
          <p className="text-large fade-in fade-in-delay-1">
            Get started with professional annotation tools today
          </p>
        </div>

        <div className="download-options fade-in fade-in-delay-2">
          {downloadOptions.map((option, index) => (
            <div 
              key={index} 
              className={`download-card ${option.primary ? 'primary' : ''} ${!option.available ? 'disabled' : ''}`}
            >
              <div className="download-header">
                <div className="platform-icon">{option.icon}</div>
                <div className="platform-info">
                  <h3 className="platform-name">{option.platform}</h3>
                  <p className="platform-description">{option.description}</p>
                </div>
                {option.primary && <div className="recommended-badge">Recommended</div>}
              </div>
              
              <div className="download-details">
                <div className="detail-item">
                  <span className="detail-label">Version:</span>
                  <span className="detail-value">{option.version}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{option.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Requirements:</span>
                  <span className="detail-value">{option.requirements}</span>
                </div>
              </div>

              <div className="download-action">
                <a 
                  href={option.link} 
                  className={`btn ${option.primary ? 'btn-primary' : 'btn-secondary'} btn-lg ${!option.available ? 'disabled' : ''}`}
                  {...(!option.available && { 'aria-disabled': 'true' })}
                >
                  {option.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="system-requirements fade-in fade-in-delay-3">
          <h3 className="requirements-title text-center">System Requirements</h3>
          <div className="requirements-grid grid grid-2">
            <div className="requirements-card card">
              <h4 className="requirements-subtitle">Minimum Requirements</h4>
              <ul className="requirements-list">
                {systemRequirements.minimum.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="requirements-card card">
              <h4 className="requirements-subtitle">Recommended</h4>
              <ul className="requirements-list">
                {systemRequirements.recommended.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="download-notice fade-in fade-in-delay-4">
          <div className="notice-card">
            <div className="notice-icon">⚠️</div>
            <div className="notice-content">
              <h4>Important Notice</h4>
              <p>
                AnnotateIt requires administrator privileges to run properly on Windows systems. 
                This is necessary for optimal performance and file system access. Please ensure 
                you have admin rights before installation.
              </p>
            </div>
          </div>
        </div>

        <div className="download-support fade-in fade-in-delay-5">
          <div className="support-content text-center">
            <h4>Need Help?</h4>
            <p>
              Having trouble with installation or need technical support? 
              We're here to help you get started with AnnotateIt.
            </p>
            <div className="support-actions">
              <a href="#contact" className="btn btn-secondary">
                Contact Support
              </a>
              <a href="#" className="btn btn-secondary">
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;