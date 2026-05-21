import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import AnimatedSection from './AnimatedSection';
import { Icons } from './icons';

/* ───────────────────────── Types ───────────────────────── */
interface FeaturedProject {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  screenshots: string[];
  videoUrl: string;
  prominentImage: string;
  codeSnippet: string;
}

interface CompanyProject {
  title: string;
  period: string;
  company: string;
  logo: string;
  description: string;
  tech: string[];
}

interface PersonalProject {
  title: string;
  description: string;
  tech: string[];
  screenshots?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

/* ───────────────────────── Data ───────────────────────── */
const featuredProject: FeaturedProject = {
  title: 'IRA AI',
  subtitle: 'Autonomous Intelligence System [Closed Source]',
  description:
    'An advanced AI system in Python using FastAPI, PyTorch/Transformers, DuckDB vectors, SQLite, LMDB caching, WebSockets streaming. Voice pipeline with PvPorcupine wake-word, SpeechRecognition STT, pyttsx3 TTS. Custom Spacy NLP pipeline and Sentence-Transformers for semantic memory retrieval.',
  tech: [
    'Python',
    'PyTorch',
    'Transformers',
    'FastAPI',
    'DuckDB',
    'SQLite',
    'WebSockets',
    'Porcupine',
    'Spacy',
  ],
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
  codeSnippet: `class IraAI:
    def __init__(self, model_name="facebook/blenderbot-1B-distill"):
        self.conversation_manager = ConversationManager(max_context_messages=2)
        self.db = DatabaseManager()
        self.rule_based_responder = RuleBasedResponder()
        self.prompt_formatter = PromptFormatter()
        self.model_loader = ModelLoader()
        self.device = self._detect_device()
        self.personality = {
            "name": "IRA",
            "traits": ["intelligent", "helpful", "mysterious"],
            "speaking_style": "confident and knowledgeable"
        }

    def generate_response(self, user_input: str) -> str:
        user_input = self._apply_security_filters(user_input)
        context = self.conversation_manager.get_context()
        response = self.generator(
            self.prompt_formatter.format(user_input, context),
            max_new_tokens=200, temperature=0.8, top_p=0.85
        )
        return response`,
};

const companyProjects: CompanyProject[] = [
  {
    title: 'Lumen — AI-Powered Voice Assistant',
    period: 'Sep 2025 – Present',
    company: 'Amazon (Luna TechOps)',
    logo: '/amazon.svg',
    description:
      'A native macOS dictation & AI voice command tool built in Swift with zero external dependencies. Transcribes speech via Whisper Large V3 (SageMaker real-time inference) and processes text via Amazon Bedrock (Claude) using custom AWS Signature V4 authentication, Accessibility API injection, and Voice Activity Detection (VAD).',
    tech: ['Swift', 'SwiftUI', 'macOS 13+', 'AWS SigV4', 'Amazon SageMaker', 'Amazon Bedrock', 'AVFoundation', 'Accessibility APIs'],
  },
  {
    title: 'StepWise — SOP Documentation Tool',
    period: 'Dec 2024 – Sep 2025',
    company: 'Amazon (Luna TechOps)',
    logo: '/amazon.svg',
    description:
      'A full-stack Chrome extension recording browser interactions to generate structured SOPs. Features contextual screenshot capture with element highlighting, a Word-like ribbon editor, Node.js/Express AI integration (Bedrock), and a custom secure SSH-authenticated auto-update engine.',
    tech: ['TypeScript', 'Chrome APIs', 'Node.js', 'Express', 'AWS Bedrock', 'Vitest', 'Terraform', 'Kubernetes'],
  },
  {
    title: 'Amazon Luna (TechOps & Infrastructure)',
    period: 'Feb 2022 – Present',
    company: 'Amazon (Luna TechOps)',
    logo: '/amazon.svg',
    description:
      'Manage the operational backbone and streaming infrastructure of the Amazon Luna cloud gaming platform. Spearhead Fortnite maintenance releases (MCM), triage automated streaming quality alarm tickets via SIM and QuickSight, provision SIPS region onboardings, and own SEV-2/3 on-call incident response under strict SLAs.',
    tech: ['AWS (S3/EC2/EKS)', 'QuickSight', 'SIM & Jira', 'SIPS Onboarding', 'Fortnite Releases', 'SLA Ownership'],
  },
];

const personalProjects: PersonalProject[] = [
  {
    title: 'Chrome Image Downloader Extension',
    description:
      'Chrome MV3 extension for bulk image downloading with smart detection, selection interface, and download management. Scans DOM for high-res assets, provides a visual selection grid, and packages downloads via the Chrome Downloads API.',
    tech: ['JavaScript', 'Chrome Extension API', 'HTML5', 'CSS3', 'Downloads API'],
    screenshots: [
      '/chrome-extension/chrome-ext-1.png',
      '/chrome-extension/chrome-ext-2.png',
      '/chrome-extension/chrome-ext-3.png',
    ],
  },
  {
    title: 'Bharat Wallet',
    description:
      'Flutter/Dart digital wallet with secure storage, Firebase Auth, biometric authentication, NFC payments, OAuth 2.0 flows, and Riverpod state management. Local-first architecture with encrypted on-device data.',
    tech: ['Dart', 'Flutter', 'Riverpod', 'Firebase', 'Biometrics', 'NFC', 'OAuth 2.0'],
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
      'This portfolio built with React 19, TypeScript, Vite, and Tailwind CSS. Fully responsive, accessible, and performance-optimized with animated sections and interactive project showcases.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/h3x-levi/portfolio',
    liveUrl: typeof window !== 'undefined' ? window.location.origin : '/',
  },
];

/* ───────────────── Image Modal (Portal) ───────────────── */
interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center animate-modalOverlay"
      style={{ zIndex: 99999 }}
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90" />

      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-5 right-5 text-white/70 hover:text-white text-3xl font-light z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-[color,background-color,transform] duration-200 active:scale-90"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Prev Arrow */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-[color,background-color,transform] duration-200 active:scale-90"
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      {/* Next Arrow */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-[color,background-color,transform] duration-200 active:scale-90"
          aria-label="Next image"
        >
          ›
        </button>
      )}

      {/* Image */}
      <div
        className="relative z-10 max-w-[90vw] max-h-[85vh] flex flex-col items-center animate-modalContent"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1} of ${images.length}`}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-imageFade"
        />
        {/* Counter */}
        {images.length > 1 && (
          <span className="mt-4 text-white/60 text-sm font-sans">
            {currentIndex + 1} / {images.length}
          </span>
        )}
      </div>
    </div>,
    document.body,
  );
};

/* ───────────── Thumbnail Gallery Row ───────────── */
interface ThumbnailGalleryProps {
  images: string[];
  onImageClick: (index: number) => void;
}

const ThumbnailGallery: React.FC<ThumbnailGalleryProps> = ({ images, onImageClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative group/gallery">
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-stone-300 dark:scrollbar-thumb-stone-700 scrollbar-track-transparent"
        style={{ scrollbarWidth: 'thin' }}
      >
        {images.map((src, idx) => (
          <button
            key={src}
            onClick={() => onImageClick(idx)}
            className="flex-shrink-0 rounded-lg overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-orange-400 dark:hover:border-orange-500 transition-[border-color,box-shadow,transform] duration-200 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 focus:ring-offset-2"
          >
            <img
              src={src}
              alt={`Screenshot ${idx + 1}`}
              className="h-20 w-32 object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

/* ───────────── Tech Tag Component ───────────── */
const TechTag: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-block bg-orange-50 dark:bg-orange-950/20 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/50 font-mono text-xs px-2.5 py-1 rounded-md">
    {label}
  </span>
);

/* ───────────────── Main Component ───────────────── */
const Projects: React.FC = () => {
  /* Modal state */
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (images: string[], index: number) => {
    setModalImages(images);
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalImages(null);
    setModalIndex(0);
  };

  const prevImage = () => {
    if (!modalImages) return;
    setModalIndex((i) => (i === 0 ? modalImages.length - 1 : i - 1));
  };

  const nextImage = () => {
    if (!modalImages) return;
    setModalIndex((i) => (i === modalImages.length - 1 ? 0 : i + 1));
  };

  return (
    <AnimatedSection id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 font-sans mb-14">
        <span className="text-orange-600 dark:text-orange-500 mr-2">03.</span>Projects
      </h2>

      {/* ============ COMPANY PROJECTS ============ */}
      <div className="mb-14">
        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-sans mb-6">Company Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companyProjects.map((proj) => (
            <div
              key={proj.title}
              className="bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={proj.logo}
                  alt={`${proj.company} logo`}
                  className="w-10 h-10 object-contain dark:brightness-90"
                />
                <div>
                  <p className="text-stone-500 dark:text-stone-400 text-xs font-sans">{proj.company}</p>
                  <h4 className="text-stone-900 dark:text-stone-100 font-bold text-lg font-sans leading-tight">
                    {proj.title}
                  </h4>
                </div>
              </div>
              <p className="text-stone-500 dark:text-stone-400 text-xs font-mono mb-3">{proj.period}</p>
              <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <TechTag key={t} label={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ FEATURED: IRA AI ============ */}
      <div className="bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-sm overflow-hidden mb-14">
        {/* Header */}
        <div className="p-6 sm:p-8 pb-0">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h3 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 font-sans">
                {featuredProject.title}
              </h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm mt-1 font-mono">{featuredProject.subtitle}</p>
            </div>
            <span className="bg-orange-50 dark:bg-orange-950/20 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/50 rounded-full font-mono text-[10px] px-3 py-1 uppercase tracking-wider whitespace-nowrap">
              Featured Personal Project
            </span>
          </div>
        </div>

        {/* Video Player */}
        <div className="px-6 sm:px-8 pt-6">
          <div className="rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-950">
            <video
              className="w-full aspect-video object-cover"
              controls
              poster="/ira-ai/dashboard_1.png"
              preload="metadata"
            >
              <source src={featuredProject.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Screenshot Thumbnails */}
        <div className="px-6 sm:px-8 pt-5">
          <ThumbnailGallery
            images={featuredProject.screenshots}
            onImageClick={(idx) => openModal(featuredProject.screenshots, idx)}
          />
        </div>

        {/* Description & Tech */}
        <div className="px-6 sm:px-8 pt-6">
          <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">{featuredProject.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {featuredProject.tech.map((t) => (
              <TechTag key={t} label={t} />
            ))}
          </div>
        </div>

        {/* Code Snippet */}
        <div className="px-6 sm:px-8 py-6">
          <div className="bg-stone-100 dark:bg-stone-950 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-900">
            {/* Code header bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-stone-200 dark:border-stone-900">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-stone-500 dark:text-stone-400 text-xs font-mono">ira_core.py</span>
            </div>
            {/* Code body */}
            <pre className="p-6 overflow-x-auto text-[13px] leading-relaxed">
              <code className="font-mono text-stone-800 dark:text-stone-200 whitespace-pre">
                {featuredProject.codeSnippet}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* ============ PERSONAL PROJECTS ============ */}
      <div>
        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-sans mb-6">Personal Projects</h3>
        <div className="space-y-6">
          {personalProjects.map((proj) => (
            <div
              key={proj.title}
              className="bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Title row */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h4 className="text-stone-900 dark:text-stone-100 font-bold text-lg font-sans">{proj.title}</h4>
                <div className="flex items-center gap-3 flex-shrink-0">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 dark:text-stone-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                      aria-label={`GitHub repository for ${proj.title}`}
                    >
                      <Icons.GitHub className="w-5 h-5" />
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 dark:text-stone-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                      aria-label={`Live site for ${proj.title}`}
                    >
                      <Icons.ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-4">{proj.description}</p>

              {/* Screenshot gallery (if any) */}
              {proj.screenshots && proj.screenshots.length > 0 && (
                <div className="mb-4">
                  <ThumbnailGallery
                    images={proj.screenshots}
                    onImageClick={(idx) => openModal(proj.screenshots!, idx)}
                  />
                </div>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <TechTag key={t} label={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ FULLSCREEN IMAGE MODAL ============ */}
      {modalImages && (
        <ImageModal
          images={modalImages}
          currentIndex={modalIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </AnimatedSection>
  );
};

export default Projects;