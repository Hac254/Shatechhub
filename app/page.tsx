// NO 'use client' here — this is a Server Component
// It renders the JSON-LD on the server, then hands off to the client shell

import { JsonLd } from '@/components/JsonLd'
import HomeClient from '@/components/HomeClient'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SHATECH HUB',
    description:
      'Agricultural consultancy for smallholder farmers in Machakos, Kenya. Affordable drip irrigation kits, organic farming, and terracing solutions.',
    url: 'https://shatechhub.vercel.app',
    telephone: '+254702791852',
    email: 'info@shatechhub.ke',
    image: 'https://shatechhub.vercel.app/hero-farm.jpg',
    priceRange: 'KSh',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Masinga',
      addressRegion: 'Machakos County',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.91633,
      longitude: 37.28805,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '12:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Machakos' },
      { '@type': 'City', name: 'Masinga' },
      { '@type': 'AdministrativeArea', name: 'Machakos County' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Agricultural Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Drip Irrigation Kit Installation',
            description:
              'Direct-to-root water delivery systems that save water, time, and money for smallholder farmers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Organic Farming & Manure',
            description:
              'Restore soil health and reduce chemicals with organic farming tailored for semi-arid regions.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Terracing for Drylands',
            description:
              'Land management technique that conserves water and combats soil erosion in dryland farms.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nursery & Demo Farm Visits',
            description:
              'Live demonstrations of sustainable farming practices at our Machakos demo farm.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '5', // update this as you get more reviews
    },
    sameAs: [
      // Add your actual social media URLs here when you create them
      // 'https://www.facebook.com/shatechhub',
      // 'https://wa.me/254702791852',
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <HomeClient />
    </>
  )
}