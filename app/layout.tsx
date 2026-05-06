import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SHATECH HUB - Agricultural Consultancy for Smallholder Farmers in Machakos',
  description: 'Transform your farm with drip irrigation, organic farming, and terracing. SHATECH HUB empowers smallholder farmers in Machakos with sustainable solutions.',
  keywords: 'agriculture, drip irrigation, organic farming, terracing, Machakos, Kenya, smallholder farmers, sustainable farming',
  authors: [{ name: 'SHATECH HUB' }],
  openGraph: {
    title: 'SHATECH HUB - Cultivating Resilience, Rooted in Innovation',
    description: 'Transforming lives through sustainable agricultural solutions in Machakos, Kenya',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
