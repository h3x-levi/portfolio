import React, { useEffect, useRef, useState } from 'react';
import Reveal from './AnimatedSection';
import { Icons } from './icons';

interface Shot {
  src: string;
  alt: string;
}

interface Work {
  id: string;
  title: string;
  one: string;
  where: string;
  period: string;
  span: number;
  h: string;
  art: 'olivia' | 'signal' | 'stepwise' | 'dictate' | 'phones' | 'wide';
  label?: string;
  summary: string;
  steps: { label: string; text: string }[];
  stack: string[];
  shots?: Shot[];
  video?: { src: string; poster: string };
  links?: { label: string; href: string }[];
  privateRepo?: boolean;
  note?: string;
}

const atWork: Work[] = [
  {
    id: 'olivia',
    title: 'Olivia',
    one: 'A voice-first AI assistant that lives in the MacBook notch.',
    where: 'Amazon',
    period: '2026',
    span: 7,
    h: 'clamp(36rem, 40vw, 54rem)',
    art: 'olivia',
    summary:
      'Olivia started as a learning project with one question behind it: why keep switching apps when anything with an API could be reached from one small assistant? She listens, talks back, sees the screen and acts on the desktop, and she asks first before doing anything risky.',
    steps: [
      { label: 'Talks', text: 'Speech to speech with Amazon Nova 2 Sonic, in seven voice styles. No typing needed.' },
      { label: 'Sees', text: 'Reads what is on screen, so a question can be about the window you are looking at.' },
      { label: 'Acts', text: 'Clicks, types and opens apps on the desktop. Anything risky waits for your OK.' },
      { label: 'Guides', text: 'Walks you through a procedure by moving her mascot to the right button for each step.' },
      { label: 'Connects', text: 'Reaches your tools through their APIs, the apps on your Mac, and coding agents like Claude Code and Codex.' },
      { label: 'Keeps going', text: 'Cloud jobs and routines keep running when the Mac is closed.' },
    ],
    stack: ['Swift', 'SwiftUI', 'AppKit', 'Amazon Nova 2 Sonic', 'Amazon Bedrock', 'AWS CDK', 'Accessibility APIs'],
    shots: [
      { src: '/work/olivia/scr-voice.webp', alt: 'Olivia in the notch, resting' },
      { src: '/work/olivia/scr-voice-listen.webp', alt: 'Olivia listening in voice mode' },
      { src: '/work/olivia/scr-home.webp', alt: 'Notch home following a coding agent at work' },
      { src: '/work/olivia/scr-onmac.webp', alt: 'Now playing and Mac apps inside the notch' },
      { src: '/work/olivia/scr-notice.webp', alt: 'A coding agent finished: a notice with Dismiss and Open' },
      { src: '/work/olivia/scr-routines.webp', alt: 'Cloud jobs with scheduled routines' },
      { src: '/work/olivia/scr-settings-voice.webp', alt: 'Voice settings: style, pitch, speed and warmth' },
      { src: '/work/olivia/scr-settings-mascot.webp', alt: 'Mascot settings: states, moods and reactions' },
      { src: '/work/design/olivia-page.jpg', alt: 'The Olivia product page, which I designed and built' },
    ],
    note: "Mascot based on CX ArtLab's open-source agent-robot-avatar.",
  },
  {
    id: 'signal',
    title: 'Signal',
    one: 'Social listening for Amazon Luna. Every public post read, sorted and routed.',
    where: 'Amazon',
    period: '2026',
    span: 5,
    h: 'clamp(36rem, 40vw, 54rem)',
    art: 'signal',
    label: 'Synthetic data',
    summary:
      'Players talk about a service in public long before a ticket arrives. Signal reads those conversations, works out what each post is about and how urgent it is, and puts the urgent ones in front of the team. I built it on my own initiative, end to end.',
    steps: [
      { label: 'Listen', text: 'A scheduled job collects new public community posts and skips the ones it has already seen.' },
      { label: 'Understand', text: 'An LLM on Amazon Bedrock files each post as an issue, operations feedback or community talk, and rates its severity.' },
      { label: 'Route', text: "Urgent posts go straight to the team's Slack channel. People can correct a category or severity, and the correction sticks." },
      { label: 'Show', text: 'A live dashboard with search, trends, sentiment per game and incident clusters when several reports point at one problem.' },
    ],
    stack: ['Python', 'AWS Lambda', 'Amazon EventBridge', 'Amazon DynamoDB', 'Amazon S3', 'Amazon Bedrock', 'AWS CDK', 'TypeScript', 'Slack'],
    shots: [
      { src: '/work/signal/board-overview.webp', alt: 'Signal overview: flagged posts, open issues and a correlated incident' },
      { src: '/work/signal/board-issues.webp', alt: 'Issue records ranked by severity' },
      { src: '/work/signal/board-insights.webp', alt: 'Insights: feedback volume by day, source mix and sentiment per game' },
      { src: '/work/design/signal-page.jpg', alt: 'The Signal product page, which I designed and built' },
    ],
    note: 'Screens show a reference space with synthetic data.',
  },
  {
    id: 'stepwise',
    title: 'StepWise',
    one: 'A Chrome extension that turns a browser workflow into a finished SOP document.',
    where: 'Amazon',
    period: 'Since Dec 2024',
    span: 12,
    h: 'clamp(28rem, 30vw, 44rem)',
    art: 'stepwise',
    label: 'Fictional demo',
    summary:
      'Writing a standard operating procedure by hand means dozens of screenshots and a lot of copy and paste. StepWise records the workflow as you click through it and drafts the whole document, ready to edit and export.',
    steps: [
      { label: 'Record', text: 'Captures clicks, inputs and navigation across tabs with screenshots, and masks sensitive data as it goes.' },
      { label: 'Structure', text: 'Groups steps by page and spots patterns like form fills, dropdowns and submits, so the AI gets the shape of the task, not a flat list.' },
      { label: 'Write', text: 'A Node.js service sends that structure to Amazon Bedrock to draft the SOP, with a plain fallback when AI is unavailable.' },
      { label: 'Edit', text: 'A Word-style editor in the side panel, then export to DOCX, PDF, HTML or Markdown.' },
      { label: 'Update', text: 'Updates itself through a native messaging host instead of a web store.' },
    ],
    stack: ['JavaScript (MV3)', 'TypeScript', 'Node.js', 'Express', 'Amazon Bedrock', 'PostgreSQL', 'Amazon S3', 'Vitest', 'Jest'],
    shots: [
      { src: '/work/stepwise/sidepanel.jpg', alt: 'The StepWise side panel recording a workflow, docked beside the page' },
      { src: '/work/stepwise/editor.jpg', alt: 'The StepWise editor: captured steps, the drafted SOP and the ribbon' },
      { src: '/work/stepwise/slides.jpg', alt: 'The same workflow as a slide deck, one slide per step' },
      { src: '/work/stepwise/capture.jpg', alt: 'A captured step with the clicked element highlighted' },
      { src: '/work/stepwise/editor-light.jpg', alt: 'The editor in the light theme' },
      { src: '/work/stepwise/sidepanel-idle.jpg', alt: 'The side panel before recording starts' },
    ],
    note: 'Screens show a fictional workflow in a demo app.',
  },
];

