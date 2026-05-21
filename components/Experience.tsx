import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Role {
  title: string;
  company?: string;
  period: string;
  bullets: string[];
  tech: string[];
}

interface Tab {
  label: string;
  roles: Role[];
}

const TABS: Tab[] = [
  {
    label: 'Amazon',
    roles: [
      {
        title: 'Support Engineer (Luna TechOps)',
        period: 'Sep 2025 – Present · 3 mos',
        bullets: [
          'Manage the operational backbone of the Amazon Luna game streaming service, acting as the operational glue between game developers, infrastructure teams, and players.',
          'Triage automated streaming quality alerts (autocut alarm tickets) via SIM and custom QuickSight metric dashboards, classifying breaches as NOISE, GENUINE ISSUE, or NEEDS REVIEW based on session volumes.',
          'Orchestrate Fortnite release cycles, managing Maintenance Change Management (MCM) tickets, Game Alerts, Slack communications, release-day go/no-go decisions, and post-release validation.',
          'Participate in SLA-driven on-call rotations (handling critical SEV-2 tickets with 4-hr responses, scheduled SEV-3, and SEV-4) using AI-assisted Agentic First Response (AFR) automation for rapid triage.',
          'Track and debug game certification cycles (Pass, Fail, Pass with Exception) via Jira LabCollab ticket workflows, collaborating with DevX, CROPS, and external game publishers.',
          'Perform deep-dive player session log analysis via CTI (Tempo/DevOps/Jumanji) to investigate player-reported issues, routing findings to targeted streaming and commerce teams.',
          'Deploy and provision SIPS streaming infrastructure for new AWS region onboarding, manage game ingestion from GOG platforms via devflow, and coordinate GSE Andon Cord banner outages.',
        ],
        tech: [
          'AWS (S3/EC2)',
          'QuickSight',
          'Jira (LabCollab)',
          'Incident Management',
          'SIPS Onboarding',
          'Fortnite Releases',
          'SLA Ownership',
        ],
      },
      {
        title: 'QA Engineer',
        period: 'Dec 2024 – Sep 2025 · 10 mos',
        bullets: [
          'Crafted robust test scripts and automation structures using Selenium WebDriver, Java, and Python.',
          'Managed regression campaigns on dynamic platform nodes (Fire TV systems and non-Amazon devices).',
          'Configured manual and automated test execution checklists via Testrail and tracked issues in Jira.',
        ],
        tech: ['Selenium', 'Python', 'Java', 'Jira', 'Testrail', 'QA Automation'],
      },
      {
        title: 'Device Associate',
        period: 'Feb 2022 – Dec 2024 · 2 yrs 11 mos',
        bullets: [
          'Executed thorough test protocols on Fire TV products to ensure strict content and compliance verification.',
          'Configured early regression suites using Python/Selenium setups and mapped defects in Jira.',
        ],
        tech: ['Selenium', 'Python', 'Java', 'Jira', 'Linux System', 'QA Automation'],
      },
    ],
  },
  {
    label: 'Prior Experience',
    roles: [
      {
        title: 'HR Generalist',
        company: 'MeFy Care',
        period: 'Jun 2019 – Jul 2020 · 1 yr 2 mos',
        bullets: [
          'Supervised employee folders and onboarding configurations, enhancing operation efficiency.',
          'Collaborated with directors to coordinate candidate pipelines, reducing time-to-hire by 30%.',
        ],
        tech: ['HRIS', 'Onboarding', 'Recruiting'],
      },
      {
        title: 'Realtor',
        company: 'Self-employed',
        period: 'Jul 2020 – Feb 2022 · 1 yr 8 mos',
        bullets: [
          'Listed and completed sales for 20+ properties, utilizing strong communication and negotiation.',
        ],
        tech: ['Client Management', 'Sales', 'Market Analysis'],
      },
      {
        title: 'Jio Advisor',
        company: 'Concentrix',
        period: 'Feb 2018 – Jun 2018 · 5 mos',
        bullets: [
          'Mitigated customer account issues, sustaining a 95% satisfactory resolution benchmark.',
        ],
        tech: ['Customer Support', 'Incident Mitigation'],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

const RoleCard: React.FC<{ role: Role; index: number; isFirst: boolean; total: number }> = ({
  role,
  index,
  isFirst,
  total,
}) => {
  const isLast = index === total - 1;

  return (
    <div className="relative pl-6">
      {/* Vertical connecting line */}
      {total > 1 && (
        <span
          aria-hidden="true"
          className={`absolute left-0 top-0 w-0.5 bg-stone-200 dark:bg-stone-800 ${
            isLast ? 'h-3' : 'h-full'
          }`}
        />
      )}

      {/* Dot marker */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1.5 h-3 w-3 -translate-x-[5px] rounded-full border-2 ${
          isFirst
            ? 'border-orange-600 dark:border-orange-500 bg-orange-600 dark:bg-orange-500'
            : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900'
        }`}
      />

      <div className={`${isLast ? '' : 'pb-8'}`}>
        {/* Role title + company */}
        <h4 className="font-sans text-lg font-bold text-stone-900 dark:text-stone-100">
          {role.title}
          {role.company && (
            <span className="text-orange-600 dark:text-orange-400">
              {' '}
              @ {role.company}
            </span>
          )}
        </h4>

        {/* Period */}
        <p className="mt-0.5 font-mono text-xs text-stone-500 dark:text-stone-400">{role.period}</p>

        {/* Bullets */}
        <ul className="mt-3 space-y-2">
          {role.bullets.map((bullet, bi) => (
            <li key={bi} className="flex gap-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
              <span className="mt-0.5 shrink-0 text-orange-600 dark:text-orange-400" aria-hidden="true">
                ▹
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {role.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-orange-200 dark:border-orange-900/50 bg-orange-50 dark:bg-orange-950/20 px-2.5 py-0.5 font-mono text-xs text-orange-700 dark:text-orange-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = TABS[activeTab];

  return (
    <AnimatedSection id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        {/* ── Section heading ── */}
        <h2 className="mb-12 font-sans text-3xl font-extrabold text-stone-900 dark:text-stone-100 md:text-4xl">
          <span className="text-orange-600">02.</span> Where I&apos;ve Worked
        </h2>

        {/* ── Tab layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-8">
          {/* ── Tabs: horizontal scroll on mobile, vertical on desktop ── */}
          <div
            className="flex md:flex-col overflow-x-auto md:overflow-x-visible gap-0 scrollbar-none"
            role="tablist"
            aria-label="Company tabs"
          >
            {TABS.map((tab, i) => {
              const isActive = i === activeTab;
              return (
                <button
                  key={tab.label}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${i}`}
                  onClick={() => setActiveTab(i)}
                  className={`
                    shrink-0 cursor-pointer text-left font-sans text-sm
                    px-4 py-3 transition-[color,background-color,border-color,transform] duration-200 active:scale-95
                    border-b-2 md:border-b-0 md:border-l-2
                    ${
                      isActive
                        ? 'border-orange-600 dark:border-orange-500 bg-orange-50 dark:bg-orange-950/20 text-orange-700 dark:text-orange-400 font-semibold'
                        : 'border-stone-200 dark:border-stone-850 bg-white dark:bg-stone-900/40 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-200'
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* ── Content panel ── */}
          <div
            key={activeTab}
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-label={currentTab.label}
            className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/60 p-6 md:p-8 animate-tabEnter"
          >
            {currentTab.roles.map((role, ri) => (
              <RoleCard
                key={`${currentTab.label}-${ri}`}
                role={role}
                index={ri}
                isFirst={ri === 0}
                total={currentTab.roles.length}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;