
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
    <section id="hero" className="min-h-[calc(100vh-6rem)] flex flex-col justify-center items-start">
      <div className="w-full max-w-4xl space-y-6">
        <p className="text-teal-300 text-lg font-mono">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-100 text-shadow leading-tight">
          Akshay Mondal.
        </h1>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-200 text-shadow leading-snug">
          DevOps Engineer • Automation-focused • Cloud-native
        </h2>
        <div className="text-2xl sm:text-4xl text-teal-300 font-mono">
          {typedTitle}
          <span className={`transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </div>
        <p className="text-slate-200 max-w-2xl text-lg leading-relaxed">
          AWS-focused DevOps Engineer with a strong foundation in infrastructure automation and incident management. Proficient in deploying scalable solutions using Terraform, Docker, and Ansible, with hands-on experience managing high-severity incidents for Amazon Luna and cloud platforms. Adept at creating detailed SOPs, optimizing alarm thresholds, and executing seamless software deployments. Continuous learner with certifications in AWS and Terraform, dedicated to enhancing system reliability and minimizing downtime.
        </p>
        <div>
          <a
            href="#projects"
            onClick={handleCTAClick}
            className="inline-block px-8 py-4 border border-teal-300 text-teal-300 rounded hover:bg-teal-300/10 transition-colors duration-300 text-lg"
          >
            Check out my work!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;