const onMyOwn: Work[] = [
  {
    id: 'ira',
    title: 'IRA AI',
    one: 'An offline AI assistant with voice, memory and a live dashboard.',
    where: 'Personal',
    period: 'Closed source',
    span: 7,
    h: 'clamp(30rem, 33vw, 46rem)',
    art: 'wide',
    summary:
      'A local assistant written in Python that wakes on its name, answers out loud and remembers what you talked about, with every reply streamed to a dashboard.',
    steps: [
      { label: 'Wake', text: 'Porcupine wake word, SpeechRecognition for speech to text, pyttsx3 to speak.' },
      { label: 'Understand', text: 'A custom spaCy pipeline and Sentence-Transformers for semantic memory retrieval.' },
      { label: 'Remember', text: 'DuckDB vectors, SQLite and LMDB caching keep context between sessions.' },
      { label: 'Stream', text: 'FastAPI and WebSockets stream replies to the dashboard as they form.' },
    ],
    stack: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'DuckDB', 'SQLite', 'WebSockets', 'Porcupine', 'spaCy'],
    video: { src: '/ira-ai/demo.mp4', poster: '/ira-ai/dashboard_1.jpg' },
    shots: [
      { src: '/ira-ai/dashboard_3.jpg', alt: 'IRA AI dashboard' },
      { src: '/ira-ai/dashboard_1.jpg', alt: 'IRA AI dashboard, conversation view' },
      { src: '/ira-ai/dashboard_2.jpg', alt: 'IRA AI dashboard, system view' },
      { src: '/ira-ai/keyframe_1.jpg', alt: 'IRA AI demo frame' },
      { src: '/ira-ai/keyframe_2.jpg', alt: 'IRA AI demo frame' },
      { src: '/ira-ai/keyframe_3.jpg', alt: 'IRA AI demo frame' },
    ],
  },
  {
    id: 'wallet',
    title: 'Bharat Wallet',
    one: 'A local-first digital wallet app, built in Flutter.',
    where: 'Personal',
    period: 'Open source',
    span: 5,
    h: 'clamp(30rem, 33vw, 46rem)',
    art: 'phones',
    summary:
      'An experiment in what a careful Indian digital wallet could feel like: quick sign-in, tap to pay, and data that stays encrypted on the device.',
    steps: [
      { label: 'Sign in', text: 'Firebase Auth with biometric unlock and OAuth 2.0 flows.' },
      { label: 'Pay', text: 'NFC payments and UPI-style payment mock-ups.' },
      { label: 'Store', text: 'Local-first, with encrypted on-device data and secure storage.' },
      { label: 'Build', text: 'Flutter and Dart, with Riverpod for state.' },
    ],
    stack: ['Dart', 'Flutter', 'Riverpod', 'Firebase', 'Biometrics', 'NFC', 'OAuth 2.0'],
    shots: [
      { src: '/bharat-wallet/shot_3.jpg', alt: 'Bharat Wallet home screen' },
      { src: '/bharat-wallet/shot_5.jpg', alt: 'Bharat Wallet payment screen' },
      { src: '/bharat-wallet/shot_7.jpg', alt: 'Bharat Wallet cards screen' },
      { src: '/bharat-wallet/shot_overview.jpg', alt: 'Bharat Wallet screens overview' },
      { src: '/bharat-wallet/shot_8.jpg', alt: 'Bharat Wallet screen' },
      { src: '/bharat-wallet/shot_10.jpg', alt: 'Bharat Wallet settings screen' },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/h3x-levi/Wallet' }],
  },
  {
    id: 'utter',
    title: 'Utter',
    one: 'Native macOS dictation. Speak, and clean text lands wherever you are typing.',
    where: 'Personal',
    period: 'Open source soon',
    span: 5,
    h: 'clamp(22rem, 24vw, 34rem)',
    art: 'dictate',
    label: 'Illustration',
    summary:
      'A small Swift app with no third-party dependencies. I am preparing it for an open-source release on GitHub, with a bigger update planned.',
    steps: [
      { label: 'Hear', text: 'Voice activity detection knows when you start and stop talking.' },
      { label: 'Transcribe', text: 'Whisper Large V3 on Amazon SageMaker real-time inference.' },
      { label: 'Clean up', text: 'Amazon Bedrock tidies the text, with requests signed using AWS Signature V4.' },
      { label: 'Type', text: 'Accessibility APIs place the text in whichever app has focus.' },
    ],
    stack: ['Swift', 'SwiftUI', 'AVFoundation', 'Whisper Large V3', 'Amazon SageMaker', 'Amazon Bedrock', 'AWS SigV4', 'Accessibility APIs'],
    privateRepo: true,
  },
  {
    id: 'downloader',
    title: 'Image Downloader',
    one: 'Find every image on a page and download the ones you want in one go.',
    where: 'Personal',
    period: 'Chrome extension',
    span: 7,
    h: 'clamp(22rem, 24vw, 34rem)',
    art: 'wide',
    summary:
      'A Chrome MV3 extension with smart detection: it scans the page for high-resolution assets, lays them out in a selection grid and packages the download.',
    steps: [
      { label: 'Scan', text: 'Walks the DOM for high-resolution images, including ones hidden behind thumbnails.' },
      { label: 'Pick', text: 'A visual grid to choose exactly which images you want.' },
      { label: 'Download', text: 'Packages everything through the Chrome Downloads API.' },
    ],
    stack: ['JavaScript', 'Chrome Extension API', 'HTML5', 'CSS3', 'Downloads API'],
    shots: [
      { src: '/chrome-extension/chrome-ext-1.jpg', alt: 'Image Downloader selection grid' },
      { src: '/chrome-extension/chrome-ext-2.jpg', alt: 'Image Downloader popup' },
      { src: '/chrome-extension/chrome-ext-3.jpg', alt: 'Image Downloader download options' },
    ],
  },
];

