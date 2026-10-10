import React, { useRef, useState } from 'react';
import Reveal from './AnimatedSection';

interface Prior {
  title: string;
  company: string;
  period: string;
  text: string;
}

interface Stop {
  id: string;
  short: string;
  when: string;
  title: string;
  at: string;
  period: string;
  bullets?: string[];
  tech?: string[];
  prior?: Prior[];
  live?: boolean;
}

const STOPS: Stop[] = [
  {
    id: 'before',
    short: 'Before Amazon',
    when: '2018 to 2022',
    title: 'Before Amazon',
    at: 'Support, recruiting and real estate',
    period: 'Feb 2018 to Feb 2022',
    prior: [
      { title: 'Realtor', company: 'Self-employed', period: 'Jul 2020 to Feb 2022', text: 'Listed and closed sales for 20+ properties on communication and negotiation.' },
      { title: 'HR Generalist', company: 'MeFy Care', period: 'Jun 2019 to Jul 2020', text: 'Ran employee records and onboarding, and helped cut time-to-hire by 30% working with the directors.' },
      { title: 'Jio Advisor', company: 'Concentrix', period: 'Feb 2018 to Jun 2018', text: 'Resolved customer account issues and kept a 95% satisfactory resolution rate.' },
    ],
  },
  {
    id: 'device',
    short: 'Device Associate',
    when: '2022',
    title: 'Device Associate',
    at: 'Amazon',
    period: 'Feb 2022 to Nov 2024',
    bullets: [
      'Ran detailed test protocols on Fire TV and Fire tablet products for content and compliance checks.',
      'Compared Amazon Appstore apps on Fire tablets with their Google Play and App Store versions for matching features and pricing, working in agile sprints tracked in Jira.',
      'Set up early regression suites with Python and Selenium, and logged defects in Jira.',
    ],
    tech: ['Selenium', 'Python', 'Java', 'Jira', 'Linux', 'QA automation'],
  },
  {
    id: 'senior',
    short: 'Senior Device Associate',
    when: '2024',
    title: 'Senior Device Associate',
    at: 'Amazon, on Amazon Luna from Sep 2025',
    period: 'Dec 2024 to Apr 2026',
    bullets: [
      'Wrote test scripts and automation frameworks with Selenium WebDriver, Java and Python.',
      'Ran regression campaigns across Fire TV devices and non-Amazon devices, with test runs organised in TestRail and defects tracked in Jira.',
      'Joined Amazon Luna in Sep 2025 and moved into incident response and release days.',
      'Started StepWise to turn recorded browser workflows into SOP documents.',
    ],
    tech: ['Selenium', 'Python', 'Java', 'TestRail', 'Jira', 'QA automation'],
  },
  {
    id: 'support',
    short: 'Support Engineer II',
    when: 'Now',
    title: 'Support Engineer II, Amazon Luna',
    at: "Amazon's cloud gaming service, Bengaluru",
    period: 'Support Engineer from Apr 2026. Support Engineer II since Oct 2026.',
    live: true,
    bullets: [
      'On call for Amazon Luna, handling high-severity incidents against strict response times.',
      'Run release days for a major live-service game on the platform: the go or no-go call, player-facing alerts, and checks once it ships.',
      'Triage automated streaming-quality alarms and separate noise from real impact on players.',
      'Dig into player session logs to find the cause behind reported issues, then hand the findings to the team that owns the fix.',
      'Track game certification with publishers, onboard new games, and help bring the service to new regions.',
      'Build the tools the work was missing. Olivia, Signal and StepWise started here.',
    ],
    tech: ['Incident response', 'On-call', 'Release management', 'AWS', 'Amazon Bedrock', 'Swift', 'Python', 'TypeScript'],
  },
];

const Experience: React.FC = () => {
  const [sel, setSel] = useState(STOPS.length - 1);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const stop = STOPS[sel];

  const onKey = (e: React.KeyboardEvent) => {
    const moves: Record<string, number> = {
      ArrowRight: (sel + 1) % STOPS.length,
      ArrowLeft: (sel - 1 + STOPS.length) % STOPS.length,
      Home: 0,
      End: STOPS.length - 1,
    };
    if (!(e.key in moves)) return;
    e.preventDefault();
    const next = moves[e.key];
    setSel(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <Reveal>
          <h2 className="h2">Where I've <em>worked</em></h2>
          <p className="lede">Over four years at Amazon, from testing Fire TV devices to keeping a cloud gaming service running.</p>
        </Reveal>

        <Reveal>
          <div className="island route" role="tablist" aria-label="Career" onKeyDown={onKey}>
            <span className="route-thumb" aria-hidden="true" style={{ '--i': sel } as React.CSSProperties} />
            {STOPS.map((s, i) => (
              <button
                key={s.id}
                ref={(el) => { tabs.current[i] = el; }}
                type="button"
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={sel === i}
                aria-controls="role-panel"
                tabIndex={sel === i ? 0 : -1}
                onClick={() => setSel(i)}
              >
                <b>{s.short}</b>
                <span className="mono now">
                  {s.live && <span className="live-dot" aria-hidden="true" />}
                  {s.when}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div key={stop.id} id="role-panel" role="tabpanel" tabIndex={0} aria-labelledby={`tab-${stop.id}`} className="role">
          <div>
            <h3 className="role-title">{stop.title}</h3>
            <p className="role-at">{stop.at}</p>
            <p className="mono" style={{ marginTop: '0.5rem', color: 'var(--soft)' }}>{stop.period}</p>
            {stop.tech && (
              <div className="role-chips">
                {stop.tech.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            )}
          </div>
          {stop.bullets ? (
            <ul className="role-list">
              {stop.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          ) : (
            <div className="prior">
              {stop.prior!.map((p) => (
                <div key={p.title} className="island prior-item">
                  <h4>{p.title}, {p.company}</h4>
                  <p className="mono" style={{ color: 'var(--dim)' }}>{p.period}</p>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
