import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-stone-200 dark:border-stone-900 bg-transparent text-stone-500 text-xs font-sans">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-medium text-stone-700 dark:text-stone-300">Akshay Mondal</p>
          <p className="text-stone-400 dark:text-stone-500 mt-1">&copy; {currentYear} — All rights reserved.</p>
        </div>
        <div className="text-center sm:text-right">
          <p className="font-mono text-[10px] text-stone-400 dark:text-stone-500 uppercase tracking-wider">
            Built with React 19 · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
