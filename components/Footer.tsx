
import React from 'react';
import { Icons } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-slate-400 text-sm">
      <div className="hidden md:flex fixed bottom-0 left-12 flex-col items-center space-y-6 after:content-[''] after:w-px after:h-24 after:bg-slate-400 after:block">
        <a href="https://github.com/h3x-levi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors hover:-translate-y-1">
          <Icons.GitHub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/iakm/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors hover:-translate-y-1">
          <Icons.LinkedIn size={24} />
        </a>
      </div>
      <div className="hidden md:flex fixed bottom-0 right-12 flex-col items-center space-y-6 after:content-[''] after:w-px after:h-24 after:bg-slate-400 after:block">
          <a href="mailto:luckymondal70@gmail.com" className="font-mono tracking-widest [writing-mode:vertical-rl] text-slate-400 hover:text-teal-300 transition-colors hover:-translate-y-1">
            luckymondal70@gmail.com
          </a>
      </div>
      <p className="font-mono">Designed & Built by Akshay Mondal</p>
    </footer>
  );
};

export default Footer;
