import React, { useEffect, useRef, useState } from 'react';
import { Icons, EMAIL, SOCIALS } from './icons';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<'idle' | 'done' | 'failed'>('idle');
  const reset = useRef<number>(undefined);
  useEffect(() => () => window.clearTimeout(reset.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied('done');
    } catch {
      setCopied('failed');
    }
    window.clearTimeout(reset.current);
    reset.current = window.setTimeout(() => setCopied('idle'), 2200);
  };

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="island contact-island">
          <span className="mascot" aria-hidden="true" />
          <h2 className="contact-title">Let's <em>talk.</em></h2>
          <p className="contact-sub">
            A new role, a project, or a question about something I built. My inbox is open.
          </p>
          <div className="contact-row">
            <a className="pill pill-paper contact-mail" href={`mailto:${EMAIL}`}>
              <Icons.Mail size={20} /> {EMAIL}
            </a>
            <button type="button" className="pill pill-line icon-pill" onClick={copy} aria-label="Copy email address">
              {copied === 'done' ? <Icons.Check size={20} /> : <Icons.Copy size={20} />}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied === 'done' ? 'Email address copied' : copied === 'failed' ? 'Copy failed, select the address instead' : ''}
            </span>
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} className="pill pill-line icon-pill" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={20} />
              </a>
            ))}
          </div>
          {copied === 'failed' && <p className="case-note">Copy did not work in this browser. The address is {EMAIL}.</p>}
          <div className="contact-foot">
            <span>Based in Bengaluru, India.</span>
            <a href="#hero">Back to top <Icons.Up size={14} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
