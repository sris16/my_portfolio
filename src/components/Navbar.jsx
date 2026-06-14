import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import useActiveSection from '../hooks/useActiveSection';

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(['home', 'about', 'projects', 'skills', 'contact']);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <div className="container nav-container">
        <a href="#home" className="logo-text" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
          ⚡ Srisakthi<span className="logo-symbol">.R</span>
        </a>

        {/* Desktop & Mobile Navigation Links */}
        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          {/* Theme Toggle Button */}
          <button
            className="theme-toggle"
            onClick={(e) => toggleTheme(e)}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger Menu for Mobile */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
