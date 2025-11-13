
import React, { useState, useEffect } from 'react';

interface HeroProps {
  setActivePage: (page: 'projects') => void;
}

const Hero: React.FC<HeroProps> = ({ setActivePage }) => {
  const [typedTitle, setTypedTitle] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullTitle = 'DevOps Engineer | Cypress, Selenium & Python Automation';
  
  useEffect(() => {
    setTypedTitle('');
    const typingInterval = setInterval(() => {
      setTypedTitle((prev) => {
        if (prev.length < fullTitle.length) {
          return fullTitle.substring(0, prev.length + 1);
        } else {
          clearInterval(typingInterval);
          return prev;
        }
      });
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActivePage('projects');
    window.scrollTo(0, 0);
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-32 sm:pt-40 md:pt-0 md:-mt-24">
      <div className="w-full max-w-4xl space-y-6">
        <p className="text-teal-300 text-base sm:text-lg font-mono">Hi, my name is</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-100 text-shadow leading-tight">
          Akshay Mondal.
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-slate-400 text-shadow leading-snug">
          DevOps Engineer • Automation-focused • Cloud-native
        </h2>
        <div className="text-xl sm:text-3xl md:text-4xl text-teal-300 font-mono min-h-[2em] sm:min-h-[1.5em] md:min-h-[1.2em] leading-relaxed">
            <span className="inline-block">{typedTitle}</span>
            <span className={`inline-block transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </div>
        <p className="text-slate-400 max-w-xl text-base sm:text-lg leading-relaxed">
          I combine 5+ years of experience in automation and DevOps with strong skills in Python, Cypress, and Selenium. I focus on building reliable CI/CD pipelines, test automation, and scalable cloud infrastructure that reduces manual work and improves delivery velocity.
        </p>
        <div>
          <a
            href="#projects"
            onClick={handleCTAClick}
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 border border-teal-300 text-teal-300 rounded hover:bg-teal-300/10 transition-colors duration-300 text-sm sm:text-lg"
          >
            Check out my work!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;