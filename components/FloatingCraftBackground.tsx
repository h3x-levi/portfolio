import React, { useState, useEffect, useRef } from 'react';

// ==========================================
// 1. SOUND & SPARK PARTICLES SUB-COMPONENTS
// ==========================================

interface Spark {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: string;
}

interface Note {
  id: number;
  text: string;
  x: number;
  y: number;
  delay: string;
}

interface ZzzBubble {
  id: number;
  x: number;
  y: number;
  scale: number;
  delay: string;
}

// ==========================================
// 2. CHARACTER COMPONENT: CALCIFER CPU HEARTH
// ==========================================
const CalciferCpu: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);

  // Generate interactive floating sparks when hovered
  useEffect(() => {
    if (hovered) {
      const interval = setInterval(() => {
        setSparks((prev) => [
          ...prev.slice(-15),
          {
            id: Date.now() + Math.random(),
            x: -20 + Math.random() * 40,
            y: -50 - Math.random() * 60,
            size: 2 + Math.random() * 4,
            delay: '0s',
          },
        ]);
      }, 350);
      return () => clearInterval(interval);
    } else {
      setSparks([]);
    }
  }, [hovered]);

  return (
    <div
      className="relative flex flex-col items-center justify-center pointer-events-auto cursor-pointer select-none group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: '130px', height: '140px' }}
    >
      {/* Spark Particles */}
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="absolute rounded-full bg-orange-500 animate-spark pointer-events-none"
          style={{
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            bottom: '48px',
            left: 'calc(50% + ' + spark.x + 'px)',
            '--spark-x': `${spark.x * 1.5}px`,
            '--spark-y': `${spark.y}px`,
          } as React.CSSProperties}
        />
      ))}

      {/* Motherboard Hearth Base */}
      <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 stroke-stone-400 group-hover:stroke-stone-500 dark:stroke-stone-700 dark:group-hover:stroke-stone-600 transition-colors duration-300" strokeWidth="1.2">
        {/* PCB Board Outline */}
        <rect x="15" y="45" width="70" height="45" rx="4" fill="#F5F5F4" fillOpacity="0.8" className="dark:fill-stone-900/60" />
        
        {/* Circuit Traces */}
        <path d="M15 60h15l5 5h10M85 60H70l-5 5H55M35 80h30" strokeDasharray="2 2" className="dark:stroke-stone-800" />
        <circle cx="35" cy="65" r="1.5" className="fill-stone-300 dark:fill-stone-800" />
        <circle cx="65" cy="65" r="1.5" className="fill-stone-300 dark:fill-stone-800" />
        <circle cx="50" cy="80" r="1.5" className="fill-stone-300 dark:fill-stone-800" />

        {/* CPU Socket Center Hearth */}
        <rect x="35" y="55" width="30" height="25" rx="2" fill="#E7E5E4" className="dark:fill-stone-900" />
        <rect x="40" y="59" width="20" height="17" rx="1" fill="#D6D3D1" className="dark:fill-stone-950" stroke="#EA580C" strokeWidth="1" />

        {/* Wood Logs Stacked on CPU Hearth */}
        <path d="M 32 54 L 68 54 M 36 50 L 64 50 M 42 46 L 58 46" stroke="#78716C" className="dark:stroke-stone-700" strokeWidth="3" strokeLinecap="round" />
        <circle cx="33" cy="54" r="1.5" className="fill-stone-500 dark:fill-stone-600" stroke="none" />
        <circle cx="67" cy="54" r="1.5" className="fill-stone-500 dark:fill-stone-600" stroke="none" />
      </svg>

      {/* Calcifer Fire Demon sitting on Logs */}
      <div className={`absolute bottom-[52px] transition-transform duration-300 ${hovered ? 'scale-125 animate-calcifer -translate-y-1' : 'animate-calcifer'}`}>
        <svg viewBox="0 0 40 50" className="w-14 h-16 pointer-events-none">
          {/* Flame Outlines & Fills */}
          <path
            d="M 20 4 C 23 10, 31 15, 33 22 C 36 30, 34 38, 28 42 C 23 45, 17 45, 12 42 C 6 38, 4 30, 7 22 C 9 15, 17 10, 20 4 Z"
            fill="#FFEDD5"
            fillOpacity="0.85"
            stroke="#EA580C"
            strokeWidth="1.2"
            className="dark:fill-orange-950/40"
          />
          <path
            d="M 20 14 C 22 18, 27 21, 28 26 C 29 31, 28 36, 24 39 C 21 41, 19 41, 16 39 C 12 36, 11 31, 12 26 C 13 21, 18 18, 20 14 Z"
            fill="#FED7AA"
            fillOpacity="0.9"
            stroke="#F97316"
            strokeWidth="1"
            className="dark:fill-orange-900/30"
          />
          
          {/* Ghibli Eyes */}
          <circle cx="15" cy="26" r="2.5" fill="white" stroke="#EA580C" strokeWidth="0.8" />
          <circle cx="25" cy="26" r="2.5" fill="white" stroke="#EA580C" strokeWidth="0.8" />
          {/* Pupils */}
          <circle cx="15.5" cy="25.5" r="1" fill="black" />
          <circle cx="24.5" cy="25.5" r="1" fill="black" />
          
          {/* Mouth */}
          {hovered ? (
            // Excited Open Mouth
            <ellipse cx="20" cy="33" rx="2" ry="2.5" fill="#C2410C" stroke="none" />
          ) : (
            // Cozy Smile
            <path d="M 18 33 Q 20 35 22 33" stroke="#EA580C" strokeWidth="1" strokeLinecap="round" fill="none" />
          )}

          {/* Sparkly Blushes */}
          <circle cx="11" cy="29" r="1" fill="#EA580C" fillOpacity="0.4" stroke="none" />
          <circle cx="29" cy="29" r="1" fill="#EA580C" fillOpacity="0.4" stroke="none" />
        </svg>
      </div>

      {/* Label Box */}
      <div className="mt-1 px-2 py-0.5 rounded bg-stone-100 border border-stone-200 text-[10px] font-mono text-stone-500 dark:bg-stone-900 dark:border-stone-800 dark:text-stone-400 scale-90 group-hover:border-orange-200 dark:group-hover:border-orange-900 group-hover:bg-orange-50 dark:group-hover:bg-orange-950/40 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
        compute_hearth.sh
      </div>
    </div>
  );
};

