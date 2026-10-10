import React, { useEffect, useRef, useState } from 'react';
import { Icons, EMAIL } from './icons';

const navLinks = [
  { name: 'Work', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'About', id: 'about' },
  { name: 'Certifications', id: 'certifications' },
];

const sectionLabels: Record<string, string> = {
  hero: 'Akshay Mondal',
  what: 'What I do',
  projects: 'Work',
  experience: 'Experience',
  about: 'About',
  certifications: 'Certifications',
  contact: 'Say hello',
};

const bootAssets = ['/work/olivia/mascot-listen.png', '/work/olivia/mascot-speak.png', '/work/signal/board-overview.webp'];

type Phase = 'hidden' | 'docked';
type Stage = 'phone' | 'laptop' | 'desktop' | 'enter' | 'gone';

const stageLabel: Record<string, string> = { phone: 'Mobile', laptop: 'macOS', desktop: 'Web', enter: 'Web' };

const loadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = img.onerror = () => resolve();
    img.src = src;
  });

const Wave: React.FC = () => (
  <span className="wave" aria-hidden="true">
    <i /><i /><i /><i /><i />
  </span>
);

const SEEN_KEY = 'am-booted';

const seenThisSession = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
};

const Boot: React.FC<{ stage: Stage; progress: number }> = ({ stage, progress }) => (
  <div
    className="boot"
    data-stage={stage}
    role="progressbar"
    aria-label="Loading the portfolio"
    aria-valuemin={0}
    aria-valuemax={100}
    aria-valuenow={Math.round(progress * 100)}
  >
    <div className="device" aria-hidden="true">
      <div className="screen">
        <span className="cutout" />
        <div className="screen-ui">
          <span className="mascot" />
          <Wave />
        </div>
      </div>
      <span className="deck" />
      <span className="neck" />
      <span className="foot" />
    </div>
    <p className="boot-cap" aria-hidden="true">
      <b>Akshay Mondal</b>
      <span>
        <span key={stage} className="boot-stage">{stageLabel[stage] ?? 'Web'}</span>
        {' '}{Math.round(progress * 100)}%
      </span>
    </p>
    <span className="boot-bar" aria-hidden="true"><i style={{ '--p': progress } as React.CSSProperties} /></span>
  </div>
);

const Header: React.FC<{ onBooted: () => void }> = ({ onBooted }) => {
  const [skipBoot] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches || !!window.location.hash || seenThisSession(),
  );
  const [phase, setPhase] = useState<Phase>(skipBoot ? 'docked' : 'hidden');
  const [stage, setStage] = useState<Stage>(skipBoot ? 'gone' : 'phone');
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const notchRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (skipBoot) {
      onBooted();
      const target = window.location.hash && document.getElementById(window.location.hash.slice(1));
      if (target) requestAnimationFrame(() => target.scrollIntoView());
      return;
    }
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    const root = document.documentElement;
    root.classList.add('booting');
    let cancelled = false;
    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));
    at(780, () => setStage('laptop'));
    at(1560, () => setStage('desktop'));

    const fontsReady = document.fonts ? document.fonts.ready.then(() => undefined, () => undefined) : Promise.resolve();
    const tasks = [fontsReady, ...bootAssets.map(loadImage)];
    let done = 0;
    tasks.forEach((t) =>
      t.then(() => {
        if (cancelled) return;
        const value = ++done / tasks.length;
        setProgress((p) => Math.max(p, value));
      }),
    );
    const ready = Promise.all([Promise.all(tasks), new Promise((r) => setTimeout(r, 2300))]);
    Promise.race([ready, new Promise((r) => setTimeout(r, 4000))]).then(() => {
      if (cancelled) return;
      setProgress(1);
      at(180, () => {
        try {
          sessionStorage.setItem(SEEN_KEY, '1');
        } catch {
          // private mode: the loader simply plays again next visit
        }
        setStage('enter');
        at(380, () => setPhase('docked'));
        at(620, () => {
          window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
          root.classList.remove('booting');
          onBooted();
        });
        at(1000, () => setStage('gone'));
      });
    });
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      root.classList.remove('booting');
    };
  }, []);

  useEffect(() => {
    const ids = Object.keys(sectionLabels);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      notchRef.current?.querySelector<HTMLButtonElement>('.notch-toggle')?.focus();
    };
    const onDown = (e: PointerEvent) => {
      if (notchRef.current && !notchRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  const [hoverable] = useState(() => window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  const label = sectionLabels[active] ?? 'Akshay Mondal';

  return (
    <>
    {stage !== 'gone' && <Boot stage={stage} progress={progress} />}
    <header
      ref={notchRef}
      className="notch"
      data-phase={phase}
      data-open={open}
      style={{ '--notch-w': open ? '600px' : '292px' } as React.CSSProperties}
      onMouseEnter={hoverable ? () => setOpen(true) : undefined}
      onMouseLeave={hoverable ? () => setOpen(false) : undefined}
      onFocus={(e) => e.target.matches(':focus-visible') && setOpen(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node) && setOpen(false)}
    >
      <div className="notch-bar" inert={phase !== 'docked'}>
        <a href="#hero" className="notch-home" aria-label={`${label}, back to top`}>
          <span className="mascot" aria-hidden="true" />
          <span className="notch-label">
            <span key={active}>{label}</span>
          </span>
        </a>
        <Wave />
        <button
          type="button"
          className="notch-toggle"
          aria-expanded={open}
          aria-controls="notch-links"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icons.Down size={16} />
        </button>
      </div>

      <nav id="notch-links" className="notch-links" aria-label="Primary" inert={phase !== 'docked' || !open}>
        {navLinks.map((l) => (
          <a key={l.id} href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined} onClick={() => setOpen(false)}>
            {l.name}
          </a>
        ))}
        <a className="notch-mail" href={`mailto:${EMAIL}`} onClick={() => setOpen(false)}>
          Email me
        </a>
      </nav>
    </header>
    </>
  );
};

export default Header;
