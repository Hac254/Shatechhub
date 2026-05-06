'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  serviceType?: string
}

export default function ContactModal({ isOpen, onClose, serviceType }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    farmSize: '',
    service: serviceType || '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      alert('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    // Construct the WhatsApp message with form data
    const whatsappMessage = `Hello SHATECH HUB,

I'm interested in your services. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Farm Size: ${formData.farmSize || 'Not specified'}
Service Interest: ${formData.service}
${formData.message ? `Message: ${formData.message}` : ''}

Please get back to me with more information and a quote.

Thank you!`

    // Encode the message for WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/254702791852?text=${encodedMessage}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')

    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      farmSize: '',
      service: serviceType || '',
      message: '',
    })
    setIsSubmitting(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-card border border-border rounded-lg shadow-xl max-w-md w-full animate-fade-in">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          {/* Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Get In Touch</h2>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and we&apos;ll connect with you on WhatsApp to discuss your farming needs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name <span className="text-accent">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address <span className="text-accent">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number <span className="text-accent">*</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 700 000 000"
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>

              {/* Farm Size */}
              <div>
                <label htmlFor="farmSize" className="block text-sm font-medium text-foreground mb-2">
                  Farm Size (acres)
                </label>
                <Input
                  id="farmSize"
                  name="farmSize"
                  type="text"
                  value={formData.farmSize}
                  onChange={handleChange}
                  placeholder="e.g., 5 acres"
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Interest <span className="text-accent">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Drip Kits & Irrigation Installation">Drip Kits & Irrigation Installation</option>
                  <option value="Organic Farming & Manure">Organic Farming & Manure</option>
                  <option value="Terracing for Drylands">Terracing for Drylands</option>
                  <option value="Nursery & Demo Farm">Nursery & Demo Farm</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your farming challenges or requirements..."
                  rows={4}
                  className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2"
              >
                {isSubmitting ? 'Connecting...' : 'Connect via WhatsApp'}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Your information will be sent securely to our WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
