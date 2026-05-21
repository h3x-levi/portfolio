# Akshay Mondal — Support Engineer (Luna TechOps) Portfolio

A premium, ultra-responsive, and high-fidelity Ghibli-inspired developer cabin portfolio website. Showcasing the professional journey, core systems, and advanced internal tooling built by **Akshay Mondal**, a **Support Engineer (Luna TechOps)** & DevOps/QA Automation specialist with 5+ years of cloud infrastructure and automation experience.

---

## 🎨 Ghibli Drafting Cabin Architecture
The website operates as an interactive digital drafting board, bringing hand-sketched Ghibli-themed elements to life with organic micro-animations:
- **Calcifer on the CPU Socket (The Compute Engine)**: Flame breathing, scaling, and swaying motherboard demon. Hovering increases his flames and releases orange rising sparks.
- **Jiji on the Code Terminal (The QA Monitor)**: Retro CRT monitor displaying automated test runs with a smoothly swaying pendulum tail. Hovering triggers a happy wink and sound wave visualizers.
- **Susuwatari Soot Sprites (The CI/CD Operators)**: Fuzzy pipeline helpers wiggling, sliding on Git branch lines with code packets, bobbing server clusters, typing on keyboards, or sleeping near the footer.
- **Kodama Forest Spirits (The Cloud Clusters)**: White spirits rattling their heads periodically atop cloud platforms (`aws_us_east_1`). Hovering triggers a rapid head rattle and musical notes.

---

## 🌟 Key Features & Engineering Highlights

- **Day & Night Cabin Adaptability**: Smooth, custom manual theme switcher toggling between **Sunny Day Cabin** and **Midnight Dark Cabin** with rotating Sun and tilting Moon micro-interactions.
- **Zero-FOUC Blocking Head Script**: Prevents layout color flashes on initial mount by evaluating system preferences and local storage in a blocking head script before React mounts.
- **Hardware-Accelerated Compositor Animations**: Avoids high-frequency main-thread layout reflows by targeting GPU-accelerated compositor properties (`transform`, `opacity`, `background-color`, `border-color`), guaranteeing 60fps/120fps.
- **Premium Apple-Style Easing Curves**: Tab switches and reveals use premium transition dynamics (`cubic-bezier(0.16, 1, 0.3, 1)` Out-Expo and springy elastic modal reveals `cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Advanced Screenshot Gallery Modal**: Responsive overlay portals containing crossfade screenshot transitions, keyboard listener actions (arrows, escape), scroll lock toggles, and click tactile scaling.
- **Tactile Click Feedback**: Installs physical-feeling click micro-interactions (`active:scale-95`) across all navigation items, tabs, thumbnails, social links, and CTAs.

---

## 💼 Core Roles & Narrative
Reflecting your direct contributions managing the operational backbone of the Amazon Luna game streaming service:
1. **Streaming Metric & Ticket Triage**: Triage automated streaming quality alarms via SIM/QuickSight, classifying breaches as `NOISE`, `GENUINE ISSUE`, or `NEEDS REVIEW`.
2. **Release & Outage Management**: Fortnite maintenance cycles (MCM), scheduled outages, GSE Andon Cord banners, and post-deployment validation.
3. **Region Onboarding & Game Ingestion**: Provisioning SIPS streaming infrastructure for AWS region expansion and GOG platform game ingestion.
4. **LabCollab Certifications**: Tracking game certification bugs through various states (Pass, Fail, Pass with Exception) via Jira queues.
5. **SLA Incident Mitigation**: Fast-paced on-call support for SEV-2, SEV-3, and SEV-4 incidents under strict SLAs, utilizing Tempo CTI and Coral build debuggers.

---

## 🛠️ Company Projects Featured
High-impact internal software automation products built from scratch:
- **Lumen — AI-Powered Voice Assistant for macOS**: A native Swift/SwiftUI macOS menu-bar utility with zero external dependencies. Dictates speech via Whisper Large V3 (Amazon SageMaker real-time inference) and Bedrock (Claude) with custom SigV4 direct authentication, Accessibility API injection, and real-time Voice Activity Detection (VAD).
- **StepWise — Browser Workflow SOP Documentation Tool**: A full-stack Chrome extension (Manifest V3) that captures browser interactions to generate training SOPs. Features contextual element highlighting, a ribbon editor, Node.js/Express Bedrock AI integration, and a custom secure SSH-authenticated auto-update engine.
- **Amazon Luna TechOps & Infrastructure**: Automated telemetry systems, region onboardings, and Fortnite release validation pipelines.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/h3x-levi/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, TypeScript, Vanilla CSS (compositor animations)
- **Styling & Theme Engine**: Tailwind CSS 4 with custom theme state injectors
- **Build Tool**: Vite 6 (builds in ~700ms)
- **Typography**: Inter (sans-serif) & JetBrains Mono (monospace)

---

## 📦 Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist/` directory, fully packed with minified, tree-shaken JS/CSS assets and pre-loaded vector modules.

---

**Designed & Built by Akshay Mondal** ✨
