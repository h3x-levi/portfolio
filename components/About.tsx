
import React from 'react';
import AnimatedSection from './AnimatedSection';

const skillCategories = {
  'Cloud & Infrastructure': [
    'AWS (EC2, EKS, S3, Lambda)',
    'Azure DevOps',
    'GCP',
    'Terraform',
    'Kubernetes',
    'Docker',
    'Ansible',
    'Infrastructure as Code'
  ],
  'CI/CD & DevOps': [
    'Jenkins',
    'GitLab CI',
    'ArgoCD',
    'Prometheus & Grafana',
    'Automation',
    'DevOps Pipelines'
  ],
  'Testing & QA': [
    'Selenium WebDriver',
    'Cypress',
    'Test Automation',
    'QA Automation',
    'Manual Testing',
    'Regression Testing',
    'Performance Testing',
    'Functional Testing',
    'Agile Testing',
    'Test Planning',
    'Test Execution'
  ],
  'Programming & Scripting': [
    'Python',
    'Java',
    'JavaScript',
    'C',
    'Shell Scripting'
  ],
  'Tools & Platforms': [
    'Jira',
    'Testrail',
    'Maven',
    'Git',
    'Linux',
    'MemoryDB',
    'Databases'
  ],
  'Methodologies': [
    'Agile/Scrum',
    'Quality Assurance',
    'Software Quality',
    'Quality Engineering'
  ]
};

const About: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 relative inline-block">
        <span className="text-teal-300">01.</span> About Me
        <span className="absolute bottom-[-10px] left-0 w-24 h-1 bg-teal-300/50"></span>
      </h2>

      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3 text-slate-100 space-y-6 text-lg">
          <p>
            I am a DevOps engineer and developer with over 5 years of experience in Python, Selenium, and Cypress. Technical precision combined with a drive for creating meaningful, high-quality systems.
          </p>

          <p>
            Beyond my professional work, I actively build personal learning projects that push my technical limits — like <strong>Nova AI</strong>, a fully local intelligent assistant that explores offline contextual learning, and <strong>Bharat Wallet</strong>, an experimental Indian digital wallet that integrates UPI, identity, and card management. These projects reflect my passion for end-to-end architecture, AI integration, and local-first solutions.
          </p>

          <p>
            My toolkit comprises Jira, Testrail, and Agile/Scrum practices that allow for effective collaboration and structured execution across complex projects. Be it automation frameworks, AI-driven workflows, or DevOps pipelines, I am at my best when solving intricate technical puzzles with precision and creativity.
          </p>

          <p>
            I excel in both independent and team-driven environments: continuously learning, iterating, and improving to stay ahead of the curve.
          </p>

          <p className="italic text-teal-300">Always exploring. Always building. Let's connect and create something remarkable.</p>

          <div>
            <h3 className="text-slate-100 font-semibold mb-2">Recent Focus</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-sm text-slate-200">
              <li className="flex items-start"><span className="text-teal-300 mr-2">▹</span> Nova AI — local-first assistant (offline contextual learning)</li>
              <li className="flex items-start"><span className="text-teal-300 mr-2">▹</span> Bharat Wallet — experimental UPI + identity wallet</li>
            </ul>
          </div>

          {/* Endorsements Badge */}
          <div className="mt-4 inline-flex items-center gap-2 bg-teal-400/10 border border-teal-300/30 rounded-full px-4 py-2">
            <svg className="w-5 h-5 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-mono text-teal-300">
              <strong>10+</strong> LinkedIn Skill Endorsements
            </span>
          </div>

          <div className="mt-6">
            <h3 className="text-slate-100 font-semibold mb-4 text-xl">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-teal-300 font-mono text-sm mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-slate-800/50 border border-slate-700 text-slate-200 text-xs font-mono px-3 py-1.5 rounded-md hover:border-teal-300/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-slate-100 font-semibold mb-4">Education</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-slate-200">
              <div className="bg-[#0b1220] p-4 rounded-lg">
                <h4 className="text-teal-300 font-bold">KAZI NAZRUL UNIVERSITY, ASANSOL</h4>
                <p className="text-sm font-mono text-slate-300">BCA, Computer Science — 2016 - 2019</p>
                <p className="text-xs mt-2 text-slate-300">Grade: 7.8</p>
                <p className="text-sm mt-2 text-slate-300">Relevant: Manual Testing, Selenium, Jenkins, Java, Python, Agile</p>
              </div>
              <div className="bg-[#0b1220] p-4 rounded-lg">
                <h4 className="text-teal-300 font-bold">Bidhan Chandra College</h4>
                <p className="text-sm font-mono text-slate-300">Higher Secondary, Pure Science — Jul 2014 - Jul 2016</p>
                <p className="text-xs mt-2 text-slate-300">Grade: 82%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="w-64 rounded-lg overflow-hidden relative border-2 border-teal-300/20">
            <img src="/profile.jpg" alt="Akshay Mondal" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
