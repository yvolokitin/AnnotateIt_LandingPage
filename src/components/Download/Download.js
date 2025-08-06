import React from 'react';
import { useTranslation } from 'react-i18next';
import './Download.css';

const Download = () => {
  const { t } = useTranslation();
  
  const downloadOptions = [
    {
      platform: t('download.options.microsoftStore.platform'),
      icon: '🏪',
      description: t('download.options.microsoftStore.description'),
      version: t('download.options.microsoftStore.version'),
      size: t('download.options.microsoftStore.size'),
      requirements: t('download.options.microsoftStore.requirements'),
      primary: true,
      available: true,
      link: 'https://apps.microsoft.com/detail/9N640T6RLT89?hl=en-us&gl=NL&ocid=pdpshare', // Official Microsoft Store link
      buttonText: t('download.options.microsoftStore.buttonText')
    },
    {
      platform: t('download.options.directDownload.platform'),
      icon: '💾',
      description: t('download.options.directDownload.description'),
      version: t('download.options.directDownload.version'),
      size: t('download.options.directDownload.size'),
      requirements: t('download.options.directDownload.requirements'),
      primary: true,
      available: true,
      link: 'mailto:umno.annotateit@gmail.com',
      buttonText: t('download.options.directDownload.buttonText')
    },
    {
      platform: t('download.options.macOS.platform'),
      icon: '🍎',
      description: t('download.options.macOS.description'),
      version: t('download.options.macOS.version'),
      size: t('download.options.macOS.size'),
      requirements: t('download.options.macOS.requirements'),
      primary: false,
      available: false,
      link: '#',
      buttonText: t('download.options.macOS.buttonText')
    },
    {
      platform: t('download.options.android.platform'),
      icon: '🤖',
      description: t('download.options.android.description'),
      version: t('download.options.android.version'),
      size: t('download.options.android.size'),
      requirements: t('download.options.android.requirements'),
      primary: false,
      available: false,
      link: '#',
      buttonText: t('download.options.android.buttonText')
    },
    {
      platform: t('download.options.iOS.platform'),
      icon: '📱',
      description: t('download.options.iOS.description'),
      version: t('download.options.iOS.version'),
      size: t('download.options.iOS.size'),
      requirements: t('download.options.iOS.requirements'),
      primary: false,
      available: false,
      link: '#',
      buttonText: t('download.options.iOS.buttonText')
    },
    {
      platform: t('download.options.ubuntu.platform'),
      icon: '🐧',
      description: t('download.options.ubuntu.description'),
      version: t('download.options.ubuntu.version'),
      size: t('download.options.ubuntu.size'),
      requirements: t('download.options.ubuntu.requirements'),
      primary: false,
      available: false,
      link: '#',
      buttonText: t('download.options.ubuntu.buttonText')
    }
  ];

  const systemRequirements = {
    minimum: t('download.systemRequirements.minimum.items', { returnObjects: true }),
    recommended: t('download.systemRequirements.recommended.items', { returnObjects: true })
  };

  return (
    <section id="download" className="section bg-gradient">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="fade-in">{t('download.title')}</h2>
          <p className="text-large fade-in fade-in-delay-1">
            {t('download.subtitle')}
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
              </div>
              
              <div className="download-details">
                <div className="detail-item">
                  <span className="detail-label">{t('download.details.version')}</span>
                  <span className="detail-value">{option.version}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{t('download.details.size')}</span>
                  <span className="detail-value">{option.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{t('download.details.requirements')}</span>
                  <span className="detail-value">{option.requirements}</span>
                </div>
              </div>

              <div className="download-action">
                <a 
                  href={option.link} 
                  className={`btn ${option.primary ? 'btn-primary' : 'btn-secondary'} btn-lg ${!option.available ? 'disabled' : ''}`}
                  {...(!option.available && { 'aria-disabled': 'true' })}
                  {...(option.link.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {option.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="system-requirements fade-in fade-in-delay-3">
          <h3 className="requirements-title text-center">{t('download.systemRequirements.title')}</h3>
          <div className="requirements-grid grid grid-2">
            <div className="requirements-card card">
              <h4 className="requirements-subtitle">{t('download.systemRequirements.minimum.title')}</h4>
              <ul className="requirements-list">
                {systemRequirements.minimum.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="requirements-card card">
              <h4 className="requirements-subtitle">{t('download.systemRequirements.recommended.title')}</h4>
              <ul className="requirements-list">
                {systemRequirements.recommended.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="download-support fade-in fade-in-delay-5">
          <div className="support-content text-center">
            <h4>{t('download.support.title')}</h4>
            <p>
              {t('download.support.description')}
            </p>
            <div className="support-actions">
              <a href="#contact" className="btn btn-secondary">
                {t('download.support.contactSupport')}
              </a>
              <a href="#" className="btn btn-secondary">
                {t('download.support.viewDocumentation')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;