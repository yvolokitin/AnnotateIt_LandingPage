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
      email: 'support@annotateit.app'
    },
    {
      type: 'sales',
      icon: '💼',
      title: 'Sales & Licensing',
      description: 'Enterprise licensing, bulk purchases, and custom solutions',
      email: 'sales@annotateit.app'
    },
    {
      type: 'feedback',
      icon: '💡',
      title: 'Feature Requests',
      description: 'Suggest new features or improvements to AnnotateIt',
      email: 'feedback@annotateit.app'
    },
    {
      type: 'general',
      icon: '📧',
      title: 'General Inquiries',
      description: 'Questions, partnerships, or other general inquiries',
      email: 'hello@annotateit.app'
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
            <div className="contact-form-card card">
              <h3 className="form-title">Send us a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="form-message success">
                  <span className="message-icon">✅</span>
                  <p>Thank you for your message! We'll get back to you within 24 hours.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-message error">
                  <span className="message-icon">❌</span>
                  <p>Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contactType">Contact Type</label>
                  <select
                    id="contactType"
                    name="contactType"
                    value={formData.contactType}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales & Licensing</option>
                    <option value="feedback">Feature Request</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="form-textarea"
                    rows="6"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary btn-lg form-submit ${isSubmitting ? 'loading' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          <div className="contact-info-section fade-in fade-in-delay-3">
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
                <div className="contact-method">
                  <div className="method-icon">📱</div>
                  <div className="method-content">
                    <h4>Social Media</h4>
                    <p>Follow us for updates and announcements</p>
                    <div className="social-links">
                      <a href="#" className="social-link">Twitter</a>
                      <a href="#" className="social-link">LinkedIn</a>
                    </div>
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