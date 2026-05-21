import React, { useState, useEffect } from 'react';
import { Icons } from './icons';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Contact', id: 'contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = navLinks.map((link) => {
      const element = document.getElementById(link.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(link.id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow,padding,backdrop-filter] duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white/90 dark:bg-stone-950/80 backdrop-blur-lg border-b border-stone-200 dark:border-stone-900 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-xl font-extrabold text-stone-900 dark:text-stone-100 hover:text-orange-600 dark:hover:text-orange-500 transition-colors tracking-tight"
        >
          AM<span className="text-orange-600 dark:text-orange-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`transition-colors duration-200 relative pb-1 ${
                activeSection === link.id
                  ? 'text-orange-600 dark:text-orange-400'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500 dark:bg-orange-400 rounded-full"></span>
              )}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-stone-200 dark:border-stone-850 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:border-stone-300 dark:hover:border-stone-700 bg-stone-50 dark:bg-stone-900/40 hover:bg-stone-100 dark:hover:bg-stone-900 transition-[color,background-color,border-color,transform,box-shadow] duration-200 cursor-pointer flex items-center justify-center w-9 h-9 shadow-sm hover:shadow active:scale-95"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Icons.Sun size={18} className="text-orange-500 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Icons.Moon size={18} className="text-stone-600 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>
        </div>

        {/* Mobile menu and theme toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-stone-200 dark:border-stone-850 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:border-stone-300 dark:hover:border-stone-700 bg-stone-50 dark:bg-stone-900/40 hover:bg-stone-100 dark:hover:bg-stone-900 transition-[color,background-color,border-color,transform,box-shadow] duration-200 cursor-pointer flex items-center justify-center w-9 h-9 shadow-sm hover:shadow active:scale-95"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Icons.Sun size={16} className="text-orange-500 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Icons.Moon size={16} className="text-stone-600 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-stone-700 dark:text-stone-300 p-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-stone-850 shadow-xl transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col items-center justify-center space-y-8 text-base font-medium`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            className={`transition-colors ${
              activeSection === link.id ? 'text-orange-600 dark:text-orange-400' : 'text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
            onClick={(e) => handleNavClick(e, link.id)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
