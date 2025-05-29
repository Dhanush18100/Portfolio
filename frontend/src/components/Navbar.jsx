import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Navbar.css';

const Navbar = ({ toggleDarkMode, darkMode, onNavClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(() => [
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Skills', id: 'skills' },
    { title: 'Projects', id: 'projects' },
    { title: 'Contact', id: 'contact' },
  ], []); // Empty dependency array since this data never changes

  const handleScroll = useCallback(() => {
    const sections = navItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 100; // Offset for navbar height

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(navItems[i].id);
        break;
      }
    }
  }, [navItems]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (id) => {
    onNavClick(id);
    setMobileMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="nav-content">
        <h1 className="nav-logo">Dhanush</h1>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {navItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="nav-controls">
          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleNavClick(item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.title}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 