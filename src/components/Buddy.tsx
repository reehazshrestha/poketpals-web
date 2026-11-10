import {useEffect, useRef, useState} from 'react';

type Mood = 'idle' | 'happy' | 'love' | 'dizzy';

const TAPS_TO_DIZZY = 5;
const TAP_WINDOW = 1200;
const HOLD_MS = 600;
const HOVER_MS = 800;
const MOOD_MS = 1600;

const EYES = [
  {cx: 27, cy: 33},
  {cx: 45, cy: 33},
];

function Eye({mood}: {mood: Mood}) {
  if (mood === 'love') {
    return (
      <path
        d="M0 2.6C0 -0.2 3.4 -0.8 4.3 1.2 5.2 -0.8 8.6 -0.2 8.6 2.6 8.6 5.4 4.3 8.2 4.3 8.2 4.3 8.2 0 5.4 0 2.6Z"
        transform="translate(-4.3 -2.6)"
        fill="#221f1a"
      />
    );
  }

  if (mood === 'dizzy') {
    return (
      <path
        d="M4.3 1.4a3 3 0 1 1-2.7 3.9"
        fill="none"
        stroke="#221f1a"
        strokeWidth="1.7"
        strokeLinecap="round"
        transform="translate(-2.4 -2.4)"
      />
    );
  }

  if (mood === 'happy') {
    return (
      <path
        d="M-3.4 1.4q3.4-4.4 6.8 0"
        fill="none"
        stroke="#221f1a"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    );
  }

  return <rect x="-3.1" y="-4.6" width="6.2" height="9.2" rx="3.1" fill="#221f1a" />;
}

/**
 * Small companion in the corner. Eyes follow the pointer and the scroll
 * direction; tap it a lot and it gets dizzy, hold or hover and it falls for you.
 * Decorative: hidden from assistive tech, no meaningful info behind it.
 */
export function Buddy() {
  const [mood, setMood] = useState<Mood>('idle');
  const [hearts, setHearts] = useState(0);
  const [squash, setSquash] = useState(false);

  const eyesRef = useRef<SVGGElement>(null);
  const moodTimer = useRef<number | undefined>(undefined);
  const holdTimer = useRef<number | undefined>(undefined);
  const hoverTimer = useRef<number | undefined>(undefined);
  const taps = useRef({count: 0, last: 0});
  const loveFired = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const look = (x: number, y: number) => {
      const clamp = (v: number) => Math.max(-2.2, Math.min(2.2, v));
      const node = eyesRef.current;
      if (node) {
        node.style.transform = `translate(${clamp(x).toFixed(2)}px, ${clamp(y).toFixed(2)}px)`;
      }
    };

    const setMoodFor = (next: Mood, ms: number) => {
      window.clearTimeout(moodTimer.current);
      setMood(next);
      moodTimer.current = window.setTimeout(() => setMood('idle'), ms);
    };

    const onPointerMove = (event: PointerEvent) => {
      const node = eyesRef.current;
      if (!node) {
        return;
      }
      const rect = node.closest('svg')?.getBoundingClientRect();
      if (!rect) {
        return;
      }
      const dx = (event.clientX - (rect.left + rect.width / 2)) / 90;
      const dy = (event.clientY - (rect.top + rect.height / 2)) / 90;
      look(dx, dy);
    };

    let lastY = window.scrollY;
    let frame = 0;
    let settle = 0;
    const onScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        const delta = y - lastY;
        lastY = y;
        look(0, delta > 0 ? 2.2 : -2.2);
        setSquash(Math.abs(delta) > 40);
        window.clearTimeout(settle);
        settle = window.setTimeout(() => {
          look(0, 0);
          setSquash(false);
        }, 320);
      });
    };

    window.addEventListener('pointermove', onPointerMove, {passive: true});
    window.addEventListener('scroll', onScroll, {passive: true});

    const hit = eyesRef.current?.closest('.buddy-hit');
    const onEnter = () => {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = window.setTimeout(() => {
        loveFired.current = true;
        setHearts(h => h + 1);
        setMoodFor('love', MOOD_MS);
      }, HOVER_MS);
    };
    const onLeave = () => {
      window.clearTimeout(hoverTimer.current);
      window.clearTimeout(holdTimer.current);
    };

    hit?.addEventListener('pointerenter', onEnter);
    hit?.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      hit?.removeEventListener('pointerenter', onEnter);
      hit?.removeEventListener('pointerleave', onLeave);
      window.clearTimeout(moodTimer.current);
      window.clearTimeout(holdTimer.current);
      window.clearTimeout(hoverTimer.current);
      window.clearTimeout(settle);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const onPointerDown = () => {
    loveFired.current = false;
    window.clearTimeout(holdTimer.current);
    holdTimer.current = window.setTimeout(() => {
      loveFired.current = true;
      setHearts(h => h + 1);
      setMood('love');
      window.clearTimeout(moodTimer.current);
      moodTimer.current = window.setTimeout(() => setMood('idle'), MOOD_MS);
    }, HOLD_MS);
  };

  const onPointerUp = () => {
    window.clearTimeout(holdTimer.current);
    if (loveFired.current) {
      return;
    }

    const now = Date.now();
    const state = taps.current;
    state.count = now - state.last > TAP_WINDOW ? 1 : state.count + 1;
    state.last = now;

    if (state.count >= TAPS_TO_DIZZY) {
      state.count = 0;
      setMood('dizzy');
      window.clearTimeout(moodTimer.current);
      moodTimer.current = window.setTimeout(() => setMood('idle'), MOOD_MS);
      return;
    }

    setMood('happy');
    window.clearTimeout(moodTimer.current);
    moodTimer.current = window.setTimeout(() => setMood('idle'), 700);
  };

  return (
    <div className={`buddy buddy-${mood}${squash ? ' buddy-squash' : ''}`}>
      <div
        aria-hidden="true"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="buddy-hit block h-full w-full cursor-pointer"
      >
        <svg viewBox="0 0 72 72" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="buddy-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbe8d5" />
              <stop offset="100%" stopColor="#f3c8a0" />
            </linearGradient>
          </defs>

          <g className="buddy-body">
            <ellipse cx="36" cy="66" rx="20" ry="4" fill="#221f1a" opacity="0.12" />
            <path
              d="M36 5C55 5 67 17 67 38 67 57 54 67 36 67 18 67 5 57 5 38 5 17 17 5 36 5Z"
              fill="url(#buddy-body)"
              stroke="#221f1a"
              strokeOpacity="0.1"
            />

            {(mood === 'love' || mood === 'happy') && (
              <>
                <circle cx="16" cy="44" r="3.4" fill="#e58f6f" opacity="0.5" />
                <circle cx="56" cy="44" r="3.4" fill="#e58f6f" opacity="0.5" />
              </>
            )}

            <g ref={eyesRef} className="buddy-eyes">
              <g className="buddy-blink">
                {EYES.map(eye => (
                  <g key={eye.cx} transform={`translate(${eye.cx} ${eye.cy})`}>
                    <Eye mood={mood} />
                  </g>
                ))}
              </g>
            </g>
          </g>
        </svg>
      </div>

      {hearts > 0 && (
        <div key={hearts} aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="buddy-heart left-3 top-2" />
          <span className="buddy-heart buddy-heart-2 right-2 top-4" />
          <span className="buddy-heart buddy-heart-3 left-1/2 top-0" />
        </div>
      )}
    </div>
  );
}
