import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import PlaceholderPage from './pages/PlaceholderPage';
import CareersPage from './pages/CareersPage';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/features" element={<FeaturesPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/team" element={<TeamPage />} /> */}

        {/* Legal pages */}
        <Route path="/terms" element={<LegalPage />} />
        <Route path="/privacy" element={<LegalPage />} />
        <Route path="/cookies" element={<LegalPage />} />

        {/* Custom pages */}
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/press" element={<NewsPage />} />
        <Route path="/case-studies" element={<PlaceholderPage />} />
        <Route path="/white-papers" element={<PlaceholderPage />} />
        <Route path="/blog" element={<PlaceholderPage />} />
        <Route path="/documentation" element={<PlaceholderPage />} />
        <Route path="/api" element={<PlaceholderPage />} />

        {/* Catch all route for 404 */}
        <Route path="*" element={<PlaceholderPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;