'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'James Kariuki',
    location: 'Masinga, Machakos',
    quote:
      'SHATECH HUB transformed my farm. With drip irrigation and organic methods, my yields tripled while using half the water. Their support has been invaluable.',
    rating: 5,
  },
  {
    name: 'Maria Mwangi',
    location: 'Machakos County',
    quote:
      'The terracing work protected my farm from erosion. Now my soil is healthier, my crops grow stronger, and I feel confident about the future.',
    rating: 5,
  },
  {
    name: 'Peter Kamau',
    location: 'Thatha Sub-location',
    quote:
      'Coming from traditional farming to climate-smart techniques was an investment that paid off immediately. My neighbors can see the difference. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Grace Kamuthoni',
    location: 'Machakos',
    quote:
      'The organic farming methods increased my soil fertility and reduced my input costs. SHATECH HUB truly grows legacies, not just solutions.',
    rating: 5,
  },
  {
    name: 'David Muthui',
    location: 'Masinga Region',
    quote:
      'Water conservation with their drip systems saved me money during dry seasons. The whole community is interested now. Thank you for this innovation!',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Farmer Success Stories</h2>
          <p className="text-xl text-muted-foreground">
            Real transformations from farmers in Machakos who trusted us with their future.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              {/* Testimonial Content */}
              <div className="mb-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl sm:text-2xl text-foreground italic font-medium mb-6 leading-relaxed">
                  &quot;{currentTestimonial.quote}&quot;
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground text-lg">{currentTestimonial.name}</p>
                  <p className="text-muted-foreground">{currentTestimonial.location}</p>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex gap-2">
                  <Button
                    onClick={goToPrevious}
                    variant="outline"
                    size="icon"
                    className="border-border hover:bg-secondary"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={goToNext}
                    variant="outline"
                    size="icon"
                    className="border-border hover:bg-secondary"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-primary w-8' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Counter */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              {currentIndex + 1} of {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
