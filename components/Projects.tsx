import React, { useState } from 'react';
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
    title: 'Bharat Wallet',
    description:
      '**[Not Production Ready]** A comprehensive digital wallet application built entirely in **Dart** using the **Flutter framework**. Implements secure local-first architecture with encrypted storage using flutter_secure_storage, Firebase Authentication for user management, and Firestore for metadata synchronization. Features include biometric authentication (fingerprint/face ID) via local_auth, NFC card reading preparation with flutter_nfc_kit, OAuth 2.0 integration for Gmail import using flutter_appauth, real-time location services with geolocator, and Firebase Cloud Messaging for push notifications. State management handled through Riverpod for scalable reactive architecture. Designed with a focus on privacy—sensitive data never leaves the device, only metadata syncs to cloud.',
    tech: ['Dart', 'Flutter', 'Riverpod', 'Firebase Auth', 'Firestore', 'flutter_secure_storage', 'Biometrics', 'NFC', 'OAuth 2.0', 'FCM'],
    githubUrl: 'https://github.com/h3x-levi/Wallet',
    screenshots: [
      '/bharat-wallet/shot_1.png',
      '/bharat-wallet/shot_2.png',
      '/bharat-wallet/shot_3.png',
      '/bharat-wallet/shot_5.png',
      '/bharat-wallet/shot_7.png',
      '/bharat-wallet/shot_8.png',
      '/bharat-wallet/shot_10.png',
    ],
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website built with **React 19.2.0** and **TypeScript** to showcase professional experience, projects, and skills. Developed using **Vite 6.2.0** as the build tool for lightning-fast development and optimized production builds. Features include a custom dark theme with teal accents using **Tailwind CSS 4**, smooth scroll animations, typing animations in the hero section, and a fully responsive design across all devices. Implements component-based architecture with reusable UI components, TypeScript interfaces for type safety, and React Hooks for state management. Deployed on **Vercel** with automatic CI/CD from GitHub. Custom typography using IBM Plex Mono font for a technical, engineering-focused aesthetic.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Hooks', 'Vercel', 'GitHub Actions'],
    githubUrl: 'https://github.com/h3x-levi/portfolio',
    liveUrl: window.location.origin,
    codeSnippet: `// Hero Component with Typing Animation
const Hero: React.FC = ({ setActivePage }) => {
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = 'DevOps Engineer | Automation';
  
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedTitle((prev) => {
        if (prev.length < fullTitle.length) {
          return fullTitle.substring(0, prev.length + 1);
        }
        clearInterval(typingInterval);
        return prev;
      });
    }, 120);
    return () => clearInterval(typingInterval);
  }, []);
  
  return <h2>{typedTitle}</h2>;
};`,
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
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null && project.screenshots) {
      setSelectedImage((selectedImage + 1) % project.screenshots.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && project.screenshots) {
      setSelectedImage((selectedImage - 1 + project.screenshots.length) % project.screenshots.length);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <div className="bg-[#112240] rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10 h-full flex flex-col">
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              {project.logo ? (
                <img src={project.logo} alt={project.company || project.title} className="w-10 h-10 object-contain" />
              ) : (
                <Icons.Award className="w-10 h-10 text-teal-300" />
              )}
              {project.company && <span className="text-sm text-slate-300 font-mono">{project.company}</span>}
            </div>
            <div className="flex items-center space-x-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-teal-300 transition-colors">
                  <Icons.GitHub size={24} />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-teal-300 transition-colors">
                  <Icons.ExternalLink size={24} />
                </a>
              )}
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-300">{project.title}</h3>
          {project.period && <p className="text-xs text-slate-300 font-mono mb-2">{project.period}</p>}
          <p className="text-slate-200 mb-4 text-sm" dangerouslySetInnerHTML={{ __html: project.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>

          {/* Screenshot Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-4 overflow-x-auto">
              <div className="flex gap-2 pb-2">
                {project.screenshots.map((screenshot, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-32 h-64 rounded-lg overflow-hidden border border-slate-700 hover:border-teal-300/50 transition-colors cursor-pointer"
                    onClick={() => openModal(idx)}
                  >
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Snippet */}
          {project.codeSnippet && (
            <div className="mb-4">
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs text-slate-300 font-mono leading-relaxed">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-300 mt-4">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage !== null && project.screenshots && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-teal-300 transition-colors z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          {project.screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white hover:text-teal-300 transition-colors z-10"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div className="max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.screenshots[selectedImage]}
              alt={`${project.title} screenshot ${selectedImage + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-center text-slate-300 mt-4 font-mono text-sm">
              {selectedImage + 1} / {project.screenshots.length}
            </p>
          </div>

          {/* Next Button */}
          {project.screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white hover:text-teal-300 transition-colors z-10"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {companyProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <h3 className="text-teal-300 font-mono mb-4">Personal Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {personalProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;