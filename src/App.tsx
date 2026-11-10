import type {ReactNode} from 'react';
import {
  ArrowUpRight,
  AudioLines,
  Check,
  Code2,
  Cpu,
  Download,
  Github,
  Lock,
  Menu,
  Mic,
  ShieldCheck,
  Smartphone,
  Sparkles,
  SquarePen,
  WifiOff,
} from 'lucide-react';
import {Nav} from './components/Nav';
import {Buddy} from './components/Buddy';
import {PhoneFrame, ChatMockup, VoiceMockup} from './components/Phone';
import {Reveal} from './components/Reveal';
import logo from './assets/poketpals.webp';

const REPO_URL = 'https://github.com/reehazshrestha/PoketPals-AI';
const DOWNLOAD_URL = `${REPO_URL}/releases/`;
const CREATOR_URL = 'https://github.com/reehazshrestha';
const PRIVACY_URL = `${REPO_URL}/blob/main/docs/legal/privacy-policy.md`;
const TERMS_URL = `${REPO_URL}/blob/main/docs/legal/terms-of-service.md`;
const NOTICES_URL = `${REPO_URL}/blob/main/docs/legal/open-source-notices.md`;

const primaryButton =
  'inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream shadow-[0_12px_30px_-14px_rgba(34,31,26,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0 sm:w-auto';
const secondaryButton =
  'inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-cream/80 px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/20 hover:bg-cream active:translate-y-0 sm:w-auto';

function Star({
  className,
  color = '#f3c8a0',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill={color}
    >
      <path d="M12 1.6c.6 4.9 3.9 8.2 8.8 8.8-4.9.6-8.2 3.9-8.8 8.8-.6-4.9-3.9-8.2-8.8-8.8 4.9-.6 8.2-3.9 8.8-8.8Z" />
    </svg>
  );
}

function Eyebrow({children}: {children: ReactNode}) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
      {children}
    </p>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="blob -right-16 -top-24 h-80 w-80 bg-peach/60" />
        <div className="blob blob-delay -left-24 top-40 h-72 w-72 bg-sky/50" />
        <div className="blob bottom-0 right-1/3 h-64 w-64 bg-sage/40" />
      </div>

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
        <div className="max-w-2xl">
          <div className="rise flex items-center gap-2" style={{animationDelay: '40ms'}}>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage-soft">
              <ShieldCheck size={13} className="text-sage-ink" />
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Private AI · on your phone
            </p>
          </div>

          <h1
            className="rise mt-5 text-[clamp(2.7rem,6.2vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.035em]"
            style={{animationDelay: '100ms'}}
          >
            A pocket-sized AI that{' '}
            <span className="relative inline-block">
              stays yours<svg
                aria-hidden="true"
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-3 w-full text-peach"
              >
                <path
                  d="M4 10C70 4 184 3 296 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </span>.
          </h1>

          <p
            className="rise mt-6 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg"
            style={{animationDelay: '160ms'}}
          >
            Chat, talk, and look things up with a language model that runs on
            your Android phone. No account, no chat uploads, no subscription.
          </p>

          <div
            className="rise mt-8 flex flex-wrap items-center gap-3"
            style={{animationDelay: '220ms'}}
          >
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              className={primaryButton}
            >
              <Download size={16} />
              Download for Android
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className={secondaryButton}
            >
              <Github size={16} />
              View on GitHub
            </a>
          </div>

          <ul
            className="rise mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted"
            style={{animationDelay: '280ms'}}
          >
            <li className="flex items-center gap-1.5">
              <ShieldCheck size={14} />
              No account
            </li>
            <li className="flex items-center gap-1.5">
              <WifiOff size={14} />
              Works offline
            </li>
            <li className="flex items-center gap-1.5">
              <Code2 size={14} />
              MIT licensed
            </li>
          </ul>
        </div>

        <div className="relative flex justify-center px-2 sm:px-6 lg:px-0">
          <div
            aria-hidden="true"
            className="absolute top-1/2 h-[22rem] w-[22rem] -translate-y-1/2 rounded-full bg-peach/45 blur-3xl sm:h-[26rem] sm:w-[26rem]"
          />

          <Star className="absolute left-2 top-8 h-6 w-6 opacity-80 sm:left-6" />
          <Star
            className="absolute right-3 top-24 h-4 w-4 opacity-70"
            color="#b6d1e5"
          />
          <Star
            className="absolute bottom-16 left-4 h-5 w-5 opacity-80 sm:left-10"
            color="#a9c6a1"
          />

          <div className="relative w-full max-w-[300px]">
            <div className="float-slow relative">
              <PhoneFrame>
                <ChatMockup />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Cpu,
    title: 'Runs on your phone',
    body: 'Download a GGUF model once, then keep chatting in airplane mode. Prompts and replies stay in the app’s local database.',
    tile: 'bg-peach-soft',
    ink: 'text-peach-ink',
  },
  {
    icon: AudioLines,
    title: 'Voice without the upsell',
    body: 'Tap the waveform in chat to start a hands-free conversation. Voice is part of the app, not a Plus purchase or an account tier.',
    tile: 'bg-sky-soft',
    ink: 'text-sky-ink',
  },
  {
    icon: Smartphone,
    title: 'Kind to modest phones',
    body: 'Low Latency Mode pairs Qwen2.5 0.5B with Piper, so budget hardware starts fast and keeps up without an oversized model.',
    tile: 'bg-sage-soft',
    ink: 'text-sage-ink',
  },
];

