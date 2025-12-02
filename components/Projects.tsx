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

// Featured project
const featuredProject = {
  title: 'IRA AI',
  description:
    '**[Proprietary/Closed Source]** An advanced, autonomous Artificial Intelligence system engineered in **Python**, serving as a central nervous system for personal automation and data synthesis. \n\n**Core Architecture:**\nBuilt on a **Hybrid Intelligence Model**, utilizing **Hugging Face Transformers** (PyTorch) for local, low-latency NLU and intent classification, seamlessly cascading to **OpenAI GPT-4** or **Anthropic Claude 3.5** for complex reasoning tasks. The system exposes a high-performance API via **FastAPI** and **Uvicorn**, communicating with a React-based frontend over **WebSockets** for real-time streaming.\n\n**Data & Memory:**\nImplements a multi-tiered storage architecture:\n- **DuckDB**: For high-performance vector embeddings and analytical queries.\n- **SQLite (SQLAlchemy)**: For structured transactional data and conversation history.\n- **LMDB**: For lightning-fast key-value caching of context.\n\n**Voice & Sensory:**\nFeatures a sophisticated voice pipeline using **PvPorcupine** for high-accuracy wake-word detection, **SpeechRecognition** for STT, and **pyttsx3** for offline synthesis. The system includes a custom **Spacy** NLP pipeline for entity extraction and **Sentence-Transformers** for semantic memory retrieval.',
  tech: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'DuckDB', 'SQLite', 'WebSockets', 'Porcupine', 'Spacy'],
  screenshots: [
    '/ira-ai/dashboard_1.png',
    '/ira-ai/dashboard_2.png',
    '/ira-ai/dashboard_3.png',
    '/ira-ai/keyframe_1.png',
    '/ira-ai/keyframe_2.png',
    '/ira-ai/keyframe_3.png',
  ],
  videoUrl: '/ira-ai/demo.mp4',
  prominentImage: '/ira-ai/dashboard_3.png',
  codeSnippet: `# IRA AI - Core System Architecture
class IraAI:
    def __init__(self, model_name="facebook/blenderbot-1B-distill"):
        # Core Components
        self.conversation_manager = ConversationManager(max_context_messages=2)
        self.db = DatabaseManager()  # SQLite-based persistence
        self.rule_based_responder = RuleBasedResponder()
        self.prompt_formatter = PromptFormatter()
        
        # AI Engine with Fallback Chain
        self.model_loader = ModelLoader()
        self.device = self._detect_device()  # CPU-optimized
        
        # Personality & Security
        self.personality = {
            "name": "IRA",
            "traits": ["intelligent", "helpful", "mysterious", "powerful"],
            "speaking_style": "confident and knowledgeable"
        }
        self._load_security_settings()  # Content filtering, rate limiting
        
    def generate_response(self, user_input: str) -> str:
        """Generate AI response with multi-layer fallback"""
        # Security filters
        user_input = self._apply_security_filters(user_input)
        
        # Conversation context
        context = self.conversation_manager.get_context()
        
        # Generate with transformer model
        response = self.generator(
            self.prompt_formatter.format(user_input, context),
            max_new_tokens=200,
            temperature=0.8,
            top_p=0.85
        )
        
        return response`,
} as ProjectType;

// Personal / OSS projects
const personalProjects: ProjectType[] = [
  {
    title: 'Bharat Wallet',
    description:
      '**[Not Production Ready]** A comprehensive digital wallet application built entirely in **Dart** using the **Flutter framework**. Implements secure local-first architecture with encrypted storage using flutter_secure_storage, Firebase Authentication for user management, and Firestore for metadata synchronization. Features include biometric authentication (fingerprint/face ID) via local_auth, NFC card reading preparation with flutter_nfc_kit, OAuth 2.0 integration for Gmail import using flutter_appauth, real-time location services with geolocator, and Firebase Cloud Messaging for push notifications. State management handled through Riverpod for scalable reactive architecture. Designed with a focus on privacy—sensitive data never leaves the device, only metadata syncs to cloud.',
    tech: ['Dart', 'Flutter', 'Riverpod', 'Firebase Auth', 'Firestore', 'flutter_secure_storage', 'Biometrics', 'NFC', 'OAuth 2.0', 'FCM'],
    githubUrl: 'https://github.com/h3x-levi/Wallet',
    screenshots: [
      '/bharat-wallet/shot_overview.png',
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
];

const FeaturedProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => {
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
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, project.screenshots]);

  return (
    <>
      <div className="bg-[#112240] rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 mb-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 text-teal-300">
              <Icons.Award size="100%" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
              <span className="text-sm text-teal-300 font-mono">Featured Project</span>
            </div>
          </div>
        </div>

        {project.prominentImage ? (
          /* Layout with Prominent Image */
          <div className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Video */}
              {project.videoUrl && (
                <div className="h-full">
                  <video
                    controls
                    className="w-full h-full object-cover rounded-lg border border-slate-700 shadow-lg"
                    poster={project.screenshots?.[0]}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {/* Prominent Image */}
              <div
                className="h-full rounded-lg border border-slate-700 overflow-hidden shadow-lg cursor-pointer group relative"
                onClick={() => {
                  const idx = project.screenshots?.findIndex(s => s === project.prominentImage);
                  if (idx !== undefined && idx >= 0) openModal(idx);
                }}
              >
                <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors duration-300 z-10 flex items-center justify-center">
                  <div className="text-teal-300 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <Icons.Maximize size={48} />
                  </div>
                </div>
                <img
                  src={project.prominentImage}
                  alt={`${project.title} prominent view`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Thumbnails */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="overflow-x-auto mb-8">
                <div className="flex gap-2 pb-2">
                  {project.screenshots.map((screenshot, idx) => (
                    <div
                      key={idx}
                      className={`flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden border transition-all cursor-pointer ${screenshot === project.prominentImage
                        ? 'border-teal-500 ring-2 ring-teal-500/20'
                        : 'border-slate-700 hover:border-teal-300/50'
                        }`}
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

            {/* Description & Tech */}
            <div>
              <p className="text-slate-200 mb-6 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: project.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }}></p>

              <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-300">
                {project.tech.map((t) => (
                  <span key={t} className="bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Standard Layout */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left: Video & Screenshots */}
            <div>
              {project.videoUrl && (
                <div className="mb-4">
                  <video
                    controls
                    className="w-full rounded-lg border border-slate-700 shadow-lg"
                    poster={project.screenshots?.[0]}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {project.screenshots && project.screenshots.length > 0 && (
                <div className="overflow-x-auto">
                  <div className="flex gap-2 pb-2">
                    {project.screenshots.map((screenshot, idx) => (
                      <div
                        key={idx}
                        className="flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden border border-slate-700 hover:border-teal-300/50 transition-colors cursor-pointer"
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
            </div>

            {/* Right: Description */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-slate-200 mb-6 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: project.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }}></p>

                <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-300 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Code Snippet - Full Width */}
        {project.codeSnippet && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-teal-300">System Architecture</span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
            </div>
            <div className="bg-[#0a192f] border border-slate-700 rounded-lg p-4 overflow-x-auto shadow-inner">
              <pre className="text-xs text-slate-300 font-mono leading-relaxed">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage !== null && project.screenshots && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm overflow-hidden"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={(e) => { e.stopPropagation(); closeModal(); }}
            className="absolute top-6 right-6 bg-slate-800/90 hover:bg-teal-500/20 text-white hover:text-teal-300 transition-all duration-200 z-[10000] p-2 rounded-full border border-slate-700 hover:border-teal-500 shadow-lg"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          {project.screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-slate-800/90 hover:bg-teal-500/20 text-white hover:text-teal-300 transition-all duration-200 z-[10000] p-3 rounded-full border border-slate-700 hover:border-teal-500 shadow-lg"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image Panel - Medium Size, Fixed */}
          <div
            className="relative bg-slate-900/50 rounded-xl border border-slate-700 shadow-2xl p-6 max-w-4xl w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center" style={{ height: '70vh' }}>
              <img
                src={project.screenshots[selectedImage]}
                alt={`${project.title} screenshot ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            <p className="text-center text-slate-300 mt-4 font-mono text-sm">
              {selectedImage + 1} / {project.screenshots.length}
            </p>
          </div>

          {/* Next Button */}
          {project.screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-slate-800/90 hover:bg-teal-500/20 text-white hover:text-teal-300 transition-all duration-200 z-[10000] p-3 rounded-full border border-slate-700 hover:border-teal-500 shadow-lg"
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
};

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
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, project.screenshots]);

  return (
    <>
      <div className="bg-[#112240] rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10 h-full flex flex-col">
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              {project.logo ? (
                <img src={project.logo} alt={project.company || project.title} className="w-10 h-10 object-contain" />
              ) : (
                <div className="w-10 h-10 text-teal-300">
                  <Icons.Award size="100%" />
                </div>
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
            <div className="overflow-x-auto">
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
            <div>
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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm overflow-hidden"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={(e) => { e.stopPropagation(); closeModal(); }}
            className="absolute top-6 right-6 bg-slate-800/90 hover:bg-teal-500/20 text-white hover:text-teal-300 transition-all duration-200 z-[10000] p-2 rounded-full border border-slate-700 hover:border-teal-500 shadow-lg"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          {project.screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-slate-800/90 hover:bg-teal-500/20 text-white hover:text-teal-300 transition-all duration-200 z-[10000] p-3 rounded-full border border-slate-700 hover:border-teal-500 shadow-lg"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image Panel - Medium Size, Fixed */}
          <div
            className="relative bg-slate-900/50 rounded-xl border border-slate-700 shadow-2xl p-6 max-w-4xl w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center" style={{ height: '70vh' }}>
              <img
                src={project.screenshots[selectedImage]}
                alt={`${project.title} screenshot ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            <p className="text-center text-slate-300 mt-4 font-mono text-sm">
              {selectedImage + 1} / {project.screenshots.length}
            </p>
          </div>

          {/* Next Button */}
          {project.screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-slate-800/90 hover:bg-teal-500/20 text-white hover:text-teal-300 transition-all duration-200 z-[10000] p-3 rounded-full border border-slate-700 hover:border-teal-500 shadow-lg"
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <span className="text-teal-300">03.</span> Projects
        <span className="absolute bottom-[-10px] left-0 w-24 h-1 bg-teal-300/50"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {companyProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <h3 className="text-teal-300 font-mono mb-6">Personal Projects</h3>

      {/* Featured Project - Full Width */}
      <FeaturedProjectCard project={featuredProject} />

      {/* Other Personal Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {personalProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;