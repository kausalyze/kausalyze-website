import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ValueProposition from '../components/ValueProposition/ValueProposition';
import Features from '../components/Features/Features';
import Contact from '../components/Contact/Contact';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ValueProposition />
      <Features />
      <Contact />
    </main>
  );
};

export default HomePage;