const phrases = [
  'Move standup to ten and send the notes to the team.',
  'Reply to Meera: the fix ships on Thursday.',
  'Remind me to review the release checklist at four.',
];

const Dictation: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer = 0;
    let phrase = 0;
    let chars = 0;
    let running = false;
    const tick = () => {
      const full = phrases[phrase];
      chars += 1;
      setText(full.slice(0, chars));
      if (chars < full.length) timer = window.setTimeout(tick, 45 + Math.random() * 60);
      else
        timer = window.setTimeout(() => {
          phrase = (phrase + 1) % phrases.length;
          chars = 0;
          tick();
        }, 2200);
    };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !running) {
        running = true;
        chars = 0;
        tick();
      } else if (!e.isIntersecting && running) {
        running = false;
        window.clearTimeout(timer);
      }
    });
    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={ref} className="work-art art-dictate" aria-hidden="true">
      <span className="wave"><i /><i /><i /><i /><i /></span>
      <p className="dictate-line">{text}</p>
    </div>
  );
};

const Art: React.FC<{ w: Work }> = ({ w }) => {
  if (w.art === 'olivia')
    return (
      <div className="work-art art-olivia" aria-hidden="true">
        <span className="mascot big-mascot" style={{ '--strip': 'url(/work/olivia/mascot-speak.png)' } as React.CSSProperties} />
        <div className="stack">
          <img src="/work/olivia/scr-voice-listen.webp" alt="" width={1280} height={352} loading="lazy" />
          <img src="/work/olivia/scr-onmac.webp" alt="" width={1280} height={352} loading="lazy" />
        </div>
      </div>
    );
  if (w.art === 'signal')
    return (
      <div className="work-art art-signal" aria-hidden="true">
        <img src="/work/signal/board-overview.webp" alt="" width={2880} height={1800} loading="lazy" />
      </div>
    );
  if (w.art === 'stepwise')
    return (
      <div className="work-art art-stepwise" aria-hidden="true">
        <img src="/work/stepwise/sidepanel.jpg" alt="" width={2000} height={1250} loading="lazy" />
        <img src="/work/stepwise/editor.jpg" alt="" width={2000} height={1250} loading="lazy" />
      </div>
    );
  if (w.art === 'dictate') return <Dictation />;
  if (w.art === 'phones')
    return (
      <div className="work-art art-shots phones" aria-hidden="true">
        {w.shots!.slice(0, 3).map((s) => <img key={s.src} src={s.src} alt="" loading="lazy" />)}
      </div>
    );
  return (
    <div className="work-art art-shots wide" aria-hidden="true">
      <img src={w.shots![0].src} alt="" loading="lazy" />
    </div>
  );
};