// ==========================================
// 3. CHARACTER COMPONENT: JIJI THE CAT ON TERMINAL
// ==========================================
const JijiTerminal: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [purrs, setPurrs] = useState<{ id: number; scale: number }[]>([]);

  // Periodically generate purr pulses when hovered
  useEffect(() => {
    if (hovered) {
      const interval = setInterval(() => {
        setPurrs((prev) => [...prev.slice(-3), { id: Date.now(), scale: 1 }]);
      }, 900);
      return () => clearInterval(interval);
    } else {
      setPurrs([]);
    }
  }, [hovered]);

  return (
    <div
      className="relative flex flex-col items-center pointer-events-auto cursor-pointer select-none group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: '160px', height: '150px' }}
    >
      {/* Purring Ring Animations */}
      {purrs.map((purr) => (
        <span
          key={purr.id}
          className="absolute w-20 h-20 rounded-full border border-orange-400/40 dark:border-orange-500/20 animate-purr pointer-events-none"
          style={{ top: '8px', left: 'calc(50% - 40px)' }}
        />
      ))}

      {/* Cozy Vintage Terminal Chassis */}
      <svg viewBox="0 0 120 100" fill="none" className="w-32 h-28 stroke-stone-400 group-hover:stroke-stone-500 dark:stroke-stone-700 dark:group-hover:stroke-stone-600 transition-colors duration-300" strokeWidth="1.2">
        {/* Retro Monitor Case */}
        <rect x="15" y="24" width="90" height="66" rx="6" fill="#F5F5F4" fillOpacity="0.85" className="dark:fill-stone-900/60" />
        {/* Wood-grained Side Panels */}
        <path d="M15 30v54M105 30v54" stroke="#78716C" className="dark:stroke-stone-700" strokeWidth="2.5" />
        
        {/* CRT Screen */}
        <rect x="22" y="29" width="76" height="48" rx="3" fill="#1C1917" className="dark:fill-stone-950" />
        
        {/* Devops Prompt Text & Blinking Cursor inside CRT */}
        <g fill="#A8A29E" className="font-mono" style={{ fontSize: '5px' }}>
          <text x="26" y="38" className="fill-orange-400/90 dark:fill-orange-500/80 select-none">akshay@luna:~$ devops_run</text>
          <text x="26" y="47" className="fill-stone-400 dark:fill-stone-500 select-none">Deploy pipeline active...</text>
          <text x="26" y="56" className="fill-stone-300 dark:fill-stone-400 select-none">Tests: 241 passed, 0 failed</text>
          <text x="26" y="65" className="fill-green-500/90 dark:fill-green-400 font-bold select-none">[OK] Server cluster healthy</text>
          <rect x="105" y="61" width="3" height="5" className="animate-blink fill-orange-500" stroke="none" />
        </g>

        {/* Vintage Controls */}
        <circle cx="84" cy="82" r="2.5" fill="#E7E5E4" className="dark:fill-stone-800" />
        <circle cx="92" cy="82" r="2.5" fill="#E7E5E4" className="dark:fill-stone-800" />
        <rect x="22" y="80" width="12" height="4" rx="1" fill="#EA580C" fillOpacity="0.7" className="dark:fill-orange-950/50" stroke="none" />
        {/* Stand Base */}
        <path d="M 45 90 L 75 90 L 80 96 L 40 96 Z" fill="#E7E5E4" className="dark:fill-stone-900" />
      </svg>

      {/* Jiji the Ghibli Cat sitting on Top */}
      <div className={`absolute top-[4px] transition-transform duration-300 ${hovered ? 'scale-110 -translate-y-1' : ''}`}>
        <svg viewBox="0 0 30 30" className="w-10 h-10 overflow-visible">
          {/* Pendulum Long Swaying Tail - outline in dark mode for visibility */}
          <path
            d="M 10 21 Q 6 26 2 28 Q 0 29 2 30 Q 5 29 9 24 C 11 22 11 21 10 21 Z"
            fill="#1C1917"
            stroke="#1C1917"
            className="dark:stroke-stone-600 animate-jiji-tail"
            strokeWidth="0.8"
            style={{ transformOrigin: '9px 20px' }}
          />

          {/* Cat Body Outline */}
          <ellipse cx="15" cy="18" rx="6" ry="7" fill="#1C1917" stroke="none" className="dark:stroke-stone-600 dark:stroke-[0.8]" />
          {/* Paws */}
          <circle cx="12" cy="24" r="1.5" fill="#292524" className="dark:fill-stone-800" />
          <circle cx="18" cy="24" r="1.5" fill="#292524" className="dark:fill-stone-800" />

          {/* Cat Head */}
          <circle cx="15" cy="10" r="5" fill="#1C1917" stroke="none" className="dark:stroke-stone-600 dark:stroke-[0.8]" />
          {/* Left Ear */}
          <path d="M 10 9 L 8 2 L 13 6 Z" fill="#1C1917" className="dark:stroke-stone-600 dark:stroke-[0.8]" />
          <path d="M 10.5 8 L 9.2 3.5 L 12.2 6 Z" fill="#F87171" fillOpacity="0.4" />
          {/* Right Ear */}
          <path d="M 20 9 L 22 2 L 17 6 Z" fill="#1C1917" className="dark:stroke-stone-600 dark:stroke-[0.8]" />
          <path d="M 19.5 8 L 20.8 3.5 L 17.8 6 Z" fill="#F87171" fillOpacity="0.4" />

          {/* Big Ghibli Expression Eyes */}
          {hovered ? (
            // Happy Winking Eyes on Hover
            <>
              <path d="M 10 11 Q 12 9 14 11" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              <path d="M 16 11 Q 18 9 20 11" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </>
          ) : (
            // Big Curious White Eyes
            <>
              <circle cx="12" cy="10.5" r="2.2" fill="white" stroke="none" />
              <circle cx="12" cy="10.5" r="0.9" fill="black" stroke="none" />
              <circle cx="18" cy="10.5" r="2.2" fill="white" stroke="none" />
              <circle cx="18" cy="10.5" r="0.9" fill="black" stroke="none" />
            </>
          )}

          {/* Small Pink Nose */}
          <polygon points="15,12.5 14,11.5 16,11.5" fill="#F87171" stroke="none" />
          {/* Whiskers */}
          <path d="M 9 12 L 5 11 M 9 13 L 4 13 M 21 12 L 25 11 M 21 13 L 26 13" stroke="white" strokeWidth="0.4" strokeOpacity="0.7" />
        </svg>
      </div>

      {/* Label Box */}
      <div className="mt-1.5 px-2 py-0.5 rounded bg-stone-100 border border-stone-200 text-[10px] font-mono text-stone-500 dark:bg-stone-900 dark:border-stone-800 dark:text-stone-400 scale-90 group-hover:border-orange-200 dark:group-hover:border-orange-900 group-hover:bg-orange-50 dark:group-hover:bg-orange-950/40 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
        monitoring_cat.py
      </div>
    </div>
  );
};

