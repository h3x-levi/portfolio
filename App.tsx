import React, { useCallback, useState } from 'react';
import { flushSync } from 'react-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About, { Capabilities } from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const scrollToWork = (id: string, behavior: ScrollBehavior) => {
  const el = document.getElementById(`work-${id}`);
  if (!el) return;
  const top = el.getBoundingClientRect().top;
  if (top < 56 || top > window.innerHeight * 0.45) el.scrollIntoView({ block: 'start', behavior });
};

const App: React.FC = () => {
  const [boot, setBoot] = useState<'pending' | 'done'>('pending');
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleWork = useCallback((id: string | null) => {
    const apply = () => {
      flushSync(() => setOpenId(id));
      if (id) scrollToWork(id, 'instant');
    };
    if (!document.startViewTransition || reduceMotion()) apply();
    else document.startViewTransition(apply);
  }, []);

  const openFromHero = useCallback((id: string) => {
    flushSync(() => setOpenId(id));
    scrollToWork(id, reduceMotion() ? 'instant' : 'smooth');
  }, []);

  const booting = boot === 'pending';

  return (
    <div data-boot={boot}>
      <a className="skip" href="#main" inert={booting}>Skip to content</a>
      <Header onBooted={() => setBoot('done')} />
      <main id="main" inert={booting}>
        <Hero booted={boot === 'done'} onOpen={openFromHero} />
        <Capabilities onOpen={openFromHero} />
        <Projects openId={openId} onToggle={toggleWork} />
        <Experience />
        <About />
        <Certifications />
        <Contact />
      </main>
      <Footer inert={booting} />
    </div>
  );
};

export default App;