const Lightbox: React.FC<{ shots: Shot[]; index: number; onIndex: (i: number) => void; onClose: () => void }> = ({ shots, index, onIndex, onClose }) => {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef(document.activeElement as HTMLElement | null);
  useEffect(() => {
    if (ref.current && !ref.current.open) ref.current.showModal();
  }, []);
  const step = (d: number) => onIndex((index + d + shots.length) % shots.length);
  const close = () => {
    onClose();
    opener.current?.focus({ preventScroll: true });
  };

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label={shots[index].alt}
      onClose={close}
      onClick={(e) => e.target === e.currentTarget && close()}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
      }}
    >
      <button type="button" className="lightbox-btn close" aria-label="Close" onClick={close}>
        <Icons.Close size={18} />
      </button>
      <figure>
        <img key={index} src={shots[index].src} alt={shots[index].alt} />
        <figcaption>
          {shots[index].alt} · {index + 1} of {shots.length}
        </figcaption>
      </figure>
      {shots.length > 1 && (
        <>
          <button type="button" className="lightbox-btn prev" aria-label="Previous image" onClick={() => step(-1)}>
            <Icons.Prev size={18} />
          </button>
          <button type="button" className="lightbox-btn next" aria-label="Next image" onClick={() => step(1)}>
            <Icons.Next size={18} />
          </button>
        </>
      )}
    </dialog>
  );
};

