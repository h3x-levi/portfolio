
import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', id: 'home' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Contact', id: 'contact' },
];

interface HeaderProps {
    activePage: string;
    setActivePage: (page: 'home' | 'experience' | 'projects' | 'certifications' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: 'home' | 'experience' | 'projects' | 'certifications' | 'contact') => {
    setActivePage(pageId);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-black/50 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
        <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className="text-2xl font-bold text-teal-300 hover:text-teal-400 transition-colors"
        >
          AM
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.id as any); }}
              className={`transition-colors duration-300 ${activePage === link.id ? 'text-teal-300' : 'text-slate-300 hover:text-teal-300'}`}
            >
              <span className="text-teal-300 mr-1">0{index + 1}.</span>
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-teal-300 z-50 relative">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 right-0 h-screen w-full bg-slate-900/98 backdrop-blur-sm transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col items-center justify-start space-y-6 pt-20 px-6`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            className="text-lg text-slate-300 hover:text-teal-300 transition-colors font-mono"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.id as any); }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
