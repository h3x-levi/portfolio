import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Icons } from './icons';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6 md:px-8 text-center">
        <p className="text-orange-600 dark:text-orange-500 font-semibold text-sm tracking-wide mb-3">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 dark:text-stone-100 mb-6">
          Let's Work Together
        </h2>
        <p className="text-stone-600 dark:text-stone-300 text-base md:text-lg leading-relaxed mb-10">
          I'm always open to discussing new opportunities, interesting projects, or just a friendly chat about engineering and technology. Feel free to reach out.
        </p>

        <a
          href="mailto:luckymondal70@gmail.com"
          className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold text-sm hover:bg-orange-700 transition-colors shadow-sm hover:shadow-md active:scale-[0.98]"
        >
          <Icons.Mail size={18} />
          <span className="ml-2">Say Hello</span>
        </a>

        <div className="flex justify-center gap-4 mt-8">
          <a href="https://github.com/h3x-levi" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg text-stone-400 dark:text-stone-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            <Icons.GitHub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/iakm/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg text-stone-400 dark:text-stone-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            <Icons.LinkedIn size={20} />
          </a>
          <a href="https://x.com/_zenith_am" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg text-stone-400 dark:text-stone-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            <Icons.Twitter size={20} />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
