'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold">S</span>
              </div>
              <span className="font-bold text-lg text-background">SHATECH HUB</span>
            </div>
            <p className="text-background/80 text-sm mb-4">
              Cultivating Resilience, Rooted in Innovation
            </p>
            <p className="text-background/70 text-sm">
              Transforming lives in Machakos through sustainable agricultural solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-background/80 hover:text-background transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-background/80 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-background mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-background/80">Drip Irrigation Kits</span>
              </li>
              <li>
                <span className="text-background/80">Organic Farming</span>
              </li>
              <li>
                <span className="text-background/80">Terracing Systems</span>
              </li>
              <li>
                <span className="text-background/80">Demo Farm Visits</span>
              </li>
              <li>
                <span className="text-background/80">Training Programs</span>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-background mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm mb-6">
              <p className="text-background/80">
                <a href="tel:+254702791852" className="hover:text-background transition-colors">
                  +254 702 791 852
                </a>
              </p>
              <p className="text-background/80">Machakos, Kenya</p>
              <p className="text-background/80">Mon-Fri 9am-6pm, Sat 9am-12pm</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-background/10 rounded hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="text-center text-sm text-background/70 mb-4">
            <p className="italic text-background/80 font-semibold mb-2">
              &quot;We don&apos;t just sell solutions—we grow legacies.&quot;
            </p>
          </div>

          <div className="text-center text-sm text-background/70">
            <p>© {currentYear} SHATECH HUB. All rights reserved. | Machakos, Kenya</p>
            <p className="mt-2">
              <span className="text-background/60">Supporting sustainable agriculture and farmer empowerment</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
