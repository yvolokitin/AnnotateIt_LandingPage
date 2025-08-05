import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
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
      title: 'Technical Support',
      description: 'Get help with installation, bugs, or technical issues',
      email: 'umno.annotateit@gmail.com'
    },
    {
      type: 'sales',
      icon: '💼',
      title: 'Sales & Licensing',
      description: 'Enterprise licensing, bulk purchases, and custom solutions',
      email: 'umno.annotateit@gmail.com'
    },
    {
      type: 'feedback',
      icon: '💡',
      title: 'Feature Requests',
      description: 'Suggest new features or improvements to AnnotateIt',
      email: 'umno.annotateit@gmail.com'
    },
    {
      type: 'general',
      icon: '📧',
      title: 'General Inquiries',
      description: 'Questions, partnerships, or other general inquiries',
      email: 'umno.annotateit@gmail.com'
    }
  ];

  return (
    <section id="contact" className="section bg-gray">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="fade-in">Get in Touch</h2>
          <p className="text-large text-muted fade-in fade-in-delay-1">
            Have questions, feedback, or need support? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section fade-in fade-in-delay-2">
            <div className="contact-options">
              <h3 className="contact-options-title">Contact Options</h3>
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
              <h3 className="contact-info-title">Other Ways to Connect</h3>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">🌐</div>
                  <div className="method-content">
                    <h4>Documentation</h4>
                    <p>Find answers in our comprehensive documentation</p>
                    <a href="#" className="method-link">View Docs</a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">💬</div>
                  <div className="method-content">
                    <h4>Community Forum</h4>
                    <p>Join discussions with other AnnotateIt users</p>
                    <a href="#" className="method-link">Join Forum</a>
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