'use client'

import Image from 'next/image'
import { useState } from 'react'

const galleryItems = [
  {
    id: 1,
    image: 'https://i.ibb.co/chdnqxzR/image.png',
    caption: 'Maize farm under climate smart Agriculture- conservation Agriculture and use of organic farming.',
    category: 'Irrigation',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/8Lv4XDdy/image.png',
    caption: 'Conservation Agriculture- use of organic farming.',
    category: 'Drip Systems',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/g55yvc1/image.png',
    caption: 'Water-conserving terraced landscape',
    category: 'Terracing',
  },
  {
    id: 4,
    image: 'https://i.ibb.co/7JVghsCj/image.png',
    caption: 'Healthy organic crops in Masinga, Machakos',
    category: 'Organic Farming',
  },
  {
    id: 5,
    image: 'https://i.ibb.co/qF4qRY6m/image.png',
    caption: 'Efficient water delivery for maximum crop health',
    category: 'Drip Systems',
  },
  {
    id: 6,
    image: 'https://i.ibb.co/49TGzwz/image.png',
    caption: 'Efficient water delivery for maximum crop health',
    category: 'Drip Systems',
  },
  {
    id: 7,
    image: 'https://i.ibb.co/SSXw41W/image.png',
    caption: 'After farm transformation',
    category: 'Irrigation',
  },
  {
    id: 8,
    image: 'https://i.ibb.co/fdsvXKT0/image.png',
    caption: 'After farm transformation',
    category: 'Drip Systems',
  },
  {
    id: 9,
    image: 'https://i.ibb.co/HT4J3KHj/image.png',
    caption: 'After farm transformation',
    category: 'Terracing',
  },
  {
    id: 10,
    image: 'https://i.ibb.co/14WMxWC/image.png',
    caption: 'Before farm transformation',
    category: 'Organic Farming',
  },
  {
    id: 11,
    image: 'https://i.ibb.co/5WP5MghV/image.png',
    caption: 'Increased yield of maize and vegetables',
    category: 'Nursery',
  },
  {
    id: 12,
    image: 'https://i.ibb.co/vv61T4pB/image.png',
    caption: 'Increased yield of maize and vegetables',
    category: 'Demo Farm',
  },
  {
    id: 13,
    image: 'https://i.ibb.co/fdh38vLv/image.png',
    caption: 'Sustainable agriculture in Machakos County',
    category: 'Irrigation',
  },
  {
    id: 14,
    image: 'https://i.ibb.co/P7L5HYP/image.png',
    caption: 'Farmers benefiting from water-efficient systems',
    category: 'Drip Systems',
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
