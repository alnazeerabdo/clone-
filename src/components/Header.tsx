import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-black rounded-full"></div>
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-900">
                UIXSHUVO
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              ABOUT
            </a>
            <a href="#tour" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              TOUR
            </a>
            <a href="#package" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              PACKAGE
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Book Trip Button */}
          <div className="hidden md:block">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Book Trip
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                ABOUT
              </a>
              <a href="#tour" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                TOUR
              </a>
              <a href="#package" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                PACKAGE
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                CONTACT
              </a>
              <button className="w-full mt-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Book Trip
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;