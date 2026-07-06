"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { site } from "@/lib/site";

/** Mono section label with a slash prefix — reads like a HUD callout. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">
      <span className="text-faceit-orange">//</span>
      {children}
    </span>
  );
}

/** The real extension icon, framed so its square artwork reads as intentional. */
export function BrandLogo({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      className={`inline-grid shrink-0 place-items-center overflow-hidden ring-1 ring-white/10 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="FACEIT CheckMate logo"
        width={size}
        height={size}
        priority
      />
    </span>
  );
}

export function ChromeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 2a10 10 0 0 1 8.66 5H12a5 5 0 0 0-4.9 6.06L3.34 6.6A10 10 0 0 1 12 2Zm-8.9 6.6 4.36 7.56A5 5 0 0 0 12 17a5 5 0 0 0 .9-.08l-3.6 6.02A10 10 0 0 1 3.1 8.6ZM12 22a10 10 0 0 1-.13 0l4.35-7.56A5 5 0 0 0 17 12a5 5 0 0 0-.8-2.72l6.63.02A10 10 0 0 1 12 22Zm0-6a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
    </svg>
  );
}

/** Angular social-proof chip — player count as a scoreboard stat. */
export function ProofPill({ className = "" }: { className?: string }) {
  return (
    <div
      className={`clip-chip inline-flex items-center gap-3 border border-line bg-ink-800 py-2 pl-4 pr-5 ${className}`}
    >
      <span className="font-display text-lg font-bold italic leading-none text-faceit-orange">
        {site.stats.users}
      </span>
      <span className="text-[13px] text-white/60">FACEIT players on board</span>
    </div>
  );
}

/**
 * The signature CTA: a hard-edged parallelogram, uppercase condensed label.
 * Content is counter-skewed so text stays upright.
 */
export function CtaButton({
  children,
  variant = "solid",
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  size?: "md" | "lg";
  className?: string;
}) {
  const variants = {
    solid:
      "bg-faceit-orange text-black hover:bg-faceit-glow shadow-[0_10px_30px_-10px_rgba(255,85,0,0.55)]",
    ghost: "bg-ink-700 text-white/85 hover:bg-ink-600",
  };
  const sizes = {
    md: "px-6 py-3 text-[13px]",
    lg: "px-9 py-4 text-[15px]",
  };
  return (
    <Link
      href={site.chromeUrl}
      target="_blank"
      rel="noopener"
      onClick={() => track("add_to_chrome", { variant })}
      className={`clip-cta inline-flex items-center justify-center gap-2.5 font-display font-bold uppercase tracking-[0.08em] transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-faceit-orange/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
