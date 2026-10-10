import React from 'react';
import Reveal from './AnimatedSection';

const languages = [
  { name: 'Python', where: "Signal's pipeline, IRA AI, test automation" },
  { name: 'TypeScript', where: 'AWS CDK infrastructure, StepWise backend, dashboards' },
  { name: 'Swift', where: 'Olivia and Utter, native macOS' },
  { name: 'JavaScript', where: 'The StepWise extension, web dashboards' },
  { name: 'Kotlin and Smithy', where: 'Service APIs and models' },
  { name: 'Java and Dart', where: 'Selenium suites, Bharat Wallet in Flutter' },
];

const skills = [
  'AWS CDK', 'AWS Lambda', 'DynamoDB', 'Amazon S3', 'EventBridge', 'Amazon Bedrock', 'EKS', 'Terraform', 'Kubernetes', 'Docker', 'Ansible',
  'SwiftUI', 'React', 'Node.js', 'Express', 'Flutter', 'PostgreSQL', 'Bash',
  'Jenkins', 'GitLab CI', 'ArgoCD', 'Prometheus', 'Grafana', 'Selenium', 'Cypress', 'Vitest', 'Jest', 'TestRail', 'Jira',
];

const education = [
  { title: 'BCA, Computer Science', school: 'Kazi Nazrul University, Asansol', period: '2016 to 2019', score: '7.8 GPA' },
  { title: 'Higher Secondary, Pure Science', school: 'Bidhan Chandra College', period: '2014 to 2016', score: '82%' },
];

const capabilities = [
  {
    verb: 'Design',
    text: "Interfaces and the pages around them: Olivia's notch UI and voice states, Signal's dashboard, and the product pages for both.",
    proof: [
      { src: '/work/design/olivia-page.jpg', alt: 'Product page I designed for Olivia', open: 'olivia' },
      { src: '/work/design/signal-page.jpg', alt: 'Product page I designed for Signal', open: 'signal' },
    ],
  },
  {
    verb: 'Build',
    text: 'Native macOS apps in Swift, serverless pipelines on AWS, Chrome extensions and Flutter apps, shipped end to end on my own.',
    proof: [
      { src: '/work/olivia/scr-home.webp', alt: 'Olivia following a coding agent', open: 'olivia' },
      { src: '/work/stepwise/editor.jpg', alt: 'The StepWise document editor', open: 'stepwise' },
    ],
  },
  {
    verb: 'Run',
    text: 'On-call, incidents and release days for a cloud gaming service. The problems I meet there become the next tool.',
    chips: ['On-call', 'Release days', 'Alarm triage', 'Player issue investigation', 'Game certification'],
  },
];

export const Capabilities: React.FC<{ onOpen: (id: string) => void }> = ({ onOpen }) => (
  <section id="what" className="section caps-section" aria-labelledby="what-title">
    <div className="wrap">
      <Reveal>
        <h2 id="what-title" className="h2">What I <em>do</em></h2>
      </Reveal>
      <div className="caps">
        {capabilities.map((c) => (
          <Reveal key={c.verb} className="cap">
            <h3 className="cap-verb">{c.verb}</h3>
            <p className="cap-text">{c.text}</p>
            <div className="cap-proof">
              {c.proof?.map((p) => (
                <button key={p.src} type="button" className="island cap-shot" onClick={() => onOpen(p.open)} aria-label={`${p.alt}. Open the project`}>
                  <img src={p.src} alt="" loading="lazy" />
                </button>
              ))}
              {c.chips?.map((t) => <span key={t} className="chip cap-chip">{t}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const About: React.FC = () => (
  <section id="about" className="section">
    <div className="wrap">
      <div className="about">
        <Reveal>
          <div className="island portrait">
            <img src="/profile.jpg" alt="Akshay Mondal" loading="lazy" />
            <span className="portrait-notch" aria-hidden="true"><span className="live-dot" /></span>
          </div>
        </Reveal>
        <Reveal>
          <h2 className="h2">About <em>me</em></h2>
          <div className="bio" style={{ marginTop: '2rem' }}>
            <p>
              I'm Akshay. By day I help keep Amazon Luna, Amazon's cloud gaming service, running: incidents, release days and the alarms in between.
            </p>
            <p>
              Most of what I build starts with a problem I ran into at work. Olivia came from switching between too many apps. Signal came from players reporting problems in public before anyone filed a ticket.
            </p>
            <p>
              Before Amazon I worked in customer support, recruiting and real estate. I live in Bengaluru, India.
            </p>
          </div>
          <div className="edu">
            {education.map((e) => (
              <div key={e.title} className="island edu-item">
                <h3>{e.title}</h3>
                <p>{e.school}</p>
                <span className="mono">{e.period} · {e.score}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="langs">
        <h3 className="group-title">Languages I write</h3>
        <ul className="lang-list">
          {languages.map((l) => (
            <li key={l.name} className="lang">
              <b>{l.name}</b>
              <span>{l.where}</span>
            </li>
          ))}
        </ul>
        <ul className="tools" aria-label="Tools and platforms">
          {skills.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default About;
