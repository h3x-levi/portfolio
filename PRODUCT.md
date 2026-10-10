# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Everyone who lands on Akshay Mondal's link, served equally: engineering hiring managers, recruiters, peers and collaborators. They arrive from LinkedIn, GitHub, a résumé or a shared message, usually on a laptop, sometimes on a phone. Their job is to understand within seconds who Akshay is, what they have built, and how to reach them.

## Product Purpose

A personal portfolio for Akshay Mondal, Support Engineer II at Amazon Luna (Bengaluru, India). It introduces them, shows the tools they have designed and shipped, lays out their experience, education and certifications, and makes contact one step away. Success: a visitor leaves impressed and able to say in one sentence what Akshay does and name at least one thing they built.

## Positioning

Akshay works inside the live operations of a cloud gaming service and builds the tools they wish existed, solo and end to end: a voice-first macOS assistant (Olivia), a social-listening platform (Signal), an SOP recorder (StepWise), an open-source dictation app (Utter), plus personal AI and mobile projects. The claim a generic engineer portfolio cannot copy is that pairing: someone who runs release days and incidents and also ships native Swift, serverless AWS and browser-extension products.

## Operating Context

- Headline: factual title "Support Engineer II at Amazon Luna" (effective Oct 2026 per HR records; the promotion was decided Sep 2026) under a builder line.
- Company work is described by what it does and how, never by internal systems.
- Signal: a social-listening platform. It reads public community posts, uses AI to classify each post and rate severity, alerts the team chat when something is urgent, and shows everything on a live dashboard. It runs for Amazon Luna. Built on serverless AWS (scheduled Lambda, DynamoDB, S3, Amazon Bedrock) with Slack alerts. The name is "Signal", never "Luna Signal".
- Olivia: a voice-first AI assistant that lives in the MacBook notch. It talks speech to speech (Amazon Nova 2 Sonic), sees the screen, acts on the desktop, guides people through a procedure by moving to the right button, connects to the user's tools through their APIs and to Mac apps, watches coding agents (Claude Code, Codex), and runs cloud jobs and routines that keep going with the Mac off. It started as a learning project and is built solo in Swift. Its mascot is based on CX ArtLab's open-source agent-robot-avatar.
- Utter (formerly Lumen): native macOS dictation app, now a personal project being prepared for open source, no longer an Amazon project (Swift, Whisper Large V3 on SageMaker, Bedrock, SigV4, Accessibility APIs). Never call it Lumen. The repo is private for now, so the site shows no link.
- StepWise: Chrome extension that records browser workflows into SOP documents with highlighted screenshots and an editor.

## Capabilities and Constraints

- Existing stack: React 19, TypeScript, Vite 6. Built output goes to `dist/`; a `CNAME` file sits at the root.
- **No internal details, ever.** Never name internal tools, services, packages, ticket systems, change processes, deployment stages, regions, accounts, URLs, teammates or internal metrics (post counts, ticket counts, hours saved). This applies to the page, the README, commit messages and any file that gets published. The owner keeps the specific list privately; when unsure, leave it out.
- Signal copy must not claim or imply that other teams use it.
- Do not present the Olivia mascot as an original character; credit CX ArtLab.
- Role descriptions stay generic: incident response and on-call, release-day coordination for a major live-service game, alarm and metric triage, player-issue investigation, game certification tracking, region launches and game onboarding.

## Evidence on Hand

- Profile photo: `public/profile.png`.
- Signal dashboard captures with a fictional "Reference Team" and synthetic data, in `public/work/signal/`.
- Olivia app stills vetted clean, and 24-frame mascot sprite strips, in `public/work/olivia/`.
- StepWise editor and slides rendered from the real extension with a fictional "Lantern" workflow, in `public/work/stepwise/`.
- Hero captures of the Olivia and Signal product pages the owner designed, in `public/work/design/` (internal pages, never linked).
- IRA AI: demo video and six screenshots in `public/ira-ai/`.
- Bharat Wallet: six screenshots in `public/bharat-wallet/`; repo github.com/h3x-levi/Wallet.
- Chrome Image Downloader: three screenshots in `public/chrome-extension/`.
- Certifications: 6 (Udemy Ansible and Terraform with credential links, Google Analytics, 3 AWS).
- Education: BCA Computer Science, Kazi Nazrul University (2016–2019, 7.8 GPA); Pure Science HS, Bidhan Chandra College (2014–2016, 82%).
- Contact: luckymondal70@gmail.com, github.com/h3x-levi, linkedin.com/in/iakm, x.com/_zenith_am.
- Absent, do not fabricate: testimonials, usage numbers, adoption claims, awards.

## Product Principles

1. Understood in five seconds: name, what they do, what they built.
2. The work is the proof; show the real thing wherever it is safe.
3. Nothing internal leaves the building.
4. Honest scale: solo builder, learning projects named as such, no inflated claims.
5. Delight earns attention but never blocks reading or contact.

## Accessibility & Inclusion

Motion must respect `prefers-reduced-motion`; content must stay readable and reachable without WebGL or JavaScript-heavy effects.
