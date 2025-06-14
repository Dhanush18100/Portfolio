import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await axios.post("http://localhost:5000/api/messages", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.status === 201) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: error.response?.data?.message || 'Something went wrong. Please try again.'
      });

      // Clear error after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm currently available for freelance work and full-time positions.
              If you have a project that needs coding or just want to chat, feel free to contact me.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:dhanush.nayak.100@gmail.com">dhanush.nayak.100@gmail.com</a>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:9147755457">+91 9148755457</a>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Manipal, India</span>
              </div>
            </div>

            
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                disabled={status.submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                disabled={status.submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                disabled={status.submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="5"
                disabled={status.submitting}
              ></textarea>
            </div>

            {status.error && (
              <div className="form-message error">
                {status.error}
              </div>
            )}

            {status.submitted && (
              <div className="form-message success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <button 
              type="submit" 
              className={`submit-button ${status.submitting ? 'submitting' : ''}`}
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 