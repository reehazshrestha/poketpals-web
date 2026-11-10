import {useEffect, useRef, type ReactNode} from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Fades content in once, when it enters the viewport.
 * The hidden state only exists when JS is running (`.js` on <html>),
 * and reduced-motion users get the final state immediately.
 */
export function Reveal({children, className = '', delay = 0}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
            observer.disconnect();
          }
        }
      },
      {threshold: 0.12, rootMargin: '0px 0px -40px 0px'},
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{transitionDelay: `${delay}ms`}}
    >
      {children}
    </div>
  );
}
