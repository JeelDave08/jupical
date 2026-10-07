/* ============================================================
   NetworkCanvas — animated blue-dot network that reacts to the
   mouse pointer.  aria-hidden, pointer-events:none on the text
   layer so mouse events reach the canvas.
   ============================================================ */
import { useRef, useEffect } from 'react';

const REDUCE = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

export default function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, particles = [];
    let mouse = { x: -999, y: -999 };
    let rafId = null;
    let paused = false;

    /* --- sizing --- */
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(90, Math.floor((W * H) / 14000));
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    }

    /* --- single frame --- */
    function draw() {
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        if (!REDUCE) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d = Math.hypot(dx, dy);
          if (d < 160) {
            p.x += dx * 0.012;
            p.y += dy * 0.012;
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        ctx.fillStyle = 'rgba(10,108,255,.7)';
        ctx.beginPath();
        ctx.arc(a.x, a.y, 2.2, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 140) {
            ctx.strokeStyle = `rgba(10,108,255,${0.28 * (1 - d / 140)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < 170) {
          ctx.strokeStyle = `rgba(10,108,255,${0.6 * (1 - dm / 170)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      if (!REDUCE && !paused) rafId = requestAnimationFrame(draw);
    }

    /* --- IntersectionObserver to pause when off-screen --- */
    const heroEl = canvas.parentElement;
    const io = new IntersectionObserver(
      ([entry]) => {
        paused = !entry.isIntersecting;
        if (!paused && !REDUCE) {
          rafId = requestAnimationFrame(draw);
        }
      },
      { threshold: 0 }
    );
    if (heroEl) io.observe(heroEl);

    /* --- pointer tracking on hero parent --- */
    function onMove(e) {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    }
    function onLeave() {
      mouse.x = -999;
      mouse.y = -999;
    }

    heroEl?.addEventListener('pointermove', onMove);
    heroEl?.addEventListener('pointerleave', onLeave);

    window.addEventListener('resize', () => {
      resize();
      if (REDUCE) draw();
    });

    resize();
    draw();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      io.disconnect();
      heroEl?.removeEventListener('pointermove', onMove);
      heroEl?.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="phil-hero__canvas"
    />
  );
}