// ==========================================
// 4. CHARACTER COMPONENT: KODAMA CLOUD
// ==========================================
interface KodamaCloudProps {
  idName: string;
}

const KodamaCloud: React.FC<KodamaCloudProps> = ({ idName }) => {
  const [hovered, setHovered] = useState(false);
  const [jolt, setJolt] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);

  // Periodic rattle trigger to align with Ghibli's staggered timing
  const [rattleTimer, setRattleTimer] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setRattleTimer(true);
      const timeout = setTimeout(() => setRattleTimer(false), 800);
      return () => clearTimeout(timeout);
    }, 7000 + Math.random() * 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
    setJolt(true);
    setTimeout(() => setJolt(false), 500);

    // Release cute vector music notes
    const symbols = ['♫', '♪', '♩', '♬'];
    setNotes((prev) => [
      ...prev.slice(-8),
      {
        id: Date.now() + Math.random(),
        text: symbols[Math.floor(Math.random() * symbols.length)],
        x: -15 + Math.random() * 30,
        y: -30 - Math.random() * 30,
        delay: '0s',
      },
    ]);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center pointer-events-auto cursor-pointer select-none group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      style={{ width: '150px', height: '120px' }}
    >
      {/* Musical notes floating up */}
      {notes.map((note) => (
        <span
          key={note.id}
          className="absolute text-orange-500/80 font-sans font-semibold text-xs animate-spark pointer-events-none select-none"
          style={{
            bottom: '45px',
            left: 'calc(50% + ' + note.x + 'px)',
            '--spark-x': `${note.x * 1.6}px`,
            '--spark-y': `${note.y}px`,
          } as React.CSSProperties}
        >
          {note.text}
        </span>
      ))}

      {/* Fluffy Outline AWS Cloud Platform */}
      <svg viewBox="0 0 120 70" fill="none" className="w-32 h-20 stroke-stone-300 group-hover:stroke-stone-400 dark:stroke-stone-800 dark:group-hover:stroke-stone-700 transition-colors duration-300" strokeWidth="1.2">
        {/* Double-layered cloud */}
        <path
          d="M 25 50 A 15 15 0 0 1 30 22 A 22 22 0 0 1 70 15 A 18 18 0 0 1 95 24 A 14 14 0 0 1 95 50 Z"
          fill="#FAFAF9"
          fillOpacity="0.8"
          className="dark:fill-stone-900/40"
        />
        {/* Tiny floating decorative clouds */}
        <path d="M 8 52 A 6 6 0 0 1 18 42 A 8 8 0 0 1 24 52 Z" fill="#F5F5F4" fillOpacity="0.7" className="dark:fill-stone-950" />
        <path d="M 98 42 A 5 5 0 0 1 106 34 A 7 7 0 0 1 112 42 Z" fill="#F5F5F4" fillOpacity="0.7" className="dark:fill-stone-950" />

        {/* Small Technical label on cloud */}
        <text x="36" y="44" fill="#A8A29E" className="font-mono dark:fill-stone-600 select-none" style={{ fontSize: '4.5px' }}>{idName}</text>
      </svg>

      {/* Kodama Forest Spirit Sitting on the Cloud */}
      <div
        className={`absolute bottom-[34px] transition-transform duration-300 ${
          hovered ? 'scale-115 -translate-y-1' : ''
        }`}
      >
        <svg viewBox="0 0 24 30" className="w-8 h-10 overflow-visible">
          {/* Body Outline */}
          <path
            d="M 6 22 C 6 18, 8 16, 12 16 C 16 16, 18 18, 18 22 C 18 25, 17 27, 16 27 L 8 27 C 7 27, 6 25, 6 22 Z"
            fill="#FFF"
            stroke="#78716C"
            strokeWidth="1.1"
            className="dark:fill-stone-100 dark:stroke-stone-700"
          />
          {/* Sitting arms/legs */}
          <path d="M 8 27 Q 10 25 12 27 M 16 27 Q 14 25 12 27" stroke="#78716C" className="dark:stroke-stone-700" strokeWidth="0.8" fill="none" />

          {/* Rattling Head */}
          <g
            className={
              jolt
                ? 'animate-kodama-jolt'
                : rattleTimer || hovered
                ? 'animate-kodama-rattle'
                : ''
            }
          >
            {/* Wobbly head base */}
            <path
              d="M 12 5 C 16.5 5, 20 8, 20 12 C 20 15, 16.5 17, 12 17 C 7.5 17, 4 15, 4 12 C 4 8, 7.5 5, 12 5 Z"
              fill="#FFF"
              stroke="#78716C"
              strokeWidth="1.2"
              className="dark:fill-stone-100 dark:stroke-stone-700"
            />
            {/* Expressive dark eyes (unaligned, hand-drawn look) */}
            <circle cx="9.5" cy="11.5" r="1.4" fill="#292524" stroke="none" />
            <circle cx="14.8" cy="10.8" r="1.2" fill="#292524" stroke="none" />
            {/* Mouth */}
            <ellipse cx="12" cy="14" rx="0.8" ry="1.4" fill="#292524" stroke="none" />
          </g>
        </svg>
      </div>
    </div>
  );
};

// ==========================================
// 5. SOOT SPRITES (SUSUWATARI) VARIATIONS
// ==========================================

// Core vector Soot Sprite reusable renderer
const SootSpriteBase: React.FC<{ size: number; isTyping?: boolean }> = ({ size, isTyping = false }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="animate-soot-jitter overflow-visible" style={{ width: `${size}px`, height: `${size}px` }}>
      {/* Fuzzy Body Outline */}
      <circle cx="12" cy="12" r="6" fill="#1C1917" stroke="none" />
      {/* Hand-sketched Fuzzy Spikes - thin light gray outlines in dark mode */}
      <path
        d="M12 6L12 2 M12 18L12 22 M6 12L2 12 M18 12L22 12 M8 8L4 4 M16 16L20 20 M8 16L4 20 M16 8L20 4 M10 7L8 4 M14 7L16 4 M10 17L8 20 M14 17L16 20 M7 10L4 8 M7 14L4 16 M17 10L20 8 M17 14L20 16"
        stroke="#1C1917"
        className="dark:stroke-stone-600"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Big Ghibli Eyeballs */}
      <circle cx="9.5" cy="11.5" r="2" fill="white" stroke="none" />
      <circle cx="9.5" cy="11.5" r="0.8" fill="black" stroke="none" />

      <circle cx="14.5" cy="11.5" r="2" fill="white" stroke="none" />
      <circle cx="14.5" cy="11.5" r="0.8" fill="black" stroke="none" />

      {/* Typing arms action */}
      {isTyping && (
        <g stroke="#1C1917" strokeWidth="1.2" strokeLinecap="round" className="dark:stroke-stone-500">
          <path d="M 6 15 Q 4 18 3 17" className="animate-wiggle" />
          <path d="M 18 15 Q 20 18 21 17" className="animate-wiggle" />
        </g>
      )}
    </svg>
  );
};

