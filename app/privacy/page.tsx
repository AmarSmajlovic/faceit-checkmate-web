import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { BrandLogo, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description:
    "How FACEIT CheckMate handles your data. Short version: it doesn't leave your browser.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-3xl items-center px-5 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <BrandLogo size={26} />
            <span className="font-display text-base font-bold uppercase italic tracking-tight">
              Check<span className="text-faceit-orange">Mate</span>
            </span>
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-6">
        <Eyebrow>Last updated · 1 July 2026</Eyebrow>
        <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight">
          Privacy Policy
        </h1>

        <div className="mt-12 space-y-9 text-white/70">
          <Section title="The short version">
            FACEIT CheckMate runs entirely inside your browser. It does not create an account, does
            not sell data, and does not send your match history to any server we control.
          </Section>

          <Section title="What it reads">
            To find a match you shared with a banned player, the extension reads your own FACEIT
            session and match data from the FACEIT website you are already logged into. This happens
            locally, only while you use the feature, and is never persisted.
          </Section>

          <Section title="What it stores">
            The extension stores no personal data on our servers. Any temporary data used to compare
            matches lives in your browser&apos;s memory and is discarded when the tab or browser
            closes.
          </Section>

          <Section title="Analytics">
            {/* Update this section to match whatever analytics provider you enable. */}
            We may collect anonymous, aggregated usage events (for example, how often a match check
            succeeds or fails) to improve the extension. These events contain no nicknames, account
            IDs, or personally identifiable information.
          </Section>

          <Section title="Third parties">
            The extension interacts only with FACEIT&apos;s own website and, where relevant, public
            Steam community pages — the same sites you already visit. It does not share your data with
            advertisers.
          </Section>

          <Section title="Contact">
            Questions? Reach out via the{" "}
            <Link href={site.discordUrl} className="text-faceit-orange hover:underline">
              Discord
            </Link>{" "}
            or the developer listed on the Chrome Web Store page.
          </Section>
        </div>

        <Link
          href="/"
          className="mt-14 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          ← Back home
        </Link>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white">{title}</h2>
      <p className="mt-2.5 leading-relaxed">{children}</p>
    </section>
  );
}
