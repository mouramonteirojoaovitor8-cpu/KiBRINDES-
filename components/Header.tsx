import React, { useState } from 'react';
import { Page, PageId } from '../types';

interface HeaderProps {
  pages: Page[];
  activePage: PageId;
  setActivePage: (pageId: PageId) => void;
  isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = ({ pages, activePage, setActivePage, isAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const visiblePages = pages.filter(page => page.id !== 'products' || isAuthenticated);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-md fixed w-full z-50">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActivePage('home')}>
          <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 100 100" role="img" aria-label="Ki Brindes Logo">
            <path d="M62.9,0 L4.8,50 L62.9,100 H79.7 L21.6,50 L79.7,0 H62.9Z" fill="#DC2626"/>
            <path d="M0,0 H42.3 L0,29 V0Z" fill="#2563EB"/>
            <path d="M0,100 H42.3 L0,71 V100Z" fill="#2563EB"/>
          </svg>
          <div className="flex items-baseline">
            <span className="text-2xl font-semibold text-gray-800">Ki</span>
            <span className="text-2xl font-black text-gray-900 tracking-wide">BRINDES</span>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {visiblePages.map((page) => (
            <button
              key={page.id}
              onClick={() => setActivePage(page.id)}
              className={`text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 relative ${
                activePage === page.id ? 'text-red-600' : ''
              }`}
            >
              {page.label}
              {activePage === page.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
              )}
            </button>
          ))}
        </nav>

        <button 
          className="md:hidden text-gray-900 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-8 py-4 space-y-4">
            {visiblePages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  setActivePage(page.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 text-lg ${
                  activePage === page.id 
                    ? 'bg-red-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100 hover:pl-6'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;