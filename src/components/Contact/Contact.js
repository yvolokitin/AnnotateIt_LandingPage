import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    contactType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        contactType: 'general'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactOptions = [
    {
      type: 'support',
      icon: '🛠️',
      title: t('contact.contactOptions.support.title'),
      description: t('contact.contactOptions.support.description'),
      email: 'umno.annotateit@gmail.com'
    },
    {
      type: 'sales',
      icon: '💼',
      title: t('contact.contactOptions.sales.title'),
      description: t('contact.contactOptions.sales.description'),
      email: 'umno.annotateit@gmail.com'
    },
    {
      type: 'feedback',
      icon: '💡',
      title: t('contact.contactOptions.feedback.title'),
      description: t('contact.contactOptions.feedback.description'),
      email: 'umno.annotateit@gmail.com'
    },
    {
      type: 'general',
      icon: '📧',
      title: t('contact.contactOptions.general.title'),
      description: t('contact.contactOptions.general.description'),
      email: 'umno.annotateit@gmail.com'
    }
  ];

  return (
    <section id="contact" className="section bg-gray">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="fade-in">{t('contact.title')}</h2>
          <p className="text-large text-muted fade-in fade-in-delay-1">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section fade-in fade-in-delay-2">
            <div className="contact-options">
              <h3 className="contact-options-title">{t('contact.contactOptions.title')}</h3>
              <div className="contact-options-grid">
                {contactOptions.map((option, index) => (
                    <div key={index} className="contact-option-card">
                      <div className="option-icon">{option.icon}</div>
                      <div className="option-content">
                        <h4 className="option-title">{option.title}</h4>
                        <p className="option-description">{option.description}</p>
                        <a href={`mailto:${option.email}`} className="option-email">
                          {option.email}
                        </a>
                      </div>
                    </div>
                ))}
              </div>
            </div>

          </div>

          <div className="contact-info-section fade-in fade-in-delay-2">
            <div className="contact-info">
              <h3 className="contact-info-title">{t('contact.otherWays.title')}</h3>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">🌐</div>
                  <div className="method-content">
                    <h4>{t('contact.otherWays.documentation.title')}</h4>
                    <p>{t('contact.otherWays.documentation.description')}</p>
                    <a href="#" className="method-link">{t('contact.otherWays.documentation.linkText')}</a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">💬</div>
                  <div className="method-content">
                    <h4>{t('contact.otherWays.community.title')}</h4>
                    <p>{t('contact.otherWays.community.description')}</p>
                    <a href="#" className="method-link">{t('contact.otherWays.community.linkText')}</a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">📺</div>
                  <div className="method-content">
                    <h4>{t('contact.otherWays.youtube.title')}</h4>
                    <p>{t('contact.otherWays.youtube.description')}</p>
                    <a href="https://www.youtube.com/@AnnotateIt.UmnoAI" target="_blank" rel="noopener noreferrer" className="method-link">{t('contact.otherWays.youtube.linkText')}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;