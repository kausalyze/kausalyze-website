import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ValueProposition from './components/ValueProposition/ValueProposition';
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <ValueProposition />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
