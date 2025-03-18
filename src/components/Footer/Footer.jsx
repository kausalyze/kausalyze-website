import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/kausalyze-logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Function to handle navigation with section scrolling on target page
  const handleNavigation = (e, path, sectionId) => {
    // If we're already on the page with the section to scroll to
    if (location.pathname === path && sectionId) {
      e.preventDefault();
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        const headerHeight = 80; // Approximate header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // If we're already on the page without section, prevent navigation
    else if (location.pathname === path && !sectionId) {
      e.preventDefault();
    }
    // For navigating to a different page, we'll let the default Link behavior handle it
    // No need to do anything special here
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-container">
              <img src={logo} alt="Kausalyze Logo" className="footer-logo" />
            </Link>
            <p className="footer-tagline">
              Engineering-led AI solutions for process manufacturing
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/in/louis-allen-sheff" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://youtu.be/E3uqV3WuI74" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about#about" onClick={(e) => handleNavigation(e, '/about')}>About Us</Link></li>
                <li><Link to="/contact#contact" onClick={(e) => handleNavigation(e, '/contact')}>Contact</Link></li>
                <li><Link to="/careers" onClick={(e) => handleNavigation(e, '/careers')}>Careers</Link></li>
                <li><Link to="/news" onClick={(e) => handleNavigation(e, '/news')}>News</Link></li>
              </ul>
            </div>

            {/* <div className="footer-links-column">
              <h4>Solutions</h4>
              <ul>
                <li><Link to="/features" onClick={(e) => handleNavigation(e, '/features')}>Features</Link></li>
                <li><Link to="/case-studies" onClick={(e) => handleNavigation(e, '/case-studies')}>Case Studies</Link></li>
                <li><Link to="/white-papers" onClick={(e) => handleNavigation(e, '/white-papers')}>White Papers</Link></li>
                <li><Link to="/api" onClick={(e) => handleNavigation(e, '/api')}>API</Link></li>
              </ul>
            </div> */}

            <div className="footer-links-column">
              <h4>Resources</h4>
              <ul>
                {/* <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/documentation">Documentation</Link></li> */}
                <li><Link to="/about#team">Our Team</Link></li>
                <li>
                  <Link
                    to="/about#supporters"
                    onClick={(e) => handleNavigation(e, '/about', 'supporters')}
                  >
                    Our Supporters
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Legal</h4>
              <ul>
                {/* <li><Link to="/terms" onClick={(e) => handleNavigation(e, '/terms')}>Terms of Service</Link></li> */}
                <li><Link to="/privacy#privacy-policy" onClick={(e) => handleNavigation(e, '/privacy')}>Privacy Policy</Link></li>
                {/* <li><Link to="/cookies" onClick={(e) => handleNavigation(e, '/cookies')}>Cookie Policy</Link></li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Kausalyze. All rights reserved.</p>
          <p>Sheffield, United Kingdom</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;