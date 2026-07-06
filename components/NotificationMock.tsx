/**
 * The product shown as a before/after: the real FACEIT "Notifications" panel,
 * once without the extension (dimmed, behind) and once with the MATCH DETAILS
 * button CheckMate injects (front). Faithful to the live UI — the button uses
 * the exact styles content.ts applies.
 */

function NotificationPanel({ withButton }: { withButton: boolean }) {
  return (
    <div className="w-full rounded-lg border border-line bg-[#1f1f22] shadow-2xl shadow-black/60">
      {/* panel header */}
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <span className="text-[15px] font-bold text-white">Notifications</span>
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/60" fill="none" stroke="currentColor" aria-hidden>
          <path d="M6 6l12 12M18 6 6 18" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* the notification */}
      <div className="px-5 py-4">
        <p className="text-xs font-medium text-white/40">03 Jan 2025</p>

        <div className="mt-3 flex items-start gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-black/40">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-faceit-orange" fill="none" aria-hidden>
              <path d="M4 15 20 6l-6 12-2-5-8 2Z" fill="currentColor" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[13px] leading-snug text-white/85">
              <span className="font-semibold text-white">player</span> has been
              banned, thank you for your report!
            </p>
            <div className="mt-1.5 flex items-center gap-1.5 text-white/40">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" aria-hidden>
                <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
                <path d="m6 6 12 12" strokeWidth="1.8" />
              </svg>
              <span className="text-xs font-medium">16:00 GMT+1</span>
            </div>
          </div>
        </div>

        {withButton && (
          /* injected button — same styles the extension applies (content.ts) */
          <button
            type="button"
            className="mt-4 flex h-8 w-full items-center justify-center rounded-[4px] bg-[rgb(255,85,0)] px-4 text-[11px] font-bold uppercase text-white"
          >
            Match Details
          </button>
        )}
      </div>

      {withButton && (
        /* older notification, skeletonized — keeps the panel feeling real */
        <div className="border-t border-line px-5 py-4 opacity-40">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-white/10" />
            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-2.5 w-4/5 rounded bg-white/10" />
              <div className="h-2.5 w-2/5 rounded bg-white/10" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function NotificationMock() {
  return (
    <div className="relative w-full max-w-md rise-slow">
      {/* accent bloom behind the composition */}
      <div className="absolute -inset-10 -z-10 bg-faceit-orange/10 blur-3xl" />

      {/* BEFORE — no extension, nothing to click, dimmed */}
      <div className="relative mr-10 opacity-40 saturate-50 sm:mr-14">
        <span className="clip-chip absolute -top-3 left-4 z-10 bg-ink-600 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
          Without CheckMate
        </span>
        <NotificationPanel withButton={false} />
      </div>

      {/* AFTER — CheckMate injected the button */}
      <div className="relative -mt-6 ml-10 sm:ml-14">
        <span className="clip-chip absolute -top-3 left-4 z-10 bg-faceit-orange px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-black">
          With CheckMate
        </span>
        <NotificationPanel withButton />

        {/* floating result chip */}
        <div className="clip-chip absolute -bottom-5 -right-3 flex items-center gap-3 border border-line bg-ink-700 px-4 py-2.5 shadow-xl shadow-black/50">
          <span className="grid h-7 w-7 place-items-center bg-faceit-orange/15 text-faceit-orange">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" aria-hidden>
              <path d="m5 13 4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="leading-tight">
            <p className="font-display text-[13px] font-bold uppercase tracking-wide text-white">
              1 shared match
            </p>
            <p className="font-mono text-[10px] text-white/45">found instantly</p>
          </div>
        </div>
      </div>
    </div>
  );
}
