import { Play } from 'lucide-react'
import React from 'react'

const NotLive = () => {
  return (
    <div className="text-center p-8">
    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
      <Play className="h-8 w-8 text-white ml-1" />
    </div>
    <h3 className="text-2xl font-bold mb-3 text-white">
      We&apos;re not live right now
    </h3>
    <p className="text-blue-200 mb-6">
      Check our schedule below for upcoming live streams
    </p>
    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
      View Past Services
    </button>
  </div>
  )
}

export default NotLive
