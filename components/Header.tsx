import React, { useState } from 'react';
import type { NavLink } from '../types';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80; // Approximate height of the sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const renderNavLinks = (links: NavLink[], isMobile: boolean) => (
    <ul className={`flex ${isMobile ? 'flex-col items-center space-y-4 py-8' : 'hidden md:flex md:items-center md:space-x-8'}`}>
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            onClick={handleNavClick}
            className="text-lg font-medium text-white hover:text-campaign-red transition-colors duration-300"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 bg-campaign-dark bg-opacity-90 backdrop-blur-sm shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white">
            আসিফ ২০২৫
          </a>
          
          <div className="hidden md:flex items-center space-x-4">
            {renderNavLinks(NAV_LINKS, false)}
            <a href="#get-involved" onClick={handleNavClick} className="bg-campaign-red text-white font-bold py-2 px-6 rounded-md hover:bg-red-700 transition-colors duration-300">
              যোগ দিন
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            {renderNavLinks(NAV_LINKS, true)}
            <div className="text-center mt-4">
              <a href="#get-involved" onClick={handleNavClick} className="bg-campaign-red text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors duration-300 w-full inline-block">
                যোগ দিন
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;