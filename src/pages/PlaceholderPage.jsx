import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PlaceholderPage = () => {
  const location = useLocation();
  const path = location.pathname.substring(1); // Remove the leading slash
  const pageName = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '); // Capitalize first letter and replace hyphens

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="placeholder-page">
      <div className="placeholder-container">
        <h1>{pageName}</h1>
        <div className="placeholder-content">
          <p>
            We're currently developing this page to bring you valuable content about {path.replace(/-/g, ' ')}.
          </p>
          <p>
            Please check back soon as we continue to expand our website with more information about our products and services.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PlaceholderPage;