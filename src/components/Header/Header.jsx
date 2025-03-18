import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/kausalyze-logo.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleOutsideClick = (e) => {
      // If the click is not on the menu and not on the toggle button
      if (!e.target.closest('.main-nav') && !e.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Toggle body class to prevent scrolling when menu is open
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="Kausalyze Logo" />
          </Link>
        </div>

        <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
            <li><NavLink to="/about#about" onClick={handleLinkClick}>About</NavLink></li>
            <li><NavLink to="/about#team" onClick={handleLinkClick}>Team</NavLink></li>
            <li><NavLink to="/News" onClick={handleLinkClick}>News</NavLink></li>
            <li><NavLink to="/contact#contact" onClick={handleLinkClick}>Contact</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="/demo" className="btn btn-primary">Schedule Demo</a>
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;