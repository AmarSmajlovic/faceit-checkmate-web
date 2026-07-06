"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { site } from "@/lib/site";

const TYPES = ["Bug", "Idea", "Other"] as const;
type FeedbackType = (typeof TYPES)[number];
type Status = "idle" | "sending" | "ok" | "error";

export function FeedbackForm() {
  const [type, setType] = useState<FeedbackType>("Bug");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const data = new FormData(form);
    data.set("type", type);
    data.set("access_key", site.web3formsKey);
    data.set("subject", `CheckMate ${type} report`);
    data.set("from_name", "FACEIT CheckMate");

    try {
      const res = await fetch(site.feedbackEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("ok");
        track("feedback_submitted", { type });
        form.reset();
        setType("Bug");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="clip-panel flex h-full min-h-[19rem] flex-col items-center justify-center border border-line bg-ink-800 p-8 text-center">
        <span className="grid h-12 w-12 place-items-center bg-faceit-orange/15 text-faceit-orange">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
            <path d="m5 13 4 4L19 7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-white">
          Got it — thank you.
        </h3>
        <p className="mt-2 max-w-xs text-sm text-white/55">
          Every report makes CheckMate better. If you left an email, I&apos;ll get back to you.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-display text-sm font-bold uppercase tracking-[0.1em] text-faceit-orange hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="clip-panel border border-line bg-ink-800 p-6 sm:p-7"
    >
      {/* honeypot for spam bots (Web3Forms checks this field) */}
      <input type="checkbox" name="botcheck" tabIndex={-1} className="hidden" style={{ display: "none" }} />

      <div className="flex gap-2" role="tablist" aria-label="Feedback type">
        {TYPES.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            aria-pressed={type === t}
            className={`clip-chip flex-1 px-3 py-2 font-display text-sm font-bold uppercase tracking-[0.08em] transition ${
              type === t
                ? "bg-faceit-orange text-black"
                : "bg-ink-700 text-white/55 hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <label className="mt-5 block text-sm font-medium text-white/70">
        What&apos;s on your mind?
        <textarea
          name="message"
          required
          rows={4}
          placeholder={
            type === "Bug"
              ? "It said 'Auth Error' after clicking Match Details on..."
              : "It would be great if CheckMate could also..."
          }
          className="mt-2 w-full resize-none border border-line bg-ink-900 px-3.5 py-3 text-sm text-white placeholder:text-white/25 focus:border-faceit-orange/60 focus:outline-none focus:ring-1 focus:ring-faceit-orange/40"
        />
      </label>

      <label className="mt-4 block text-sm font-medium text-white/70">
        Email <span className="font-normal text-white/35">(optional, so I can reply)</span>
        <input
          type="email"
          name="email"
          placeholder="you@email.com"
          className="mt-2 w-full border border-line bg-ink-900 px-3.5 py-3 text-sm text-white placeholder:text-white/25 focus:border-faceit-orange/60 focus:outline-none focus:ring-1 focus:ring-faceit-orange/40"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="clip-cta mt-6 w-full bg-faceit-orange py-3.5 font-display text-sm font-bold uppercase tracking-[0.1em] text-black shadow-[0_10px_30px_-10px_rgba(255,85,0,0.55)] transition hover:bg-faceit-glow disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send feedback"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-loss">
          Couldn&apos;t send — try again, or ping me on Discord.
        </p>
      )}
    </form>
  );
}
