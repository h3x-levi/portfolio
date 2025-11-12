
import React, { useState, useEffect, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className = '' }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id={id}
      className={`py-20 md:py-24 transition-all duration-700 ease-out ${className} ${
        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
