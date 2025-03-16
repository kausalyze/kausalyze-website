import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import CausalGraphAnimation from './CausalGraphAnimation';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      // Add animation class after component mounts for entrance animation
      heroRef.current.classList.add('animated');
    }
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1>
            Prevent Downtime Through <span className="text-accent">Root Cause Analysis</span> with Engineering-Led AI
          </h1>
          <p className="hero-subtitle">
            Process manufacturers lose 11% of annual revenue to unplanned downtime. While existing solutions can tell you when equipment will fail, they can't prevent it from happening again. Kausalyze combines engineering expertise with cutting-edge AI to identify true root causes.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">Book a Discovery Call</a>
            <a className="btn btn-secondary" href="#features">Learn More</a>
          </div>
        </div>
        <div className="hero-visual">
          <CausalGraphAnimation />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;