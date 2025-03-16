import React from 'react';
import Contact from '../components/Contact/Contact';

const ContactPage = () => {
  // Scroll to top when the page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-container">
      <div className="contact-page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="lead">
            Get in touch with our team to learn how we can help optimize your manufacturing process.
          </p>
        </div>
      </div>
      <Contact />
    </main>
  );
};

export default ContactPage;