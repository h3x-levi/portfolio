import React from 'react';
import AnimatedSection from './AnimatedSection';

const skills = [
  { category: 'Cloud & Infra', items: ['AWS (EC2, EKS, S3, Lambda)', 'Azure DevOps', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'Ansible', 'IaC'] },
  { category: 'CI/CD & DevOps', items: ['Jenkins', 'GitLab CI', 'ArgoCD', 'Prometheus & Grafana', 'Pipeline Automation'] },
  { category: 'Testing & QA', items: ['Selenium WebDriver', 'Cypress', 'Test Automation', 'Regression Testing', 'Performance Testing', 'Agile/Scrum', 'Jira', 'Testrail'] },
  { category: 'Scripting & Dev', items: ['Python', 'Java', 'JavaScript', 'Bash', 'React', 'TypeScript'] },
];

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="py-20 md:py-28 bg-stone-100/50 dark:bg-stone-900/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 mb-10">
          <span className="text-orange-600">01.</span> About Me
        </h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <div className="md:col-span-3 space-y-5 text-stone-700 dark:text-stone-300 text-base md:text-lg leading-relaxed">
            <p>
              I am a Support Engineer and TechOps Specialist at Amazon Luna TechOps with over 5 years of experience spanning automated QA frameworks, system operations, and incident response.
            </p>
            <p>
              Beyond my professional career, I actively build personal projects — like <strong className="text-stone-900 dark:text-stone-100 font-semibold">IRA AI</strong>, a local offline assistant for contextual learning, and <strong className="text-stone-900 dark:text-stone-100 font-semibold">Bharat Wallet</strong>, an experimental Indian digital wallet integrating UPI mock-ups and secure biometric authentication.
            </p>
            <p>
              My toolkit includes QuickSight, SIM, Jira LabCollab, Coral Explorer, and Agile/Scrum practices for structured execution across complex systems. Whether it's managing massive game releases, triaging automated alarms, or writing automation scripts, I'm at my best solving intricate operational puzzles.
            </p>
          </div>

          {/* Education */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-200 uppercase tracking-wider">Education</h3>
            
            <div className="bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 shadow-sm">
              <h4 className="text-stone-900 dark:text-stone-100 font-bold text-base">BCA, Computer Science</h4>
              <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">Kazi Nazrul University, Asansol</p>
              <p className="text-stone-400 dark:text-stone-500 text-xs font-mono mt-1">2016 – 2019</p>
              <span className="inline-block mt-2 bg-orange-50 dark:bg-orange-950/20 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/50 rounded font-mono text-xs px-2 py-0.5 font-semibold">
                7.8 GPA
              </span>
            </div>

            <div className="bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 shadow-sm">
              <h4 className="text-stone-900 dark:text-stone-100 font-bold text-base">Pure Science (HS)</h4>
              <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">Bidhan Chandra College</p>
              <p className="text-stone-400 dark:text-stone-500 text-xs font-mono mt-1">2014 – 2016</p>
              <span className="inline-block mt-2 bg-orange-50 dark:bg-orange-950/20 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/50 rounded font-mono text-xs px-2 py-0.5 font-semibold">
                82%
              </span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-sm font-bold text-stone-900 dark:text-stone-200 uppercase tracking-wider mb-6">Core Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group) => (
              <div key={group.category}>
                <h4 className="text-stone-500 dark:text-stone-400 text-xs font-semibold uppercase tracking-wider mb-3">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white dark:bg-stone-900/40 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 text-xs px-3 py-1.5 rounded-lg hover:border-orange-300 dark:hover:border-orange-500 hover:text-orange-700 dark:hover:text-orange-300 transition-[border-color,color] duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
