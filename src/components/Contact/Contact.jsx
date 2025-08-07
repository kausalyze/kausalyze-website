import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    // Don't prevent default - let the form submit naturally
    setIsSubmitting(true);
    setError(null);

    // The form will be submitted to FormSubmit's endpoint
    // The page will not reload because we're using the _next parameter
    // After form submission, FormSubmit will redirect back to this page

    // Success handling is done via URL parameters on redirect
    // The timeout is just a fallback in case the form submission takes too long
    setTimeout(() => {
      if (isSubmitting) {
        setIsSubmitting(false);
        setError('Request timeout. Please try again or contact us directly.');
      }
    }, 8000);
  };

  // Check for success/error parameters in URL when component mounts
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sent = urlParams.get('sent');
    const error = urlParams.get('error');

    if (sent === 'true') {
      setIsSubmitted(true);
      // Clear URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }

    if (error) {
      setError('There was an error sending your message. Please try again later.');
      // Clear URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-content">
            <h2 className="section-title">Ready to Transform Your Process Manufacturing?</h2>
            <p className="section-subtitle">
              Get in touch with our team to schedule a personalized demo and discover how Kausalyze can help you reduce downtime and optimize your manufacturing processes.
            </p>

            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5902 20.9046 21.7335 20.6422 21.8227C20.3799 21.9119 20.1026 21.9451 19.83 21.92C16.7426 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27097 2.12 4.17C2.09501 3.89903 2.1281 3.62357 2.2169 3.36289C2.3057 3.10221 2.44849 2.86159 2.63589 2.65818C2.82329 2.45478 3.05163 2.29278 3.30587 2.18269C3.56011 2.0726 3.83473 2.01736 4.11 2.02H7.11C7.5953 2.01523 8.06579 2.1916 8.42983 2.51442C8.79387 2.83725 9.03351 3.2809 9.11 3.76C9.23662 4.68007 9.47145 5.58103 9.81 6.44C9.94455 6.76791 9.97366 7.12638 9.89391 7.4713C9.81415 7.81623 9.62886 8.13021 9.36 8.37L8.09 9.64C9.51356 12.1431 11.5568 14.1863 14.06 15.61L15.33 14.34C15.5698 14.0711 15.8838 13.8858 16.2287 13.8061C16.5736 13.7263 16.9321 13.7554 17.26 13.89C18.1189 14.2285 19.0199 14.4634 19.94 14.59C20.4248 14.6666 20.8727 14.9131 21.1956 15.2849C21.5186 15.6567 21.6894 16.1351 21.68 16.63L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4>Book a Call</h4>
                  <p>Schedule a discovery call with our team</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>info@kausalyze.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Sheffield, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Thank you for your message!</h3>
                <p>We've received your inquiry and will get back to you shortly.</p>
              </div>
            ) : (
              <form
                className="contact-form"
                action="https://formsubmit.co/info@kausalyze.com"
                method="POST"
                onSubmit={handleSubmit}
              >
                <h3>Get in Touch</h3>

                {error && (
                  <div className="form-error">
                    <p>{error}</p>
                  </div>
                )}

                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New submission from Kausalyze website!" />
                <input type="hidden" name="_next" value={window.location.href + "?sent=true"} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your process manufacturing needs"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="contact-decor decor-1"></div>
      <div className="contact-decor decor-2"></div>
    </section>
  );
};

export default Contact;