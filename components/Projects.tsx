import React from 'react';
import { Project as ProjectType } from '../types';
import AnimatedSection from './AnimatedSection';
import { Icons } from './icons';

// Company projects (work)
const companyProjects: ProjectType[] = [
  {
    title: 'Amazon Luna',
    company: 'Amazon',
    period: 'Feb 2022 - Present',
    logo: '/amazon.svg',
    description:
      'Amazon Luna is a cloud gaming platform available on Windows, Mac, Amazon Fire TV, iOS and Android. The platform is powered by AWS and integrates with Twitch. Responsibilities include automation and QA testing across devices and ensuring platform compatibility.',
    tech: ['Selenium Testing', 'Automation', 'Regression Testing', 'Cypress', 'Python', 'QA Automation'],
  },
  {
    title: 'Parity (Fire Tablet Parity Program)',
    company: 'Amazon',
    period: 'Dec 2022 - Dec 2023',
    logo: '/amazon.svg',
    description:
      'Verified feature parity between Amazon Appstore apps and their counterparts on Google Play / Apple App Store. Used Agile methodology and Jira to manage test assignments and report discrepancies.',
    tech: ['Agile Methodologies', 'Agile Testing', 'Jira', 'Performance Testing'],
  },
];

// Personal / OSS projects
const personalProjects: ProjectType[] = [
  {
    title: 'CI/CD Pipeline for Microservices',
    description:
      'Designed and implemented a complete CI/CD pipeline using GitLab CI for a polyglot microservices application. The pipeline automates code builds, unit/integration testing, containerization with Docker, and blue-green deployments to a Kubernetes (EKS) cluster.',
    tech: ['GitLab CI', 'Docker', 'Kubernetes', 'AWS EKS', 'Helm', 'YAML'],
    githubUrl: '#',
  },
  {
    title: 'IaC for Resilient Web Infrastructure',
    description:
      'Authored Terraform modules to define and provision a scalable and secure three-tier web application infrastructure on AWS. This includes a custom VPC, public/private subnets, security groups, an auto-scaling group for the web tier, and an RDS instance for the database.',
    tech: ['Terraform', 'AWS', 'VPC', 'EC2', 'RDS', 'S3'],
    githubUrl: '#',
  },
  {
    title: 'Containerization of Legacy Application',
    description:
      'Led the initiative to containerize a monolithic Java application using Docker. This effort involved creating optimized Docker images, setting up Docker Compose for local development, and deploying the containerized application to AWS ECS, improving portability and simplifying deployments.',
    tech: ['Docker', 'Java', 'AWS ECS', 'Docker Compose'],
    liveUrl: '#',
  },
  {
    title: 'Centralized Logging & Monitoring Solution',
    description:
      'Deployed a centralized logging stack using EFK (Elasticsearch, Fluentd, Kibana) on Kubernetes to aggregate logs from dozens of services. This provided developers with real-time log analysis capabilities and drastically reduced troubleshooting time.',
    tech: ['EFK Stack', 'Kubernetes', 'Fluentd', 'Elasticsearch', 'Kibana'],
    githubUrl: '#',
  },
];

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div className="bg-[#112240] rounded-lg shadow-lg p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10">
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            {project.logo ? (
              <img src={project.logo} alt={project.company || project.title} className="w-10 h-10 object-contain" />
            ) : (
              <Icons.Award className="w-10 h-10 text-teal-300" />
            )}
            {project.company && <span className="text-sm text-slate-400 font-mono">{project.company}</span>}
          </div>
          <div className="flex items-center space-x-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors">
                <Icons.GitHub size={24} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors">
                <Icons.ExternalLink size={24} />
              </a>
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-300">{project.title}</h3>
        {project.period && <p className="text-xs text-slate-400 font-mono mb-2">{project.period}</p>}
        <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <AnimatedSection id="projects">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 relative inline-block">
        <span className="text-teal-300">03.</span> Things I've Built
        <span className="absolute bottom-[-10px] left-0 w-24 h-1 bg-teal-300/50"></span>
      </h2>
      <h3 className="text-teal-300 font-mono mb-4">Company Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        {companyProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <h3 className="text-teal-300 font-mono mb-4">Personal Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {personalProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;