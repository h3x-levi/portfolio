import React, { useEffect, useRef, useState, ReactNode } from 'react';

const Reveal: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -12% 0px' },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Reveal;
