import React from 'react'
import { Upload, ArrowRight } from 'lucide-react'
export const ShareSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-red-600 shadow-lg">
              <Upload className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Share Your{' '}
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Moments
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of our visual journey! Submit your photos from church events
            and activities to be featured in our gallery.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl group"
          >
            Submit Your Photos
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
