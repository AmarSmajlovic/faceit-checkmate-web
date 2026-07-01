# FACEIT CheckMate — Landing page

A one-page Next.js site for the FACEIT CheckMate extension. Tactical/CS-inspired
dark theme with the FACEIT orange accent.

## Run locally

```bash
cd website
npm install
npm run dev
# open http://localhost:3000
```

## Before you ship

Edit `lib/site.ts`:

- `chromeUrl` — your real Chrome Web Store link (used by every CTA).
- `feedbackEndpoint` — create a free form at [Formspree](https://formspree.io)
  (or [Web3Forms](https://web3forms.com)) and paste its POST URL. Submissions
  land in your inbox; no backend needed.
- `discordUrl` / `authorUrl` — optional community + author links.
- `stats.users` — the social-proof number shown across the page.

## Deploy (free)

Push this `website/` folder to a repo and import it on **Vercel** (framework:
Next.js, root directory: `website`). Point `faceitcheckmate.com` at it in the
Vercel domains tab. Netlify works the same way.

## Structure

- `app/page.tsx` — the landing page (all sections).
- `app/privacy/page.tsx` — privacy policy (Chrome requires one).
- `components/NotificationMock.tsx` — the in-browser recreation of the extension.
- `components/ui.tsx` — shared bits (logo, buttons, HUD labels).
