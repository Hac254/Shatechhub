'use client'

import Image from 'next/image'
import { useState } from 'react'

const galleryItems = [
  {
    id: 1,
    image: '/hero-farm.jpg',
    caption: 'Thriving crops with modern drip irrigation systems',
    category: 'Irrigation',
  },
  {
    id: 2,
    image: '/drip-irrigation.jpg',
    caption: 'Efficient water delivery for maximum crop health',
    category: 'Drip Systems',
  },
  {
    id: 3,
    image: '/terraced-farm.jpg',
    caption: 'Water-conserving terraced landscape',
    category: 'Terracing',
  },
  {
    id: 4,
    image: '/organic-farm.jpg',
    caption: 'Healthy organic crops in Masinga, Machakos',
    category: 'Organic Farming',
  },
  {
    id: 5,
    image: '/nursery.jpg',
    caption: 'Quality seedlings ready for sustainable growth',
    category: 'Nursery',
  },
  {
    id: 6,
    image: '/demo-farm.jpg',
    caption: 'Demonstration farm showcasing climate-smart techniques',
    category: 'Demo Farm',
  },
]

const categories = ['All', 'Irrigation', 'Drip Systems', 'Terracing', 'Organic Farming', 'Nursery', 'Demo Farm']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems =
    selectedCategory === 'All' ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Gallery & Demo</h2>
          <p className="text-xl text-muted-foreground">
            Before and after transformations of farms in Machakos using our sustainable solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative h-64 overflow-hidden rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-end p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <p className="font-semibold text-sm mb-1">{item.caption}</p>
                  <p className="text-xs text-gray-200">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
