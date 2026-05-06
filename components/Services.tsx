import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Droplets, Leaf, Mountain, Sprout } from 'lucide-react'

interface ServicesProps {
  onGetQuoteClick: (service: string) => void
}

const services = [
  {
    title: 'Drip Kits & Irrigation Installation',
    description: 'Direct-to-root delivery, zero waste, saves water, time, and money for sustainable farming.',
    icon: Droplets,
    image: '/drip-irrigation.jpg',
    benefits: ['Water conservation', 'Higher yields', 'Reduced labor costs'],
  },
  {
    title: 'Organic Farming & Manure',
    description: 'Restore soil health, reduce chemicals, perfect for semi-arid areas with lasting impact.',
    icon: Leaf,
    image: '/organic-farm.jpg',
    benefits: ['Healthy soil', 'Natural growth', 'Chemical-free'],
  },
  {
    title: 'Terracing for Drylands',
    description: 'Conserve water, revive soil, combat climate change with proven land management.',
    icon: Mountain,
    image: '/terraced-farm.jpg',
    benefits: ['Water retention', 'Soil restoration', 'Climate resilience'],
  },
  {
    title: 'Nursery & Demo Farm',
    description: 'Clean nursery, business demonstrations, sustainable practices showcased on-site.',
    icon: Sprout,
    image: '/demo-farm.jpg',
    benefits: ['Live demonstrations', 'Quality plants', 'Training available'],
  },
]

export default function Services({ onGetQuoteClick }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive agricultural solutions tailored to transform your farm and boost yields sustainably.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div
                key={service.title}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-card border-border">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-foreground">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Benefits */}
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <Button
                      onClick={() => onGetQuoteClick(service.title)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
