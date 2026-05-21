import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className = '' }) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-[opacity,transform] duration-700 ease-out ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
