import React from 'react';
import { Icons } from './icons';

const Hero: React.FC = () => {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center pt-24 pb-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-stone-200 dark:border-stone-800 shadow-lg">
              <img
                src="/profile.png"
                alt="Akshay Mondal"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-grow text-center md:text-left space-y-5">
            <div>
              <p className="text-orange-600 dark:text-orange-500 font-medium text-sm tracking-wide mb-2">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 dark:text-stone-100 leading-tight tracking-tight">
                Akshay Mondal
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-stone-500 dark:text-stone-400 mt-2 leading-snug">
                Support Engineer (Luna TechOps)
              </h2>
              <p className="text-stone-500 dark:text-stone-400 text-sm font-medium mt-2">
                at Amazon · Bengaluru, India
              </p>
            </div>

            <p className="text-stone-600 dark:text-stone-300 max-w-xl text-base md:text-lg leading-relaxed">
              Managing the operational backbone of the Amazon Luna game streaming service. Specialized in metric ticket triaging, automated QA workflows, and Fortnite MCM releases with 5+ years of cloud infrastructure and automation experience.
            </p>

            {/* CTA and Social Links */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-2">
              <a
                href="#projects"
                onClick={handleCTAClick}
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold text-sm hover:bg-orange-700 transition-[background-color,transform,box-shadow] duration-200 shadow-sm hover:shadow-md active:scale-95"
              >
                View My Work
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <div className="flex items-center gap-3">
                <a href="https://github.com/h3x-levi" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:border-stone-300 dark:hover:border-stone-700 transition-[color,background-color,border-color,transform] duration-200 active:scale-90">
                  <Icons.GitHub size={18} />
                </a>
                <a href="https://www.linkedin.com/in/iakm/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:border-stone-300 dark:hover:border-stone-700 transition-[color,background-color,border-color,transform] duration-200 active:scale-90">
                  <Icons.LinkedIn size={18} />
                </a>
                <a href="https://x.com/_zenith_am" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:border-stone-300 dark:hover:border-stone-700 transition-[color,background-color,border-color,transform] duration-200 active:scale-90">
                  <Icons.Twitter size={18} />
                </a>
                <a href="mailto:luckymondal70@gmail.com" className="p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:border-stone-300 dark:hover:border-stone-700 transition-[color,background-color,border-color,transform] duration-200 active:scale-90">
                  <Icons.Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;