# Akshay Mondal, portfolio

My personal site. I'm a Support Engineer II at Amazon Luna, and I build software that listens: a voice assistant that lives in the MacBook notch, a social listening tool, a browser extension that writes SOPs, and a few side projects.

## What's on it

- **Olivia**: a voice-first AI assistant in the MacBook notch
- **Signal**: social listening for Amazon Luna
- **StepWise**: a Chrome extension that turns a browser workflow into an SOP document
- **Utter**: native macOS dictation, being prepared for open source
- **IRA AI**, **Bharat Wallet** and **Image Downloader**: personal projects

Screens of work tools show synthetic or fictional data.

## How it's built

- React 19, TypeScript and Vite 6, with plain CSS
- The hero's liquid notch is a raymarched fragment shader in raw WebGL, with no 3D library
- Project islands open in place using the View Transitions API, and fall back to an instant swap where it isn't supported
- Mona Sans and Geist Mono are self-hosted from `public/fonts`
- The loader plays once per browser session. It's skipped for deep links and when `prefers-reduced-motion` is set

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes dist/
```

Node 18 or newer.
