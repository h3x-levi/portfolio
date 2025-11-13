
import React from 'react';
import AnimatedSection from './AnimatedSection';

const skills = [
  'AWS (EC2, EKS, S3, Lambda)', 'Azure DevOps', 'GCP', 'Terraform',
  'Kubernetes', 'Docker', 'Ansible', 'Python',
  'Jenkins', 'GitLab CI', 'ArgoCD', 'Prometheus & Grafana'
];

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

          <div className="mt-4">
            <h3 className="text-slate-100 font-semibold mb-2">Technologies</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-sm">
              {skills.map(skill => (
                <li key={skill} className="flex items-center text-slate-200">
                  <span className="text-teal-300 mr-2">▹</span>{skill}
                </li>
              ))}
            </ul>
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
            <img src="/profile.jpg" alt="Akshay Mondal" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
