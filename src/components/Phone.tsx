import type {ReactNode} from 'react';
import {
  AudioLines,
  BatteryMedium,
  Menu,
  Mic,
  Plus,
  Signal,
  SquarePen,
  Wifi,
  X,
} from 'lucide-react';

export function PhoneFrame({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`phone-shell ${className}`} aria-hidden="true">
      <span className="phone-side phone-side-left" />
      <span className="phone-side phone-side-right" />
      <div className="phone-screen flex aspect-[9/19.3] flex-col">
        {children}
        <div className="phone-camera" />
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[10px] font-semibold text-ink">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <Signal size={11} strokeWidth={2.5} />
        <Wifi size={11} strokeWidth={2.5} />
        <BatteryMedium size={14} strokeWidth={2} />
      </div>
    </div>
  );
}

export function ChatMockup() {
  return (
    <>
      <StatusBar />
      <div className="mt-3 flex items-center gap-2 border-b border-line/70 px-3.5 pb-2.5">
        <Menu size={15} className="text-ink" />
        <div className="min-w-0 flex-1 text-center">
          <p className="text-[11px] font-semibold leading-tight text-ink">
            New chat
          </p>
          <p className="text-[8px] leading-tight text-muted">Qwen2.5 0.5B</p>
        </div>
        <SquarePen size={14} className="text-ink" />
      </div>

      <div className="flex-1 space-y-3.5 overflow-hidden px-3.5 py-3.5">
        <p className="text-center text-[8px] text-muted">Today</p>

        <div className="flex justify-end">
          <div className="max-w-[82%] rounded-2xl rounded-br-md bg-ink/[0.06] px-3 py-2 text-[9.5px] leading-[1.45] text-ink">
            Plan a cheap 3-day trip to Pokhara.
          </div>
        </div>

        <p className="max-w-[92%] text-[9.5px] leading-[1.5] text-ink-soft">
          Lakeside on day one, Sarangkot for sunrise on day two, then keep day
          three slow. Want a budget?
        </p>

        <div className="flex justify-end">
          <div className="max-w-[82%] rounded-2xl rounded-br-md bg-ink/[0.06] px-3 py-2 text-[9.5px] leading-[1.45] text-ink">
            Yes — keep it under $300.
          </div>
        </div>

        <p className="max-w-[92%] text-[9.5px] leading-[1.5] text-ink-soft">
          Stay in Lakeside, eat local, take the bus. That leaves room for a boat
          ride.
        </p>

        <div className="flex justify-end">
          <div className="max-w-[82%] rounded-2xl rounded-br-md bg-ink/[0.06] px-3 py-2 text-[9.5px] leading-[1.45] text-ink">
            What should I pack?
          </div>
        </div>

        <p className="max-w-[92%] text-[9.5px] leading-[1.5] text-ink-soft">
          Light layers, a rain shell, and shoes you can walk in.
        </p>
      </div>

      <div className="rounded-t-[18px] bg-ink px-3 pb-2.5 pt-3">
        <div className="flex items-center gap-2.5">
          <Plus size={14} className="shrink-0 text-cream/60" />
          <span className="flex-1 text-[8.5px] text-cream/45">
            Type your message here
          </span>
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-peach text-ink">
            <AudioLines size={12} />
          </span>
        </div>
        <div className="mx-auto mt-2.5 h-1 w-24 rounded-full bg-cream/15" />
      </div>
    </>
  );
}

export function VoiceMockup() {
  return (
    <div className="flex h-full flex-col bg-[#fbfaf7] text-ink">
      <StatusBar />

      <div className="flex shrink-0 flex-col items-center justify-center gap-1.5 pt-3">
        <span className="h-[5px] w-10 rounded-full bg-[#b7b3ad]" />
        <span className="text-[8.5px] text-muted">
          Pull down to see the chat
        </span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 pb-2">
        <div className="voice-cloud" aria-hidden="true" />

        <div className="text-center">
          <p className="text-[15px] font-semibold leading-tight">Listening</p>
          <p className="mx-auto mt-1.5 max-w-[190px] text-[9px] leading-[1.5] text-muted">
            Pause when you&apos;re done, or tap the cloud to send
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-center gap-6 pb-7">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-ink/[0.05] text-ink">
          <Mic size={19} />
        </span>
        <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-cream">
          <X size={19} />
        </span>
      </div>
    </div>
  );
}
