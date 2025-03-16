import React from 'react';
import About from '../components/About/About';

const AboutPage = () => {
  // Scroll to top when the page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-container">
      <div className="about-page-header">
        <div className="container">
          <h1>About Kausalyze</h1>
          <p className="lead">
            Learn more about our team, our story, and our mission to transform process manufacturing.
          </p>
        </div>
      </div>
      <About />
    </main>
  );
};

export default AboutPage;