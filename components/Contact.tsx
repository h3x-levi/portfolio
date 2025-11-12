
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Icons } from './icons';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="text-center max-w-2xl mx-auto">
      <h2 className="text-2xl font-mono text-teal-300 mb-4">05. What's Next?</h2>
      <h3 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Get In Touch</h3>
      <p className="text-slate-400 mb-8">
        My inbox is always open. Whether you have a question, a project proposal, or just want to say hello, I'll do my best to get back to you! I'm actively looking for new opportunities and would be happy to connect.
      </p>
      <a
        href="mailto:luckymondal70@gmail.com"
        className="inline-block px-8 py-4 border border-teal-300 text-teal-300 rounded hover:bg-teal-300/10 transition-colors duration-300 text-lg"
      >
        Say Hello
      </a>
      <div className="flex justify-center space-x-6 mt-16 md:hidden">
        <a href="https://github.com/h3x-levi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors">
          <Icons.GitHub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/iakm/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors">
          <Icons.LinkedIn size={24} />
        </a>
        <a href="https://x.com/_zenith_am" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors">
          <Icons.Twitter size={24} />
        </a>
        <a href="https://www.instagram.com/_zenith_am/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors">
          <Icons.Instagram size={24} />
        </a>
        <a href="mailto:luckymondal70@gmail.com" className="text-slate-400 hover:text-teal-300 transition-colors">
          <Icons.Mail size={24} />
        </a>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
