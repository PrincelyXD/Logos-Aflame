'use client'

import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import { GalleryFilters } from './GalleryFilters'
import 'react-medium-image-zoom/dist/styles.css'
import Zoom from 'react-medium-image-zoom'
import { galleryItems } from '@/app/assets/static'

  
export const GalleryGrid = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredItems, setFilteredItems] = useState(galleryItems)
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('gallery-grid')
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    setFilteredItems(
      activeFilter === 'all'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeFilter),
    )
  }, [activeFilter])
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  }
  return (
    <section id="gallery-grid" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <GalleryFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <div
          className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4 bg-clip-padding"
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="mb-4 transition-all duration-300 transform hover:scale-[1.02]"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-modern">
                  <Zoom>
                    <img
                      src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={item.title}
                      className="w-full h-auto"
                    />
                  </Zoom>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 capitalize">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  )
}
