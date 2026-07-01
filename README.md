<div align="center">

<img src="./public/logo.png" alt="FACEIT CheckMate" width="120" height="120" />

# FACEIT CheckMate — Website

**Find the match a banned cheater cost you.**

The official landing page for the [FACEIT CheckMate](https://chromewebstore.google.com/detail/faceit-checkmate/pidnlcmjcfpelmbiaiemggaajmfjcjij) browser extension.

[![Add to Chrome](https://img.shields.io/badge/Add%20to%20Chrome-Free-FF5500?style=for-the-badge&logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/faceit-checkmate/pidnlcmjcfpelmbiaiemggaajmfjcjij)
&nbsp;
![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## What is FACEIT CheckMate?

On FACEIT, cheaters and smurfs often get banned **days or weeks after** the match
you played against them — long after your ELO is gone. By the time you get the
_"player has been banned, thank you for your report"_ notification, finding **which**
match it was means scrolling through months of history.

**CheckMate fixes that in one click.** The moment a ban notification lands, it drops
a button on it that finds the exact match you shared with that player and takes you
straight to the room — so you can review and report it. Free, no account, and it
reads only your own data.

> 🔎 CheckMate's job is to **find the match**. Reporting it and any ELO review are
> handled by FACEIT.

## This repository

This repo contains the **marketing website** for the extension — a single-page
Next.js app with the FACEIT-inspired tactical theme.

- 🎯 Hero with a live recreation of the in-browser notification
- ⚙️ How-it-works, benefits, founder note and FAQ
- 📨 Built-in bug / feedback form (no backend required)
- 🔒 Privacy policy page
- 📱 Fully responsive, dark-mode native, OG + favicon set

## Tech stack

| | |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS |
| **Fonts** | Space Grotesk · Inter · JetBrains Mono |
| **Hosting** | Vercel |

## Local development

```bash
git clone https://github.com/AmarSmajlovic/faceit-checkmate-web.git
cd faceit-checkmate-web
npm install
npm run dev
```

Open **http://localhost:3000**.

## Configuration

All links, copy and social proof live in [`lib/site.ts`](./lib/site.ts):

| Field | What it does |
|---|---|
| `chromeUrl` | Chrome Web Store link used by every CTA |
| `feedbackEndpoint` | POST URL for the feedback form — create a free form at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) |
| `stats.users` | The social-proof number shown across the page |
| `discordUrl` / `authorUrl` | Optional community + author links |

## Deploy

Deployed on **Vercel**:

1. Import this repo at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected.
2. Add your custom domain under **Settings → Domains** and point DNS as instructed.
3. Every push to `main` triggers an automatic redeploy.

## Project structure

```
app/
  page.tsx          # The landing page (all sections)
  privacy/page.tsx  # Privacy policy
  layout.tsx        # Fonts + metadata (OG, Twitter, favicon)
  icon.png          # Favicon      apple-icon.png # iOS touch icon
components/
  NotificationMock.tsx  # In-browser recreation of the extension
  FeedbackForm.tsx      # Bug / feedback form
  ui.tsx                # Shared UI (logo, buttons, proof pill)
lib/site.ts         # Central config
```

---

<div align="center">

Made with 🧡 by [picrone](https://github.com/AmarSmajlovic) · Not affiliated with FACEIT or Valve Corporation.

</div>
