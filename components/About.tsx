'use client'

import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Users, Leaf } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    label: 'Improved Yields',
    value: '+150%',
    description: 'Average crop yield increase',
  },
  {
    icon: Leaf,
    label: 'Water Savings',
    value: '60%',
    description: 'Water conservation with drip systems',
  },
  {
    icon: Users,
    label: 'Farmers Empowered',
    value: '200+',
    description: 'Smallholder families supported',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Mission & Impact</h2>

            <div className="mb-8">
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                <span className="font-semibold text-primary">
                  &quot;Transforming lives in Machakos through sustainable agricultural innovation.&quot;
                </span>
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                SHATECH HUB fuses drip irrigation kits, sustainable organic farming, terracing for drylands, and organic manure to boost yields, conserve water, restore soil health, and empower communities.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why SHATECH HUB</h3>
              <ul className="space-y-3">
                {[
                  'Local knowledge combined with global best practices',
                  'Climate-smart solutions designed for semi-arid regions',
                  'Direct support and training for farmers',
                  'Proven results with multiple demonstration farms',
                  'Sustainable, affordable, and scalable solutions',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Core Values</h3>
              <div className="space-y-2">
                <p className="text-foreground">
                  <span className="font-semibold text-primary">Resilience:</span> Building farms that thrive despite climate challenges
                </p>
                <p className="text-foreground">
                  <span className="font-semibold text-primary">Innovation:</span> Bringing proven technologies to smallholder farmers
                </p>
                <p className="text-foreground">
                  <span className="font-semibold text-primary">Legacy:</span> Growing legacies, not just solutions
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card
                  key={stat.label}
                  className="bg-card hover:shadow-lg transition-shadow duration-300 border-border animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {/* Additional Info Box */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-foreground mb-4">
                  Based in Machakos, serving communities in Masinga and surrounding sub-locations.
                </p>
                <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                <p className="text-foreground">
                  <a href="tel:+254702791852" className="text-primary hover:underline">
                    +254 702 791 852
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
