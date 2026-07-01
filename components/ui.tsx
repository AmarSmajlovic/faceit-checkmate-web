"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { site } from "@/lib/site";

/** Small mono caption above a heading. Used sparingly. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-faceit-orange">
      {children}
    </span>
  );
}

/** The real extension icon, framed so its square artwork reads as intentional. */
export function BrandLogo({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      className={`inline-grid shrink-0 place-items-center overflow-hidden rounded-lg ring-1 ring-white/10 ${className}`}
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

/** Clean, monochrome social-proof pill — no rainbow avatars. */
export function ProofPill({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-4 ${className}`}
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-faceit-orange/15 text-faceit-orange">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor">
          <path
            d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm13 9v-1a4 4 0 0 0-3-3.87M16 4.13A4 4 0 0 1 16 12"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-sm text-white/65">
        <span className="font-semibold text-white">{site.stats.users}</span> FACEIT players on board
      </span>
    </div>
  );
}

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
      "bg-faceit-orange text-black font-semibold shadow-[0_12px_36px_-12px_rgba(255,85,0,0.65)] hover:brightness-[1.08]",
    ghost:
      "text-white/85 font-medium ring-1 ring-inset ring-white/15 hover:ring-white/35 hover:bg-white/[0.03]",
  };
  const sizes = {
    md: "px-5 py-3 text-sm",
    lg: "px-7 py-4 text-[15px]",
  };
  return (
    <Link
      href={site.chromeUrl}
      target="_blank"
      rel="noopener"
      onClick={() => track("add_to_chrome", { variant })}
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl tracking-tight transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-faceit-orange/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
