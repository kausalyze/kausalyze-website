import React from 'react';
import Features from '../components/Features/Features';

const FeaturesPage = () => {
  // Scroll to top when the page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-container">
      <div className="features-page-header">
        <div className="container">
          <h1>Features</h1>
          <p className="lead">
            Discover the powerful tools and technologies that make Kausalyze the leading solution for process manufacturing.
          </p>
        </div>
      </div>
      <Features />
    </main>
  );
};

export default FeaturesPage;