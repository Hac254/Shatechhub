'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

export default function HomeClient() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [selectedService, setSelectedService] = useState<string | undefined>()

  const openContactModal = (service?: string) => {
    setSelectedService(service)
    setShowContactModal(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation onContactClick={() => openContactModal()} />
      <Hero onContactClick={() => openContactModal()} />
      <Services onGetQuoteClick={openContactModal} />
      <Gallery />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        serviceType={selectedService}
      />
    </main>
  )
}