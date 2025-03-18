import React from 'react';
import './CareersPage.css';

const CareersPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="careers-page">
      <div className="container">
        <div className="careers-header">
          <h1>Careers at Kausalyze</h1>
          <div className="section-subtitle">
            Join our team in revolutionizing process manufacturing with AI-powered solutions
          </div>
        </div>

        <div className="careers-content">
          <div className="careers-message">
            <h2>Interested in joining our team?</h2>
            <p>
              While we don't have any open positions at the moment, we're always interested
              in connecting with talented individuals who are passionate about AI and process manufacturing.
            </p>
            <p>
              If you'd like to be considered for future opportunities, please email your CV to:
            </p>
            <div className="contact-email">
              <a href="mailto:lallen6@sheffield.ac.uk">lallen6@sheffield.ac.uk</a>
            </div>
            <p className="careers-note">
              We appreciate your interest in Kausalyze and will keep your information on file for future opportunities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CareersPage;