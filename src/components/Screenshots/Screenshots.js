import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Screenshots.css';

const Screenshots = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const screenshots = [
    {
      src: '/assets/screenshots/main_page_projects.png',
      title: t('screenshots.items.projectDashboard.title'),
      description: t('screenshots.items.projectDashboard.description'),
      alt: t('screenshots.items.projectDashboard.alt')
    },
    {
      src: '/assets/screenshots/annotator_bboxes.png',
      title: t('screenshots.items.boundingBoxAnnotation.title'),
      description: t('screenshots.items.boundingBoxAnnotation.description'),
      alt: t('screenshots.items.boundingBoxAnnotation.alt')
    },
    {
      src: '/assets/screenshots/create_detection_project.png',
      title: t('screenshots.items.objectDetectionSetup.title'),
      description: t('screenshots.items.objectDetectionSetup.description'),
      alt: t('screenshots.items.objectDetectionSetup.alt')
    },
    {
      src: '/assets/screenshots/create_classification_project.png',
      title: t('screenshots.items.classificationProject.title'),
      description: t('screenshots.items.classificationProject.description'),
      alt: t('screenshots.items.classificationProject.alt')
    },
    {
      src: '/assets/screenshots/create_segmentation_project.png',
      title: t('screenshots.items.segmentationTools.title'),
      description: t('screenshots.items.segmentationTools.description'),
      alt: t('screenshots.items.segmentationTools.alt')
    },
    {
      src: '/assets/screenshots/create_project_from_dataset_import.png',
      title: t('screenshots.items.datasetImport.title'),
      description: t('screenshots.items.datasetImport.description'),
      alt: t('screenshots.items.datasetImport.alt')
    }
  ];

  const openModal = (screenshot) => {
    setSelectedImage(screenshot);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="screenshots" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="fade-in">{t('screenshots.title')}</h2>
          <p className="text-large text-muted fade-in fade-in-delay-1">
            {t('screenshots.subtitle')}
          </p>
        </div>

        <div className="screenshots-grid grid grid-3 fade-in fade-in-delay-2">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index} 
              className="screenshot-card card hover-lift"
              onClick={() => openModal(screenshot)}
            >
              <div className="screenshot-image">
                <img 
                  src={screenshot.src} 
                  alt={screenshot.alt}
                  className="img-responsive img-rounded"
                />
                <div className="screenshot-overlay">
                  <span className="view-icon">🔍</span>
                  <span className="view-text">{t('screenshots.modal.clickToEnlarge')}</span>
                </div>
              </div>
              <div className="screenshot-content">
                <h3 className="screenshot-title">{screenshot.title}</h3>
                <p className="screenshot-description">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="screenshots-features fade-in fade-in-delay-3">
          <div className="container">
            <div className="features-highlight grid grid-2">
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-content">
                  <h4>{t('screenshots.highlights.lightningFast.title')}</h4>
                  <p>{t('screenshots.highlights.lightningFast.description')}</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🎨</div>
                <div className="highlight-content">
                  <h4>{t('screenshots.highlights.intuitiveDesign.title')}</h4>
                  <p>{t('screenshots.highlights.intuitiveDesign.description')}</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🔧</div>
                <div className="highlight-content">
                  <h4>{t('screenshots.highlights.professionalTools.title')}</h4>
                  <p>{t('screenshots.highlights.professionalTools.description')}</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">📱</div>
                <div className="highlight-content">
                  <h4>{t('screenshots.highlights.responsiveLayout.title')}</h4>
                  <p>{t('screenshots.highlights.responsiveLayout.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for enlarged screenshots */}
      {selectedImage && (
        <div className="screenshot-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="modal-image"
            />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Screenshots;