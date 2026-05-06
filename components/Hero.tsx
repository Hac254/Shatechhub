import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  onContactClick: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-farm.jpg"
          alt="Thriving semi-arid farm in Machakos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Changing Lives, Empowering Smallholder Farmers
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto text-balance">
            Drip irrigation kits, organic farming, terracing—sustainable solutions for resilient growth in Machakos
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay">
          <Link href="#services" className="flex-1 sm:flex-initial">
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Learn More
            </Button>
          </Link>
          <Button
            size="lg"
            onClick={onContactClick}
            variant="outline"
            className="flex-1 sm:flex-initial border-white text-white hover:bg-white/10 font-semibold"
          >
            Contact Us
          </Button>
          <Link href="#about" className="flex-1 sm:flex-initial">
            <Button
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Support Our Mission
            </Button>
          </Link>
        </div>

        {/* Tagline */}
        <div className="text-lg sm:text-xl text-gray-200 font-semibold italic">
          "Cultivating Resilience, Rooted in Innovation"
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  )
}