function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <Eyebrow>Why PoketPals</Eyebrow>
          <h2 className="mt-3 text-[clamp(1.9rem,3.5vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.025em]">
            Less setup. More conversation.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            The important things happen locally. The app stays out of your way.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 90}>
                <article className="group h-full rounded-3xl border border-line bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-30px_rgba(34,31,26,0.45)]">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-2xl ${feature.tile}`}
                  >
                    <Icon size={20} className={feature.ink} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {feature.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line/80 pt-6 text-xs font-medium text-muted">
            <span className="uppercase tracking-[0.16em]">Also inside</span>
            {[
              'GGUF model imports',
              'DuckDuckGo web search',
              'On-device benchmarks',
              'Custom accent themes',
            ].map(item => (
              <span key={item} className="flex items-center gap-1.5">
                <Check size={13} className="text-sage-ink" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Voice() {
  return (
    <section id="voice" className="scroll-mt-24 py-8 sm:py-12">
      <div className="container-page">
        <Reveal>
          <div className="overflow-hidden rounded-[2.25rem] border border-line bg-cream sm:rounded-[2.75rem]">
            <div className="grid items-center gap-8 p-4 sm:gap-10 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:p-12">
              <div className="relative order-2 flex min-w-0 justify-center overflow-hidden rounded-[1.75rem] bg-sky-soft/70 px-4 py-6 sm:px-8 sm:py-8 lg:order-none lg:py-10">
                <div className="relative w-full min-w-0 max-w-[240px] sm:max-w-[282px]">
                  <PhoneFrame>
                    <VoiceMockup />
                  </PhoneFrame>
                </div>
              </div>

              <div className="order-1 max-w-xl min-w-0 lg:order-none lg:py-4">
                <Eyebrow>Hands-free voice</Eyebrow>
                <h2 className="mt-3 text-[clamp(1.9rem,3.5vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.025em]">
                  Tap the waveform. Start talking.
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-muted">
                  The composer opens a full-screen voice view. Speak naturally;
                  when you pause, the app answers out loud. Pull down to return
                  to the chat.
                </p>

                <ul className="mt-7 space-y-4">
                  {[
                    {
                      icon: Lock,
                      text: 'Speech recognition and spoken replies run on-device after a one-time model download.',
                    },
                    {
                      icon: AudioLines,
                      text: 'Tap the cloud to send or interrupt; mute and end stay within reach.',
                    },
                    {
                      icon: Mic,
                      text: 'Six voice engines, from tiny Piper to higher-quality Kokoro and Kitten.',
                    },
                  ].map(item => {
                    const Icon = item.icon;
                    return (
                      <li key={item.text} className="flex gap-3">
                        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sky-soft">
                          <Icon size={13} className="text-sky-ink" />
                        </span>
                        <span className="text-sm leading-relaxed text-ink-soft">
                          {item.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-7 flex flex-wrap gap-1.5">
                  {[
                    'Piper',
                    'Kitten',
                    'Kokoro',
                    'Supertonic',
                    'Phonon',
                    'System',
                  ].map(engine => (
                    <span
                      key={engine}
                      className="rounded-full border border-line bg-oat px-2.5 py-1 text-[11px] font-medium text-muted"
                    >
                      {engine}
                    </span>
                  ))}
                </div>

                <a
                  href={`${REPO_URL}#features-at-a-glance`}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
                >
                  Read the full feature list
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section
      id="privacy"
      className="scroll-mt-24 border-y border-line bg-paper py-16 sm:py-24"
    >
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <Reveal className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-ink/25" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Private by architecture
              </p>
            </div>

            <h2 className="mt-5 text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-[1.03] tracking-[-0.035em]">
              What you say here stays here.
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
              No account. No chat uploads. No analytics, ads or tracking. The
              model, your conversations and your voice run on the phone in your
              hand.
            </p>

            <p className="mt-7 border-l-2 border-peach-ink/40 pl-4 font-display text-lg leading-snug text-ink sm:text-xl">
              Your chats don&apos;t leave. Not for storage, not for training.
            </p>

            <p className="mt-5 max-w-md text-xs leading-relaxed text-muted">
              The app goes online only for things you start: a model download,
              web search, optional feedback, or a service you connect. Models
              and voices arrive only when you ask.
            </p>

            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
            >
              Read the privacy policy
              <ArrowUpRight size={14} />
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div
              aria-hidden="true"
              className="relative mx-auto h-[390px] w-full max-w-[400px] sm:h-[440px]"
            >
              <div className="pocket-back" />

              <div className="pocket-note">
                <div className="flex items-center gap-2 border-b border-line/70 px-3.5 pb-2.5 pt-3.5">
                  <Menu size={12} className="text-ink" />
                  <div className="min-w-0 flex-1 text-center">
                    <p className="text-[10.5px] font-semibold leading-tight text-ink">
                      New chat
                    </p>
                    <p className="text-[8px] leading-tight text-muted">
                      Qwen2.5 0.5B
                    </p>
                  </div>
                  <SquarePen size={11} className="text-muted" />
                </div>

                <div className="space-y-3 px-3.5 pt-3">
                  <div className="flex justify-end">
                    <p className="max-w-[82%] rounded-2xl rounded-br-md bg-ink/[0.06] px-3 py-2 text-[9.5px] leading-[1.45] text-ink">
                      Can you keep this between us?
                    </p>
                  </div>
                  <p className="max-w-[90%] text-[9.5px] leading-[1.5] text-ink-soft">
                    It never left your phone. No account, no cloud copy.
                  </p>
                  <p className="max-w-[90%] text-[9.5px] leading-[1.5] text-ink-soft">
                    Web search stays off until you turn it on. Then only that
                    search goes out.
                  </p>
                </div>
              </div>

              <div className="pocket-front">
                <span className="pocket-stitch" />
                <div className="absolute inset-x-0 bottom-5 flex flex-col items-center">
                  <img
                    src={logo}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover ring-4 ring-[#e5d1b6]"
                  />
                  <p className="mt-2 flex items-center gap-1 text-[8.5px] font-semibold uppercase tracking-[0.18em] text-[#8a7258]">
                    <Lock size={9} />
                    On this phone
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-cream px-5 py-12 text-center sm:px-10 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-peach/40 blur-3xl" />
              <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-sky/35 blur-3xl" />
              <Star className="absolute left-[12%] top-10 h-5 w-5 opacity-70" />
              <Star
                className="absolute right-[14%] top-16 h-4 w-4 opacity-70"
                color="#a9c6a1"
              />
              <Star
                className="absolute bottom-10 right-[22%] h-3.5 w-3.5 opacity-60"
                color="#b6d1e5"
              />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <img
                src={logo}
                alt="PoketPals AI logo"
                className="mx-auto h-20 w-20 rounded-[1.4rem] shadow-[0_18px_40px_-22px_rgba(34,31,26,0.5)] ring-1 ring-ink/10"
              />
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Get the app
              </p>
              <h2 className="mt-3 text-[clamp(2rem,4.2vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Give your phone a private AI.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[17px] leading-relaxed text-muted">
                Free, open source, and yours to keep. Download the latest
                Android build from GitHub Releases.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={primaryButton}
                >
                  <Download size={16} />
                  Download APK
                </a>
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryButton}
                >
                  <Github size={16} />
                  Read the source
                </a>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-muted">
                Android APK · sideload from GitHub · iOS builds are not
                currently produced by this fork.
              </p>
              <p className="mt-2 text-xs text-muted">
                Built and maintained by{' '}
                <a
                  href={CREATOR_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline font-semibold text-ink"
                >
                  reehazshrestha
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    {
      title: 'Product',
      links: [
        {label: 'Features', href: '#features'},
        {label: 'Voice', href: '#voice'},
        {label: 'Privacy', href: '#privacy'},
        {label: 'Download', href: '#download'},
      ],
    },
    {
      title: 'Project',
      links: [
        {label: 'GitHub', href: REPO_URL, external: true},
        {label: 'Releases', href: DOWNLOAD_URL, external: true},
        {label: 'Issues', href: `${REPO_URL}/issues`, external: true},
        {label: 'License', href: `${REPO_URL}/blob/main/LICENSE`, external: true},
      ],
    },
    {
      title: 'Legal',
      links: [
        {label: 'Privacy policy', href: PRIVACY_URL, external: true},
        {label: 'Terms of service', href: TERMS_URL, external: true},
        {label: 'Open-source notices', href: NOTICES_URL, external: true},
      ],
    },
  ];

  return (
    <footer className="border-t border-line bg-oat">
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5"
              aria-label="PoketPals AI home"
            >
              <img
                src={logo}
                alt=""
                className="h-9 w-9 rounded-[10px] ring-1 ring-ink/10"
              />
              <span className="font-display text-lg font-semibold tracking-tight">
                PoketPals AI
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A private AI companion for your pocket. A community fork of
              PocketPal AI, built Android-first and shared under the MIT
              license.
            </p>
            <a
              href={CREATOR_URL}
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
            >
              Built by reehazshrestha
              <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map(column => (
              <div key={column.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map(link => {
                    const isExternal = 'external' in link && link.external;
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          {...(isExternal
                            ? {target: '_blank', rel: 'noreferrer'}
                            : {})}
                          className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PoketPals AI. Free and open source.</p>
          <p className="flex items-center gap-1.5">
            <Sparkles size={12} />
            Not affiliated with the PocketPal AI maintainers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Features />
        <Voice />
        <Privacy />
        <DownloadSection />
      </main>
      <Footer />
      <Buddy />
    </div>
  );
}
