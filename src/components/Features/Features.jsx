import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Powerful Causal Analysis Tools</h2>
          <p className="section-subtitle">
            Process monitoring and optimization solutions backed by engineering expertise
          </p>
        </div>

        <div className="features-container">
          <div className="feature-card">
            <div className="feature-content">
              <h3>Process Monitoring</h3>
              <p>
                Our platform continuously monitors your entire process, analyzing complex interactions between variables to identify potential issues before they impact production.
              </p>
              <ul className="feature-list">
                <li>Real-time data collection and analysis</li>
                <li>Identifies critical process deviations</li>
                <li>Contextualized alerts with prioritization</li>
              </ul>
            </div>
            <div className="feature-image">
              <div className="icon-container">
                <i className="fas fa-chart-line"></i>
              </div>
            </div>
          </div>

          <div className="feature-card reverse">
            <div className="feature-image">
              <div className="icon-container">
                <i className="fas fa-sitemap"></i>
              </div>
            </div>
            <div className="feature-content">
              <h3>Root Cause Analysis</h3>
              <p>
                Our causal AI models help identify not just what's happening in your process, but why it's happening, enabling targeted interventions that save time and resources.
              </p>
              <ul className="feature-list">
                <li>Automated cause-effect relationship mapping</li>
                <li>Ranks potential root causes by impact</li>
                <li>Actionable recommendations for intervention</li>
              </ul>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-content">
              <h3>Performance Optimization</h3>
              <p>
                Leverage our engineering expertise and advanced AI to optimize your entire process, reducing energy consumption, improving yield, and maximizing equipment lifespan.
              </p>
              <ul className="feature-list">
                <li>Identifies improvement opportunities</li>
                <li>Optimizes for multiple KPIs simultaneously</li>
                <li>Continuous learning and improvement</li>
              </ul>
            </div>
            <div className="feature-image">
              <div className="icon-container">
                <i className="fas fa-tachometer-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;