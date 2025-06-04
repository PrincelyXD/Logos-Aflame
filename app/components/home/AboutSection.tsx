'use client'


import { Heart, Users, BookOpen } from 'lucide-react'
import CardDesignOne from '../CardDesignOne'


export const AboutSection = () => {
    const items = [
        {
          icon: <Heart className="h-12 w-12 text-red-600 mb-4" />,
          title: 'Our Mission',
          description:
            "To ignite the flame of God's love in every heart, transforming lives through the power of His word and creating a community where all can experience His grace.",
          delay: 0,
        },
        {
          icon: <Users className="h-12 w-12 text-red-600 mb-4" />,
          title: 'Our Community',
          description:
            "We are a diverse family of believers united in faith, supporting one another through life's journey and growing together in Christ's love.",
          delay: 200,
        },
        {
          icon: <BookOpen className="h-12 w-12 text-red-600 mb-4" />,
          title: 'Our Beliefs',
          description:
            "Rooted in Scripture, we believe in the transformative power of God's word to guide, heal, and restore. We embrace the teachings of Jesus Christ as our foundation.",
          delay: 400,
        },
      ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Church
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Logos Aflame Ministries is a vibrant, welcoming community of
            believers dedicated to spreading God's word and serving our
            community through faith, love, and action.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
           
            <CardDesignOne
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            delay={index }
            />
         
          ))}


          
        </div>
        <div
          className={`mt-16 text-center transition-all duration-100`}
      
        >
          <a
            href="#"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-all"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  )
}
