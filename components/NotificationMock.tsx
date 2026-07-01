import { BrandLogo } from "./ui";

/**
 * The product shown in context: a minimal browser frame containing the real
 * FACEIT "player has been banned" notification, with the orange MATCH DETAILS
 * button the extension injects. Faithful to the live UI — no screenshot needed.
 */
export function NotificationMock() {
  return (
    <div className="relative w-full max-w-md rise-slow">
      {/* soft accent bloom behind the frame */}
      <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-faceit-orange/10 blur-3xl" />

      {/* browser window */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/60">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="ml-3 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 text-center text-[11px] text-white/40">
            faceit.com
          </div>
          <BrandLogo size={18} />
        </div>

        {/* the FACEIT notification */}
        <div className="p-4">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="text-xs font-medium text-white/40">03 Jan 2025</p>

            <div className="mt-3 flex items-start gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-faceit-orange" fill="none">
                  <path d="M4 15 20 6l-6 12-2-5-8 2Z" fill="currentColor" />
                </svg>
              </div>
              <p className="text-[13px] leading-snug text-white/85">
                <span className="font-semibold text-white">player</span> has been
                banned, thank you for your report!
              </p>
            </div>

            <div className="mt-3 flex items-center gap-1.5 text-white/40">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
                <path d="m6 6 12 12" strokeWidth="1.8" />
              </svg>
              <span className="text-xs font-medium">16:00 GMT+1</span>
            </div>

            {/* injected button — rounded orange, exactly like the extension */}
            <button
              type="button"
              className="mt-4 w-full rounded-md bg-faceit-orange py-2.5 text-[12px] font-bold uppercase tracking-wide text-black"
            >
              Match Details
            </button>

            <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-faceit-orange/70">
              <BrandLogo size={12} />
              added by CheckMate
            </div>
          </div>
        </div>
      </div>

      {/* floating result chip */}
      <div className="absolute -bottom-5 -right-3 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-ink-800 px-4 py-2.5 shadow-xl shadow-black/50">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-faceit-orange/15 text-faceit-orange">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor">
            <path d="m5 13 4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="leading-tight">
          <p className="text-[12px] font-semibold text-white">1 shared match</p>
          <p className="text-[10px] text-white/45">matched instantly</p>
        </div>
      </div>
    </div>
  );
}
