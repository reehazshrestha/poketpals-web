import {useEffect, useState} from 'react';
import {Download, Github, Menu, X} from 'lucide-react';
import logo from '../assets/poketpals.webp';

const links = [
  {href: '#features', label: 'Features'},
  {href: '#voice', label: 'Voice'},
  {href: '#privacy', label: 'Privacy'},
];

const REPO_URL = 'https://github.com/reehazshrestha/PoketPals-AI';
const DOWNLOAD_URL = `${REPO_URL}/releases/`;

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-oat/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-xl"
          aria-label="PoketPals AI home"
        >
          <img
            src={logo}
            alt=""
            className="h-9 w-9 rounded-[10px] ring-1 ring-ink/10"
          />
          <span className="flex items-center gap-1.5">
            <span className="font-display text-[17px] font-semibold tracking-tight">
              PoketPals
            </span>
            <span className="rounded-full bg-peach-soft px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              AI
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="PoketPals AI on GitHub"
            className="hidden h-10 w-10 place-items-center rounded-full border border-line bg-cream/70 text-ink-soft transition-colors duration-200 hover:border-ink/20 hover:bg-cream hover:text-ink sm:grid"
          >
            <Github size={17} />
          </a>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0"
          >
            <Download size={15} />
            Download
          </a>
          <button
            type="button"
            onClick={() => setOpen(value => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-cream/70 text-ink md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="menu-in absolute inset-x-0 top-full border-b border-line bg-oat/98 p-5 shadow-[0_20px_40px_-30px_rgba(34,31,26,0.4)] backdrop-blur-md md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3.5 text-base font-medium text-ink-soft"
              >
                {link.label}
              </a>
            ))}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 py-3.5 text-base font-medium text-ink-soft"
            >
              <Github size={16} />
              GitHub project
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
