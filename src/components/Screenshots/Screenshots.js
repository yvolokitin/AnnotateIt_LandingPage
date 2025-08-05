import React, { useState } from 'react';
import './Screenshots.css';

const Screenshots = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const screenshots = [
    {
      src: '/assets/screenshots/main_page_projects.png',
      title: 'Project Dashboard',
      description: 'Manage all your annotation projects from a centralized dashboard with project overview and progress tracking.'
    },
    {
      src: '/assets/screenshots/annotator_bboxes.png',
      title: 'Bounding Box Annotation',
      description: 'Precise bounding box annotation tools with real-time preview and label management.'
    },
    {
      src: '/assets/screenshots/create_detection_project.png',
      title: 'Object Detection Setup',
      description: 'Easy project creation wizard for object detection tasks with customizable labels and settings.'
    },
    {
      src: '/assets/screenshots/create_classification_project.png',
      title: 'Classification Project',
      description: 'Set up image classification projects with multi-class and multi-label support.'
    },
    {
      src: '/assets/screenshots/create_segmentation_project.png',
      title: 'Segmentation Tools',
      description: 'Advanced segmentation annotation tools for pixel-perfect polygon annotations.'
    },
    {
      src: '/assets/screenshots/create_project_from_dataset_import.png',
      title: 'Dataset Import',
      description: 'Import existing datasets in various formats to continue or enhance your annotations.'
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
          <h2 className="fade-in">See AnnotateIt in Action</h2>
          <p className="text-large text-muted fade-in fade-in-delay-1">
            Explore the intuitive interface and powerful features through these application screenshots
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
                  alt={screenshot.title}
                  className="img-responsive img-rounded"
                />
                <div className="screenshot-overlay">
                  <span className="view-icon">🔍</span>
                  <span className="view-text">Click to enlarge</span>
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
                  <h4>Lightning Fast</h4>
                  <p>Optimized performance for handling large datasets and complex annotations without lag.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🎨</div>
                <div className="highlight-content">
                  <h4>Intuitive Design</h4>
                  <p>Clean, modern interface designed for productivity and ease of use across all skill levels.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🔧</div>
                <div className="highlight-content">
                  <h4>Professional Tools</h4>
                  <p>Advanced annotation tools with precision controls and quality assurance features.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">📱</div>
                <div className="highlight-content">
                  <h4>Responsive Layout</h4>
                  <p>Adaptive interface that works seamlessly across different screen sizes and devices.</p>
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
              alt={selectedImage.title}
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