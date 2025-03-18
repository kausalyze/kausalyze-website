import React from 'react';
import { useLocation } from 'react-router-dom';
import './LegalPage.css';

const LegalPage = () => {
  const location = useLocation();
  const path = location.pathname.substring(1); // Remove the leading slash

  // Determine page title and content based on the route
  let title = '';
  let description = '';

  if (path === 'terms') {
    title = 'Terms of Service';
    description = 'These terms govern your use of Kausalyze services.';
  } else if (path === 'privacy') {
    title = 'Privacy Policy';
    description = '';
  } else if (path === 'cookies') {
    title = 'Cookie Policy';
    description = 'Understand how we use cookies and similar technologies.';
  }

  // Scroll to top when the page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Render privacy policy specific content
  const renderPrivacyPolicy = () => {
    return (
      <>
        <h2 id='privacy-policy'>Privacy Policy</h2>
        <p>
          This privacy notice for Kausalyze ("Company," "we," "us," or "our"),
          describes how and why we might collect, store, use, and/or share
          ("process") your information when you use our services ("Services"),
          such as when you:
        </p>
        <p>
          <li>Visit our website at kausalyze.com, or any website of ours that links
            to this privacy notice</li>
          <li>Engage with us in other related ways ― including any sales,
            marketing, or events</li>
        </p>
        <p>
          <strong>Questions or concerns?</strong> Reading this privacy notice will
          help you understand your privacy rights and choices. If you do not agree
          with our policies and practices, please do not use our Services. If you
          still have any questions or concerns, please contact us at
          lallen6@sheffield.ac.uk
        </p>


        <div className="legal-update-info">
          <p>Last updated: March 2024</p>
          <p><small>This privacy policy was created by Termly's Privacy Policy Generator.</small></p>
        </div>
      </>
    );
  };

  // Render terms of service specific content
  const renderTermsOfService = () => {
    return (
      <>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Kausalyze. By accessing or using our services, you agree to be bound by these terms.
          Please read them carefully before using our platform.
        </p>

        <h2>2. Definitions</h2>
        <p>
          Throughout this document, 'we', 'us' and 'our' refer to Kausalyze. 'Service' refers to our website,
          products, and services accessed through our platform.
        </p>

        <h2>3. Your Agreement</h2>
        <p>
          By using our service, you confirm that you have read, understood, and agree to be bound by these terms.
          If you disagree with any part of these terms, you may not access our service.
        </p>

        <div className="legal-update-info">
          <p>Last updated: March 2024</p>
        </div>
      </>
    );
  };

  // Render cookie policy specific content
  const renderCookiePolicy = () => {
    return (
      <>
        <h2>1. Introduction</h2>
        <p>
          This Cookie Policy explains how Kausalyze uses cookies and similar technologies to recognize you when
          you visit our website. It explains what these technologies are and why we use them, as well as your
          rights to control our use of them.
        </p>

        <h2>2. What Are Cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website.
          Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
          as well as to provide reporting information.
        </p>

        <h2>3. How We Use Cookies</h2>
        <p>
          We use cookies for several reasons. Some cookies are required for technical reasons in order for our Website
          to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to
          track and target the interests of our users to enhance the experience on our Website.
        </p>

        <div className="legal-update-info">
          <p>Last updated: March 2024</p>
        </div>
      </>
    );
  };

  return (
    <main className="page-container">
      <div className="legal-page-header">
        <div className="container">
          <h1>{title}</h1>
          <p className="lead">
            {description}
          </p>
        </div>
      </div>

      <section className="legal-content">
        <div className="container">
          <div className="legal-document">
            {path === 'privacy' && renderPrivacyPolicy()}
            {path === 'terms' && renderTermsOfService()}
            {path === 'cookies' && renderCookiePolicy()}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalPage;