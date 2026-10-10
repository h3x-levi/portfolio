import React, { useEffect, useRef, useState } from 'react';
import { Icons, EMAIL } from './icons';

const VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0., 1.); }`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uCenter;
uniform float uScale;
uniform float uIntro;
uniform float uScroll;

float sdRoundBox(vec3 p, vec3 b, float r) { vec3 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.) - r; }
float smin(float a, float b, float k) { float h = clamp(.5 + .5 * (b - a) / k, 0., 1.); return mix(b, a, h) - k * h * (1. - h); }
mat2 rot(float a) { float s = sin(a), c = cos(a); return mat2(c, -s, s, c); }

float map(vec3 p) {
  float t = uTime;
  vec3 c0 = vec3(uCenter + vec2(0., (1. - uIntro) * 2.4 + uScroll * 1.1), 0.);
  vec3 q = (p - c0) / uScale;
  q.xz *= rot(.35 + .08 * sin(t * .3) + uScroll * .7);
  q.yz *= rot(-.25 + uScroll * .3);
  float d = sdRoundBox(q, vec3(.78, .03, .1), .18);
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    vec3 c = vec3(sin(t * .45 + fi * 1.9) * 1.05, cos(t * .38 + fi * 2.4) * .62 - .15, sin(t * .31 + fi * 1.3) * .3);
    d = smin(d, length(q - c) - (.07 + .03 * fi) * uIntro, .24);
  }
  d *= uScale;
  return smin(d, length(p - vec3(uMouse, .2)) - .16 * uScale * uIntro, .4 * uScale);
}

vec3 nrm(vec3 p) {
  vec2 e = vec2(.0015, 0.);
  return normalize(vec3(map(p + e.xyy) - map(p - e.xyy), map(p + e.yxy) - map(p - e.yxy), map(p + e.yyx) - map(p - e.yyx)));
}

vec3 env(vec3 r) {
  vec3 field = vec3(.184, .239, 1.);
  vec3 col = mix(field * .25, field * 1.05, smoothstep(-.7, .5, r.y));
  col += vec3(1.) * smoothstep(.78, .9, r.y) * smoothstep(.75, .1, abs(r.x)) * 2.2;
  col += vec3(1.) * smoothstep(.8, .93, -r.x) * smoothstep(.6, 0., abs(r.y - .1)) * 1.4;
  col += vec3(1., .36, .66) * smoothstep(.5, .95, r.x) * smoothstep(.7, -.2, r.y) * 1.3;
  return col;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - .5 * uRes) / uRes.y;
  vec3 ro = vec3(0., 0., 5.5);
  vec3 rd = normalize(vec3(uv, -2.));
  float t = 0., md = 1e3;
  bool hit = false;
  for (int i = 0; i < 64; i++) {
    vec3 p = ro + rd * t;
    float d = map(p);
    md = min(md, d);
    if (d < .001) { hit = true; break; }
    t += d;
    if (t > 9.) break;
  }
  if (hit) {
    vec3 p = ro + rd * t, n = nrm(p), r = reflect(rd, n);
    float fres = pow(1. - max(dot(n, -rd), 0.), 3.);
    vec3 col = vec3(.018, .018, .024) + env(r) * (.07 + .93 * fres) + env(r) * .22 * smoothstep(.2, 1., r.y);
    col += pow(max(dot(r, normalize(vec3(-.4, .8, .6))), 0.), 90.) * 1.2;
    gl_FragColor = vec4(col, 1.);
  } else {
    gl_FragColor = vec4(0., 0., 0., (1. - smoothstep(0., .5, md)) * .28);
  }
}`;

const VIEW = 2.75;

const LiquidNotch: React.FC<{ active: boolean }> = ({ active }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeRef = useRef(active);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: 'high-performance' });
    if (!gl) {
      setFailed(true);
      return;
    }
    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setFailed(true);
      return;
    }
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const u = (name: string) => gl.getUniformLocation(prog, name);
    const uRes = u('uRes'), uTime = u('uTime'), uMouse = u('uMouse'), uCenter = u('uCenter');
    const uScale = u('uScale'), uIntro = u('uIntro'), uScroll = u('uScroll');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const layout = { cx: 1.3, cy: 0.5, scale: 1 };
    const mouse = { x: 2, y: 0, tx: 2, ty: 0, inside: false };
    let intro = reduce ? 1 : 0;
    let visible = true;
    let raf = 0;

    let rect = canvas.getBoundingClientRect();
    const resize = () => {
      rect = canvas.getBoundingClientRect();
      const mobile = rect.width < 760;
      const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1 : 1.25);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      const halfW = (rect.width / rect.height) * VIEW * 0.5;
      if (rect.width / rect.height >= 1.1) {
        layout.scale = Math.min(0.84, (rect.width / rect.height) / 1.9);
        layout.cx = halfW - 0.92 * layout.scale - 0.04;
        layout.cy = 0.52;
      } else {
        layout.scale = Math.max(0.36, Math.min(0.8, halfW * 0.62));
        layout.cx = halfW * 0.18;
        layout.cy = VIEW * 0.5 - 0.5;
      }
      gl.uniform2f(uCenter, layout.cx, layout.cy);
      gl.uniform1f(uScale, layout.scale);
      if (reduce) draw(performance.now());
    };

    const onMove = (e: PointerEvent) => {
      if (!visible) return;
      mouse.inside = e.clientY < rect.bottom && e.clientY > rect.top;
      mouse.tx = ((e.clientX - rect.left - rect.width / 2) / rect.height) * VIEW;
      mouse.ty = -((e.clientY - rect.top - rect.height / 2) / rect.height) * VIEW;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      rect = canvas.getBoundingClientRect();
    });
    io.observe(canvas);
    const onLost = (e: Event) => {
      e.preventDefault();
      setFailed(true);
    };
    canvas.addEventListener('webglcontextlost', onLost);

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const t0 = performance.now();
    let last = t0;
    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (activeRef.current && intro < 1) intro = Math.min(1, intro + dt * 0.72);
      const eased = 1 - Math.pow(1 - intro, 3);
      if (!mouse.inside || !finePointer) {
        mouse.tx = layout.cx + 0.95 * layout.scale + Math.sin(now / 1400) * 0.15;
        mouse.ty = layout.cy - 0.55 * layout.scale + Math.cos(now / 1700) * 0.12;
      }
      const ease = 1 - Math.pow(0.93, dt * 60);
      mouse.x += (mouse.tx - mouse.x) * ease;
      mouse.y += (mouse.ty - mouse.y) * ease;
      gl.uniform1f(uTime, reduce ? 4 : (now - t0) / 1000 + 4);
      gl.uniform1f(uIntro, eased);
      gl.uniform1f(uScroll, Math.min(1, window.scrollY / window.innerHeight));
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const frame = (now: number) => {
      if (visible && !document.hidden) draw(now);
      raf = requestAnimationFrame(frame);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    if (reduce) {
      mouse.x = mouse.tx = layout.cx + 0.95 * layout.scale;
      mouse.y = mouse.ty = layout.cy - 0.55 * layout.scale;
      draw(performance.now());
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('webglcontextlost', onLost);
    };
  }, []);

  return failed ? <div className="hero-fallback" aria-hidden="true" /> : <canvas ref={canvasRef} className="hero-gl" aria-hidden="true" />;
};

const split = (word: string, offset: number) =>
  [...word].map((ch, i) => (
    <span key={i} className="ch" style={{ '--i': i + offset } as React.CSSProperties}>
      {ch}
    </span>
  ));

const acts = [
  { id: 'olivia', name: 'Olivia', line: 'voice assistant in the notch', live: true },
  { id: 'signal', name: 'Signal', line: 'social listening for Amazon Luna' },
  { id: 'stepwise', name: 'StepWise', line: 'SOPs from your clicks' },
  { id: 'utter', name: 'Utter', line: 'dictation for macOS' },
];

const ActIcon: React.FC<{ id: string }> = ({ id }) => {
  if (id === 'olivia') return <span className="act-ico"><span className="mascot" style={{ '--strip': 'url(/work/olivia/mascot-speak.png)' } as React.CSSProperties} /></span>;
  if (id === 'signal') return <span className="act-ico"><Icons.Signal size={22} /></span>;
  if (id === 'stepwise') return <span className="act-ico"><Icons.Steps size={22} /></span>;
  return <span className="act-ico"><Icons.Wave size={22} /></span>;
};

const Hero: React.FC<{ booted: boolean; onOpen: (id: string) => void }> = ({ booted, onOpen }) => (
  <section id="hero" className="hero">
    <LiquidNotch active={booted} />
    <div className="wrap">
      <div className="hero-copy">
        <p className="hero-line">I build software that <b>listens.</b></p>
        <h1 className="hero-name">
          <span className="sr-only">Akshay Mondal</span>
          <span aria-hidden="true">{split('Akshay', 0)}</span>
          <span aria-hidden="true">{split('Mondal', 6)}</span>
        </h1>
        <p className="hero-sub">
          Support Engineer II at Amazon Luna. I ship voice assistants, social listening and the tools ops teams wish they had.
        </p>
        <div className="hero-cta">
          <a className="pill pill-ink" href="#projects">
            See the work <Icons.Arrow size={16} />
          </a>
          <a className="pill pill-line" href={`mailto:${EMAIL}`}>
            Email me
          </a>
        </div>
      </div>

      <ul className="hero-acts" aria-label="Featured projects">
        {acts.map((a, i) => (
          <li key={a.id}>
            <button
              type="button"
              className="island act"
              style={{ '--i': i } as React.CSSProperties}
              onClick={() => onOpen(a.id)}
              aria-label={`Open ${a.name}: ${a.line}`}
            >
              <ActIcon id={a.id} />
              <span className="act-txt">
                <b>{a.name}</b>
                <span>{a.line}</span>
              </span>
              {a.live && <span className="live-dot" aria-hidden="true" />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
