import React from 'react';
import './ValueProposition.css';

const ValueProposition = () => {
  return (
    <section id="value-proposition" className="value-proposition">
      <div className="container">
        <div className="section-title">
          <h2>Find the Root Cause, Every Time</h2>
          <p className="section-subtitle">
            Kausalyze helps teams identify the true sources of problems, not just the symptoms
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <div className="value-content">
              <h3>Accelerate Problem Solving</h3>
              <p>Cut investigation time by quickly identifying the root causes behind complex system issues.</p>
            </div>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <div className="value-content">
              <h3>Visualize Complex Relationships</h3>
              <p>Turn complex data into insights with causal graphs that make relationships and dependencies clear and actionable.</p>
            </div>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="value-content">
              <h3>Prevent Recurring Issues</h3>
              <p>Eliminate trial-and-error approaches by targeting the true causes of problems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;