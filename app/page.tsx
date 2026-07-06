import Link from "next/link";
import { site } from "@/lib/site";
import { NotificationMock } from "@/components/NotificationMock";
import { FeedbackForm } from "@/components/FeedbackForm";
import {
  BrandLogo,
  ChromeIcon,
  CtaButton,
  Eyebrow,
  ProofPill,
} from "@/components/ui";

const STATS = [
  { value: site.stats.users, label: "FACEIT players" },
  { value: "1 CLICK", label: "to the exact match" },
  { value: "0", label: "data stored on a server" },
  { value: "FREE", label: "no account, ever" },
];

const TICKER_ITEMS = [
  "You report",
  "FACEIT bans",
  "CheckMate finds the match",
  "You open the room",
  "ELO review",
];

const STEPS = [
  {
    n: "01",
    title: "A ban notification lands",
    body: "FACEIT tells you a player you reported has been banned. CheckMate spots it and drops a button right on the notification.",
  },
  {
    n: "02",
    title: "Your history is cross-referenced",
    body: "One click compares your recent matches against theirs and pinpoints the exact game you shared — locally, in seconds.",
  },
  {
    n: "03",
    title: "You land in the match room",
    body: "The shared match opens in a new tab, ready to review and submit — so you can make the case to get your ELO back.",
  },
];

