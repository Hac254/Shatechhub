'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Contact SHATECH HUB for consultations, quotes, or to learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+254702791852" className="text-primary hover:underline">
                    +254 702 791 852
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Available Mon-Fri 9am-6pm, Sat 9am-12pm</p>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-foreground">
                    Machakos County
                    <br />
                    Masinga, Thatha Sub-location
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Visit our demo farm for live demonstrations</p>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                  <p className="text-foreground text-sm">
                    <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM
                    <br />
                    <span className="font-medium">Saturday:</span> 9:00 AM - 12:00 PM
                    <br />
                    <span className="font-medium">Sunday:</span> Closed
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <a
                  href="https://wa.me/254702791852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold flex items-center gap-2"
                >
                  <span>💬 Chat with us on WhatsApp</span>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Map and Additional Info */}
          <div>
            {/* Embedded Map */}
            <Card className="bg-card border-border overflow-hidden h-96 mb-6">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4557531831726!2d37.28805!3d-1.91633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18281c8e5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sMasinga%2C%20Machakos%20County!5e0!3m2!1sen!2ske!4v1234567890"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Card>

            {/* Call to Action */}
            <Card className="bg-secondary/20 border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Ready to Transform Your Farm?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Our team is ready to discuss your farm&apos;s needs and create a customized sustainable solutions plan for you.
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">📞 Call:</span> +254 702 791 852
                  </p>
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">📧 Email:</span>{' '}
                    <a href="mailto:info@shatechhub.ke" className="text-primary hover:underline">
                      info@shatechhub.ke
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    &quot;We don&apos;t just sell solutions—we grow legacies.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