// A: CI/CD Pipeline Slider Soot Sprite
const SootSpritePipeline: React.FC = () => {
  const [slidePercent, setSlidePercent] = useState(15);
  const [direction, setDirection] = useState(1);

  // Animate the sprite sliding down the pipeline wire
  useEffect(() => {
    const interval = setInterval(() => {
      setSlidePercent((prev) => {
        let next = prev + direction * 0.4;
        if (next >= 85) {
          setDirection(-1);
          return 85;
        }
        if (next <= 15) {
          setDirection(1);
          return 15;
        }
        return next;
      });
    }, 45);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="relative w-[180px] h-[220px] pointer-events-none select-none">
      <svg viewBox="0 0 100 200" fill="none" className="w-full h-full stroke-stone-300 dark:stroke-stone-800" strokeWidth="1.2">
        {/* Dotted pipeline track */}
        <line x1="20" y1="20" x2="80" y2="180" strokeDasharray="3 3" />
        <circle cx="20" cy="20" r="3" className="fill-stone-300 dark:fill-stone-800" />
        <circle cx="80" cy="180" r="3" className="fill-stone-300 dark:fill-stone-800" />
        <text x="35" y="105" fill="#A8A29E" className="font-mono dark:fill-stone-600 text-[5px] rotate-[50deg] origin-center select-none">CI/CD Pipeline</text>
      </svg>

      {/* Sliding Soot Sprite */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${20 + (slidePercent / 100) * 60}%`,
          top: `${20 + (slidePercent / 100) * 160}%`,
        }}
      >
        <div className="relative flex flex-col items-center">
          <SootSpriteBase size={30} />
          {/* Git packet carried */}
          <div className="absolute -top-3 w-4 h-4 rounded bg-orange-100 border border-orange-500/40 flex items-center justify-center animate-bounce dark:bg-orange-950 dark:border-orange-800">
            <span className="text-[7px] font-mono font-bold text-orange-600 dark:text-orange-400 select-none">git</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// B: Stacking Soot Sprites carrying a database block
const SootSpriteStack: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-end w-[130px] h-[180px] pointer-events-auto select-none group cursor-pointer">
      
      {/* Database block balanced on top */}
      <div className="mb-[-4px] z-10 transition-transform duration-300 group-hover:-translate-y-2 animate-soot-bob">
        <svg viewBox="0 0 80 50" fill="none" className="w-16 h-10 stroke-stone-400 group-hover:stroke-stone-500 dark:stroke-stone-700 dark:group-hover:stroke-stone-600 transition-colors" strokeWidth="1.2">
          <rect x="5" y="5" width="70" height="40" rx="3" fill="#F5F5F4" fillOpacity="0.8" className="dark:fill-stone-900/60" />
          <ellipse cx="40" cy="12" rx="25" ry="4" fill="#E7E5E4" className="dark:fill-stone-900" />
          <path d="M 15 12 v 10 c 0 4, 50 4, 50 0 v -10 M 15 22 v 10 c 0 4, 50 4, 50 0 v -10" />
          <text x="25" y="40" fill="#EA580C" className="font-mono dark:fill-orange-400 text-[4.5px] font-bold select-none">DB_CLUSTER</text>
        </svg>
      </div>

      {/* Stacked Soot Sprites */}
      <div className="relative flex flex-col items-center">
        {/* Top Sprite */}
        <div className="z-10 animate-soot-bob" style={{ animationDelay: '0.2s' }}>
          <SootSpriteBase size={28} />
        </div>
        
        {/* Bottom Sprite (Wobbly legs holding both) */}
        <div className="mt-[-8px] animate-soot-bob" style={{ animationDelay: '0.4s' }}>
          <SootSpriteBase size={32} />
          {/* Stick Legs */}
          <svg viewBox="0 0 30 15" fill="none" className="w-8 h-4 stroke-stone-800 dark:stroke-stone-600" strokeWidth="1.5" strokeLinecap="round">
            <path d="M 8 0 Q 6 8 4 12" className="animate-wiggle" />
            <path d="M 22 0 Q 24 8 26 12" className="animate-wiggle" />
          </svg>
        </div>
      </div>

      {/* Label Box */}
      <div className="mt-1 px-2 py-0.5 rounded bg-stone-100 border border-stone-200 text-[10px] font-mono text-stone-500 dark:bg-stone-900 dark:border-stone-800 dark:text-stone-400 scale-90 group-hover:border-orange-200 dark:group-hover:border-orange-900 group-hover:bg-orange-50 dark:group-hover:bg-orange-950/40 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
        load_balancer.sh
      </div>
    </div>
  );
};

// C: Terminal Coder Soot Sprite
const SootSpriteCoder: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-[120px] h-[120px] pointer-events-none select-none">
      {/* Speech/Code Bubble */}
      <div className="mb-2 px-2 py-1 rounded-xl bg-stone-100/90 border border-stone-200/80 shadow-sm flex items-center justify-center font-mono text-[8px] text-stone-600 dark:bg-stone-900/90 dark:border-stone-800 dark:text-stone-300 animate-bounce select-none">
        <code>{"def test_qa():"}</code>
      </div>

      {/* Sprite typing on micro keyboard */}
      <div className="relative flex flex-col items-center">
        <SootSpriteBase size={30} isTyping={true} />
        
        {/* Micro Keyboard */}
        <div className="mt-[-2px] w-12 h-2.5 rounded bg-stone-200 border border-stone-400 dark:bg-stone-800 dark:border-stone-700 flex items-center justify-around px-0.5">
          <span className="w-1 h-1 rounded-sm bg-orange-400/70 dark:bg-orange-500/60" />
          <span className="w-2.5 h-1 rounded-sm bg-stone-300 dark:bg-stone-700" />
          <span className="w-1.5 h-1 rounded-sm bg-stone-300 dark:bg-stone-700" />
          <span className="w-1 h-1 rounded-sm bg-stone-300 dark:bg-stone-700" />
          <span className="w-1.5 h-1 rounded-sm bg-stone-300 dark:bg-stone-700" />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 6. COZY DEVOPS WORKSPACE PROPS
// ==========================================

// A: Steaming Clay Tea/Coffee Mug
const SteamingMug: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-[90px] h-[90px] pointer-events-none select-none">
      {/* Rising Steam waves */}
      <svg viewBox="0 0 30 30" fill="none" className="absolute top-1 w-10 h-10 stroke-orange-400/40 dark:stroke-orange-500/20" strokeWidth="1.2" strokeLinecap="round">
        <path d="M 10 25 Q 12 18 8 12 Q 10 6 7 2" className="animate-steam" style={{ animationDelay: '0s' }} />
        <path d="M 15 25 Q 13 19 16 13 Q 14 7 15 2" className="animate-steam" style={{ animationDelay: '1.2s' }} />
        <path d="M 20 25 Q 18 19 22 14 Q 19 8 20 2" className="animate-steam" style={{ animationDelay: '0.6s' }} />
      </svg>

      {/* Mug Chassis */}
      <svg viewBox="0 0 40 40" fill="none" className="w-12 h-12 stroke-stone-400 dark:stroke-stone-700" strokeWidth="1.2">
        <path d="M 10 15 h 20 v 18 a 4 4 0 0 1 -4 4 h -12 a 4 4 0 0 1 -4 -4 Z" fill="#FFF" fillOpacity="0.8" className="dark:fill-stone-900/60" />
        {/* Mug Handle */}
        <path d="M 30 19 c 4 0, 6 2, 6 6 c 0 4, -2 6, -6 6" />
        {/* Horizontal Craft Band decoration */}
        <path d="M 10 23 h 20" stroke="#EA580C" strokeWidth="1.5" strokeOpacity="0.7" className="dark:stroke-orange-500/60" />
        {/* Coaster plate */}
        <ellipse cx="20" cy="37" rx="14" ry="2" fill="#E7E5E4" className="dark:fill-stone-900" />
      </svg>
    </div>
  );
};

// B: Blinking Server Stack
const ServerStack: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-[120px] h-[150px] pointer-events-auto select-none group cursor-pointer">
      <svg viewBox="0 0 100 120" fill="none" className="w-24 h-32 stroke-stone-400 group-hover:stroke-stone-500 dark:stroke-stone-700 dark:group-hover:stroke-stone-600 transition-colors" strokeWidth="1.2">
        {/* Server Rack Cage */}
        <rect x="10" y="10" width="80" height="100" rx="5" fill="#F5F5F4" fillOpacity="0.8" className="dark:fill-stone-900/60" />
        
        {/* Server Unit 1 */}
        <rect x="15" y="18" width="70" height="24" rx="2" fill="#E7E5E4" className="dark:fill-stone-900" />
        <line x1="20" y1="30" x2="55" y2="30" strokeDasharray="1 2" />
        <circle cx="68" cy="30" r="2.2" fill="#EA580C" className="animate-led-slow stroke-none" style={{ '--led-glow': '#EA580C' } as React.CSSProperties} />
        <circle cx="76" cy="30" r="2.2" fill="#22C55E" className="animate-led-fast stroke-none" style={{ '--led-glow': '#22C55E' } as React.CSSProperties} />

        {/* Server Unit 2 */}
        <rect x="15" y="48" width="70" height="24" rx="2" fill="#E7E5E4" className="dark:fill-stone-900" />
        <line x1="20" y1="60" x2="55" y2="60" strokeDasharray="1 2" />
        <circle cx="68" cy="60" r="2.2" fill="#22C55E" className="animate-led-slow stroke-none" style={{ '--led-glow': '#22C55E' } as React.CSSProperties} />
        <circle cx="76" cy="60" r="2.2" fill="#3B82F6" className="animate-led-fast stroke-none" style={{ '--led-glow': '#3B82F6' } as React.CSSProperties} />

        {/* Server Unit 3 */}
        <rect x="15" y="78" width="70" height="24" rx="2" fill="#E7E5E4" className="dark:fill-stone-900" />
        <line x1="20" y1="90" x2="55" y2="90" strokeDasharray="1 2" />
        <circle cx="68" cy="90" r="2.2" fill="#3B82F6" className="animate-led-slow stroke-none" style={{ '--led-glow': '#3B82F6' } as React.CSSProperties} />
        <circle cx="76" cy="90" r="2.2" fill="#EA580C" className="animate-led-fast stroke-none" style={{ '--led-glow': '#EA580C' } as React.CSSProperties} />
      </svg>

      {/* A little Soot Sprite peeking from behind the rack */}
      <div className="absolute top-4 right-[-10px] z-[-10] transition-transform duration-300 group-hover:translate-x-[-6px]">
        <SootSpriteBase size={22} />
      </div>

      {/* Label Box */}
      <div className="mt-1 px-2 py-0.5 rounded bg-stone-100 border border-stone-200 text-[10px] font-mono text-stone-500 dark:bg-stone-900 dark:border-stone-800 dark:text-stone-400 scale-90 group-hover:border-orange-200 dark:group-hover:border-orange-900 group-hover:bg-orange-50 dark:group-hover:bg-orange-950/40 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
        bare_metal_rack
      </div>
    </div>
  );
};

// D: Sleeping Soot Sprite with zZZs
const SleepingSoot: React.FC = () => {
  const [sleeps, setSleeps] = useState<ZzzBubble[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSleeps((prev) => [
        ...prev.slice(-3),
        {
          id: Date.now() + Math.random(),
          x: 10 + Math.random() * 15,
          y: -20 - Math.random() * 30,
          scale: 0.7 + Math.random() * 0.6,
          delay: '0s',
        },
      ]);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-[90px] h-[95px] pointer-events-none select-none">
      {/* Floating zZZs */}
      {sleeps.map((z) => (
        <span
          key={z.id}
          className="absolute text-stone-400 dark:text-stone-600 font-mono font-bold animate-spark pointer-events-none select-none"
          style={{
            bottom: '22px',
            left: 'calc(50% + ' + z.x + 'px)',
            transform: `scale(${z.scale})`,
            fontSize: '9px',
            '--spark-x': `${z.x * 1.5}px`,
            '--spark-y': `${z.y}px`,
          } as React.CSSProperties}
        >
          zZ
        </span>
      ))}

      {/* Sleeping Soot Sprite (Fuzzy sprite with closed eyes) */}
      <div className="relative animate-drift-slow">
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 overflow-visible">
          <circle cx="12" cy="12" r="6" fill="#292524" stroke="none" />
          <path
            d="M12 6L12 2 M12 18L12 22 M6 12L2 12 M18 12L22 12 M8 8L4 4 M16 16L20 20 M8 16L4 20 M16 8L20 4 M10 7L8 4 M14 7L16 4"
            stroke="#292524"
            className="dark:stroke-stone-600"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Sleeping curved eyelashes */}
          <path d="M 8.5 12.5 Q 9.5 14 10.5 12.5 M 13.5 12.5 Q 14.5 14 15.5 12.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="mt-1 px-1.5 py-0.5 rounded bg-stone-100/60 border border-stone-200/50 text-[9px] font-mono text-stone-400 dark:bg-stone-900/60 dark:border-stone-800/50 dark:text-stone-500">
        idle_daemon.sh
      </div>
    </div>
  );
};

// ==========================================
// 7. MAIN INTERACTIVE BACKGROUND WRAPPER
// ==========================================
const FloatingCraftBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    let frameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const updateParallax = () => {
      if (!active) return;

      // Premium physics-based Lerp (Linear Interpolation) for butter-smooth organic glide!
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (containerRef.current) {
        containerRef.current.style.setProperty('--mouse-x', currentX.toFixed(4));
        containerRef.current.style.setProperty('--mouse-y', currentY.toFixed(4));
      }

      frameId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    frameId = requestAnimationFrame(updateParallax);

    return () => {
      active = false;
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Define layout structures for left and right margins to align scroll offsets nicely
  const elements = [
    // --- ZONE 1: HERO / TOP SECTION (0px - 900px) ---
    {
      id: 'calcifer_cpu',
      component: <CalciferCpu />,
      top: '120px',
      left: '3.5%',
      parallaxFactor: 14,
    },
    {
      id: 'cloud_aws',
      component: <KodamaCloud idName="aws_us_east_1" />,
      top: '220px',
      right: '4%',
      parallaxFactor: -18,
    },

    // --- ZONE 2: ABOUT / EXPERIENCE (900px - 2000px) ---
    {
      id: 'steaming_mug',
      component: <SteamingMug />,
      top: '950px',
      left: '4.5%',
      parallaxFactor: 10,
    },
    {
      id: 'jiji_terminal',
      component: <JijiTerminal />,
      top: '1250px',
      right: '3.5%',
      parallaxFactor: -22,
    },

    // --- ZONE 3: PROJECTS (2000px - 3400px) ---
    {
      id: 'soot_slider',
      component: <SootSpritePipeline />,
      top: '2150px',
      left: '2%',
      parallaxFactor: 24,
    },
    {
      id: 'soot_stack',
      component: <SootSpriteStack />,
      top: '2650px',
      right: '4%',
      parallaxFactor: -16,
    },
    {
      id: 'soot_coder',
      component: <SootSpriteCoder />,
      top: '3200px',
      left: '3%',
      parallaxFactor: 18,
    },

    // --- ZONE 4: CERTIFICATIONS / CONTACT / FOOTER (3400px+) ---
    {
      id: 'server_stack',
      component: <ServerStack />,
      top: '4000px',
      left: '4%',
      parallaxFactor: 12,
    },
    {
      id: 'sleeping_soot',
      component: <SleepingSoot />,
      top: '4300px',
      right: '5%',
      parallaxFactor: -15,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full min-h-full overflow-hidden pointer-events-none z-0 selection:bg-transparent"
    >
      {/* Ambient Floating Blurred Orbs (Studio HSL Soft Watercolors - Dark variants added) */}
      <div className="absolute top-[3%] left-[10%] w-[380px] h-[380px] rounded-full bg-orange-100/25 blur-[90px] animate-orb-1 dark:bg-orange-950/10" />
      <div className="absolute top-[22%] right-[5%] w-[480px] h-[480px] rounded-full bg-stone-200/40 blur-[130px] animate-orb-2 dark:bg-stone-900/15" />
      <div className="absolute top-[48%] left-[7%] w-[420px] h-[420px] rounded-full bg-orange-50/35 blur-[100px] animate-orb-1 dark:bg-orange-950/8" />
      <div className="absolute top-[72%] right-[8%] w-[380px] h-[380px] rounded-full bg-stone-100/45 blur-[90px] animate-orb-2 dark:bg-stone-900/15" />
      <div className="absolute top-[90%] left-[12%] w-[300px] h-[300px] rounded-full bg-orange-100/20 blur-[80px] animate-orb-1 dark:bg-orange-950/10" />

      {/* Hand-sketched Ghibli DevOps Cabin Elements Map */}
      {elements.map((item) => {
        // Position coordinates based on whether left or right is defined, driving the transform strictly through CSS variables
        const positionStyles: React.CSSProperties = {
          position: 'absolute',
          top: item.top,
          transform: `translate3d(calc(var(--mouse-x, 0) * var(--parallax-factor, 0) * 1px), calc(var(--mouse-y, 0) * var(--parallax-factor, 0) * 1px), 0)`,
          '--parallax-factor': item.parallaxFactor,
          ...(item.left ? { left: item.left } : { right: item.right }),
        } as React.CSSProperties;

        return (
          <div
            key={item.id}
            style={positionStyles}
            className="select-none will-change-transform"
          >
            {/* Desktop-only full margins rendering. Hidden on mobile to preserve vertical text column space */}
            <div className="hidden lg:block">
              {item.component}
            </div>
            
            {/* Mobile/Tablet scaled minimal rendering */}
            <div className="block lg:hidden scale-75 opacity-40">
              {item.id === 'calcifer_cpu' || item.id === 'cloud_aws' || item.id === 'sleeping_soot' ? item.component : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingCraftBackground;