const BENEFITS = [
  {
    title: "No digging through history",
    body: "The button appears the moment a ban notification does. No scrolling months of matches trying to remember which game it was.",
    icon: (
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" strokeWidth="1.8" strokeLinejoin="round" />
    ),
  },
  {
    title: "Straight to the evidence",
    body: "One click opens the exact FACEIT match room, so you can review the game and report it while it still counts.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" strokeWidth="1.8" />
        <path d="m16.5 16.5 4.5 4.5" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Private by design",
    body: "Reads only your own FACEIT data, on your machine. No account, no tracking of your gameplay, nothing sent to a server.",
    icon: (
      <path
        d="M12 3 5 6v5c0 4.4 3 7.3 7 8.5 4-1.2 7-4.1 7-8.5V6l-7-3Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
  },
];

const FAQS = [
  {
    q: "Does CheckMate get my ELO back for me?",
    a: "No — and honestly, nothing can do that automatically. CheckMate's one job is to instantly find the exact match you shared with a banned player. Actually reporting it and any ELO review is handled by FACEIT — CheckMate just makes sure you can find and open the right game in seconds instead of scrolling for an hour.",
  },
  {
    q: "Is CheckMate actually free?",
    a: "Yes — completely. No trial, no paywall, no account. It started as a fix for the developer's own problem and stayed free.",
  },
  {
    q: "Can using it get my FACEIT account banned?",
    a: "No. CheckMate never automates actions on FACEIT or touches other players' accounts. It only reads pages you're already logged into — the same thing you'd see clicking through your own match history.",
  },
  {
    q: "What data does it access?",
    a: "Only your own match history, locally in your browser, to compare it against a player you were notified about. Nothing is stored or sent to a server we control.",
  },
  {
    q: "Which browsers are supported?",
    a: "Chrome today (it also installs on Edge from the Chrome Web Store). Firefox support is on the roadmap.",
  },
  {
    q: "Which games does it work with?",
    a: "It's built for CS2 on FACEIT — the game where a late ban costs you the most ELO.",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-dots" />
      <div className="pointer-events-none absolute inset-0 hero-wash" />

      <div className="relative">
        <AnnouncementBar />
        <Nav />
        <Hero />
        <Ticker />
        <Stats />
        <Problem />
        <HowItWorks />
        <Benefits />
        <FounderNote />
        <Faq />
        <Feedback />
        <FinalCta />
        <Footer />
      </div>
    </main>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-content px-5 sm:px-6 ${className}`}>{children}</div>;
}

function AnnouncementBar() {
  return (
    <div className="border-b border-line bg-ink-900">
      <Container className="flex items-center justify-center gap-2.5 py-2 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
        <span className="blink h-1.5 w-1.5 bg-faceit-orange" />
        Live · trusted by <span className="font-semibold text-white">{site.stats.users}</span>
        FACEIT players catching cheaters
      </Container>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandLogo size={30} />
          <span className="font-display text-xl font-bold uppercase italic tracking-tight">
            Check<span className="text-faceit-orange">Mate</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-9 font-display text-sm font-semibold uppercase tracking-[0.1em] text-white/55 md:flex">
          <a href="#how" className="transition-colors hover:text-white">How it works</a>
          <a href="#why" className="transition-colors hover:text-white">Why</a>
          <a href="#faq" className="transition-colors hover:text-white">FAQ</a>
        </nav>
        <CtaButton className="!px-5 !py-2.5 !text-[12px]">
          <ChromeIcon className="h-4 w-4" />
          Add to Chrome
        </CtaButton>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-16 pb-20 pt-14 md:grid-cols-[1.05fr_0.95fr] md:pb-28 md:pt-20">
        <div className="rise">
          <div className="clip-chip inline-flex items-center gap-2.5 border border-line bg-ink-800 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 bg-faceit-orange" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
              FACEIT · CS2
            </span>
          </div>

          <h1 className="mt-7 font-display text-6xl font-bold uppercase leading-[0.88] tracking-[-0.01em] sm:text-[5.5rem]">
            They got
            <br />
            banned.
            <br />
            <span className="relative inline-block text-faceit-orange">
              Find the match.
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-faceit-orange/80" />
            </span>
          </h1>

          <p className="mt-8 max-w-md text-[16px] leading-relaxed text-white/60">
            The moment FACEIT bans a player you reported, CheckMate pinpoints the
            exact match you shared with them — open it, review it, report it.
            One click, no scrolling through months of history.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CtaButton size="lg">
              <ChromeIcon className="h-5 w-5" />
              Add to Chrome — free
            </CtaButton>
            <a
              href="#how"
              className="inline-flex items-center gap-2 px-2 font-display text-sm font-semibold uppercase tracking-[0.1em] text-white/60 transition-colors hover:text-white"
            >
              See how it works
              <span aria-hidden className="text-faceit-orange">↓</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
            <ProofPill />
            <div className="flex items-center gap-4 font-mono text-[12px] uppercase tracking-wider text-white/40">
              {["Free", "No account"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-faceit-orange" fill="none" stroke="currentColor">
                    <path d="m5 13 4 4L19 7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <NotificationMock />
        </div>
      </Container>
    </section>
  );
}

function Ticker() {
  const row = (
    <div className="flex shrink-0 items-center">
      {TICKER_ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-6 px-6 font-display text-sm font-bold uppercase tracking-[0.18em] text-black"
        >
          {item}
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
            <path d="m12 2 2.4 7.6H22l-6.2 4.5 2.4 7.5-6.2-4.7-6.2 4.7 2.4-7.5L2 9.6h7.6L12 2Z" />
          </svg>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative -skew-y-1 overflow-hidden border-y-2 border-black bg-faceit-orange py-2.5">
      <div className="ticker-track" aria-hidden>
        {row}
        {row}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="border-b border-line bg-ink-900">
      <Container>
        <dl className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-line">
          {STATS.map((s) => (
            <div key={s.label} className="px-2 py-9 md:px-8">
              <dt className="font-display text-4xl font-bold italic tracking-tight text-white sm:text-5xl">
                {s.value}
              </dt>
              <dd className="mt-1.5 font-mono text-[12px] uppercase tracking-wider text-white/45">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <Eyebrow>The problem</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl">
          You were right.
          <br />
          <span className="text-white/40">The ELO is still gone.</span>
        </h2>
        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/60">
          FACEIT confirms your report days later — and by then the match is
          buried under a hundred others. Which game was it? Which map? Good
          luck scrolling.{" "}
          <span className="font-semibold text-faceit-orange">
            CheckMate finds it in one click.
          </span>
        </p>
      </Container>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="border-t border-line bg-ink-900 py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Three steps. <span className="text-faceit-orange">Zero effort.</span>
          </h2>
          <p className="mt-4 text-white/55">
            You don&apos;t configure anything. The extension waits for the notification and does the
            work the second it arrives.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="relative">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-6xl font-bold italic leading-none text-faceit-orange">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-white">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Benefits() {
  return (
    <section id="why" className="py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Why players keep it installed</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Built for one job. <span className="text-white/40">Does it well.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="clip-panel group border border-line bg-ink-900 p-7 transition-colors hover:border-faceit-orange/40"
            >
              <div className="grid h-11 w-11 place-items-center bg-faceit-orange/10 text-faceit-orange ring-1 ring-faceit-orange/25">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
                  {b.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-white">
                {b.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">{b.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FounderNote() {
  return (
    <section className="border-y border-line bg-ink-900 py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl border-l-2 border-faceit-orange pl-7 sm:pl-10">
          <Eyebrow>Why it exists</Eyebrow>
          <blockquote className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-white/90 sm:text-4xl">
            &ldquo;I kept getting the &lsquo;player banned&rsquo; notification days after the match —
            and I could never find which game it was to get my ELO reviewed. So I built CheckMate to
            do it in one click.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-3.5">
            <BrandLogo size={40} />
            <div>
              <p className="font-display text-base font-bold uppercase tracking-wide text-white">
                {site.author}
              </p>
              <p className="font-mono text-[12px] text-white/45">Creator of FACEIT CheckMate</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-28">
      <Container className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Straight answers.
          </h2>
          <p className="mt-4 text-sm text-white/55">
            Still unsure? Read the{" "}
            <Link href={site.privacyUrl} className="text-faceit-orange hover:underline">
              privacy policy
            </Link>{" "}
            — it&apos;s short.
          </p>
        </div>

        <div>
          {FAQS.map((f) => (
            <details key={f.q} className="group border-b border-line py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold uppercase tracking-wide text-white/85 transition-colors hover:text-white">
                {f.q}
                <span className="faq-plus grid h-6 w-6 shrink-0 place-items-center text-faceit-orange transition-transform duration-200">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
                    <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Feedback() {
  return (
    <section id="feedback" className="border-t border-line bg-ink-900 py-24 sm:py-28">
      <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <Eyebrow>Feedback</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Found a bug? <span className="text-faceit-orange">Got an idea?</span>
          </h2>
          <p className="mt-4 max-w-md text-white/55">
            CheckMate is built by one person and shaped by the people who use it. If something
            broke, or you want it to do more, tell me — it genuinely decides what gets built next.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-white/55">
            {[
              "Auth errors or wrong matches — send the details",
              "Feature ideas (bulk scan, Firefox, more games)",
              "Anything that felt confusing or slow",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-faceit-orange" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <FeedbackForm />
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-24">
      <Container>
        <div className="clip-panel relative overflow-hidden border border-line bg-ink-900 px-6 py-16 text-center sm:py-20">
          <div className="stripes absolute inset-x-0 top-0 h-1.5" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(255,85,0,0.16),transparent_70%)]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl">
              Stop letting cheaters
              <br />
              <span className="text-faceit-orange">ghost your ELO.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-white/55">
              Free forever. Installs in one click. Works the next time a banned player shows up in
              your notifications.
            </p>
            <div className="mt-9 flex flex-col items-center gap-5">
              <CtaButton size="lg">
                <ChromeIcon className="h-5 w-5" />
                Add CheckMate to Chrome
              </CtaButton>
              <ProofPill />
            </div>
          </div>
          <div className="stripes absolute inset-x-0 bottom-0 h-1.5" />
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink-900">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <BrandLogo size={30} />
              <span className="font-display text-lg font-bold uppercase italic tracking-tight">
                Check<span className="text-faceit-orange">Mate</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Find the cheater&apos;s match the second they&apos;re banned — then let FACEIT do the
              rest.
            </p>
            <div className="mt-5">
              <CtaButton className="!px-5 !py-2.5 !text-[12px]">
                <ChromeIcon className="h-4 w-4" />
                Add to Chrome
              </CtaButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol title="Product">
              <FooterLink href="#how">How it works</FooterLink>
              <FooterLink href="#why">Why</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
            </FooterCol>
            <FooterCol title="Get it">
              <FooterLink href={site.chromeUrl} external>Chrome Web Store</FooterLink>
              <FooterLink href="#feedback">Report a bug</FooterLink>
              <FooterLink href={site.discordUrl}>Discord</FooterLink>
            </FooterCol>
            <FooterCol title="Legal">
              <FooterLink href={site.privacyUrl}>Privacy</FooterLink>
            </FooterCol>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-7 font-mono text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} FACEIT CheckMate · Built by a player who got tired of losing ELO to cheaters.
          </p>
          <p className="text-white/25">
            Not affiliated with FACEIT or Valve Corporation.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-faceit-orange/70">
        // {title}
      </p>
      <ul className="mt-4 space-y-2.5 text-sm text-white/55">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        {...(external ? { target: "_blank", rel: "noopener" } : {})}
        className="transition-colors hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