const Case: React.FC<{ w: Work }> = ({ w }) => {
  const shots = w.shots ?? [];
  const [current, setCurrent] = useState(w.video ? -1 : 0);
  const [box, setBox] = useState<number | null>(null);

  return (
    <div id={`case-${w.id}`} className="case">
      <div className="case-copy">
        <p>{w.summary}</p>
        <ol className="case-steps">
          {w.steps.map((s) => (
            <li key={s.label}>
              <b>{s.label}</b>
              <span>{s.text}</span>
            </li>
          ))}
        </ol>
        <div className="case-chips">
          {w.stack.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
        {(w.links || w.privateRepo) && (
          <div className="case-links">
            {w.links?.map((l) => (
              <a key={l.href} className="pill pill-paper" href={l.href} target="_blank" rel="noopener noreferrer">
                <Icons.GitHub size={18} /> {l.label} <Icons.ExternalLink size={14} />
              </a>
            ))}
            {w.privateRepo && (
              <span className="chip"><Icons.Lock size={13} /> Repo private until release</span>
            )}
          </div>
        )}
        {w.note && <p className="case-note">{w.note}</p>}
      </div>

      {(shots.length > 0 || w.video) && (
        <div className="case-media">
          {current === -1 && w.video ? (
            <div className="case-main">
              <video controls preload="none" poster={w.video.poster}>
                <source src={w.video.src} type="video/mp4" />
              </video>
            </div>
          ) : (
            <button type="button" className="case-main" onClick={() => setBox(current)} aria-label={`Enlarge: ${shots[current].alt}`}>
              <img key={current} src={shots[current].src} alt={shots[current].alt} />
            </button>
          )}
          <div className="case-thumbs">
            {w.video && (
              <button type="button" aria-pressed={current === -1} onClick={() => setCurrent(-1)} aria-label="Play demo video">
                <img src={w.video.poster} alt="" loading="lazy" />
              </button>
            )}
            {shots.map((s, i) => (
              <button key={s.src} type="button" aria-pressed={current === i} onClick={() => setCurrent(i)} aria-label={`Show ${s.alt}`}>
                <img src={s.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
      {box !== null && <Lightbox shots={shots} index={box} onIndex={setBox} onClose={() => setBox(null)} />}
    </div>
  );
};

const WorkIsland: React.FC<{ w: Work; open: boolean; onToggle: (id: string | null) => void }> = ({ w, open, onToggle }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const hitRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(open);

  useEffect(() => {
    if (open) closeRef.current?.focus({ preventScroll: true });
    else if (wasOpen.current) hitRef.current?.focus({ preventScroll: true });
    wasOpen.current = open;
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !document.querySelector('dialog[open]')) onToggle(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onToggle]);

  return (
    <article
      id={`work-${w.id}`}
      className="island work"
      data-open={open}
      style={{ '--span': w.span, '--h': w.h, viewTransitionName: `work-${w.id}` } as React.CSSProperties}
    >
      <div className="work-face">
        <div className="work-top">
          <div>
            <h4 className="work-title">{w.title}</h4>
            <p className="work-one">{w.one}</p>
            <p className="work-meta"><span>{w.where}</span><span>{w.period}</span>{w.label && <span className="work-label">{w.label}</span>}</p>
          </div>
          {!open && <span className="work-plus" aria-hidden="true"><Icons.Plus size={18} /></span>}
        </div>
        {!open && <Art w={w} />}
      </div>
      {open ? (
        <>
          <button ref={closeRef} type="button" className="pill pill-paper case-close" onClick={() => onToggle(null)} aria-controls={`case-${w.id}`} aria-expanded="true">
            Close <Icons.Close size={16} />
          </button>
          <Case w={w} />
        </>
      ) : (
        <button ref={hitRef} type="button" className="work-hit" onClick={() => onToggle(w.id)} aria-expanded="false" aria-label={`Open ${w.title}: ${w.one}`} />
      )}
    </article>
  );
};

const Projects: React.FC<{ openId: string | null; onToggle: (id: string | null) => void }> = ({ openId, onToggle }) => {
  const group = (items: Work[]) => (
    <Reveal className="islands">
      {items.map((w) => <WorkIsland key={w.id} w={w} open={openId === w.id} onToggle={onToggle} />)}
    </Reveal>
  );

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <Reveal className="work-head">
          <h2 className="h2">Things I've <em>built</em></h2>
          <p className="lede">Every project sits here as an island. Open one to see how it works and the real screens.</p>
        </Reveal>
        <h3 className="group-title">At Amazon <small className="mono">2024 to now</small></h3>
        {group(atWork)}
        <h3 className="group-title">On my own <small>open source and side projects</small></h3>
        {group(onMyOwn)}
      </div>
    </section>
  );
};

export default Projects;
