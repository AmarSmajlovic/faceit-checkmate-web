import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const title = `${site.name} — Find the match a banned cheater cost you`;
const description =
  "When FACEIT bans a player you reported, CheckMate instantly finds the exact match you shared with them — one click, straight to the room. Free, no account, reads only your own data.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "faceit",
    "cs2",
    "cheater checker",
    "banned player",
    "reclaim elo",
    "faceit extension",
  ],
  metadataBase: new URL(`https://${site.domain}`),
  openGraph: {
    title,
    description,
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
