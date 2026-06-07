import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const BASE_URL = 'https://shatechhub.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Title ──────────────────────────────────────────────────────────────────
  // `template` means every page can set just its own short title and the suffix
  // is appended automatically, e.g. "Services | SHATECH HUB"
  title: {
    default: 'SHATECH HUB – Drip Irrigation & Organic Farming in Machakos, Kenya',
    template: '%s | SHATECH HUB',
  },

  // ── Core meta ──────────────────────────────────────────────────────────────
  description:
    'SHATECH HUB empowers smallholder farmers in Machakos with affordable drip irrigation kits, organic farming, and terracing. Sustainable agricultural solutions across Masinga and Machakos County, Kenya.',
  keywords: [
    'drip irrigation Machakos',
    'drip irrigation kits Kenya',
    'organic farming Kenya',
    'terracing drylands Kenya',
    'smallholder farmer support Kenya',
    'sustainable farming Machakos',
    'agricultural consultancy Kenya',
    'irrigation installation Masinga',
    'climate smart farming Kenya',
    'SHATECH HUB',
  ],
  authors: [{ name: 'SHATECH HUB', url: BASE_URL }],
  creator: 'SHATECH HUB',
  publisher: 'SHATECH HUB',

  // ── Canonical URL ──────────────────────────────────────────────────────────
  // Tells Google this is the definitive URL — prevents duplicate-content issues
  alternates: {
    canonical: '/',
  },

  // ── Open Graph (WhatsApp, Facebook, LinkedIn previews) ────────────────────
  openGraph: {
    title: 'SHATECH HUB – Drip Irrigation & Organic Farming in Machakos',
    description:
      'Transforming lives through sustainable agricultural solutions in Machakos, Kenya. Drip kits, organic farming, terracing, and demo farm visits.',
    url: BASE_URL,
    siteName: 'SHATECH HUB',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: '/hero-farm.jpg', // must be in /public — already exists on your site
        width: 1200,
        height: 630,
        alt: 'Thriving semi-arid farm in Machakos, Kenya – SHATECH HUB',
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'SHATECH HUB – Drip Irrigation & Organic Farming in Machakos',
    description:
      'Affordable drip irrigation kits, organic farming & terracing for smallholder farmers in Machakos, Kenya.',
    images: ['/hero-farm.jpg'],
  },

  // ── Icons (kept exactly as you had them) ──────────────────────────────────
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },

  // ── Crawling & indexing ───────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large', // lets Google show large image previews
      'max-snippet': -1,            // no limit on text snippets in search results
      'max-video-preview': -1,
    },
  },

  // ── Geo hints (helps local/maps search) ───────────────────────────────────
  // Not an official Next.js type but Next forwards unknown keys as-is
  other: {
    'geo.region': 'KE-300',          // ISO 3166-2 code for Machakos County
    'geo.placename': 'Machakos, Kenya',
    'geo.position': '-1.91633;37.28805',
    'ICBM': '-1.91633, 37.28805',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      {/*
        No manual <head> needed — Next.js injects all metadata above automatically.
        Only add things here that the Metadata API cannot express.
      */}
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}