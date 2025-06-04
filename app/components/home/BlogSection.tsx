
import { blogPosts } from '@/app/assets/static'

import BlogCard from '../BlogCard'
export const BlogSection = () => {

 

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest From Our Blog
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Insights, reflections, and spiritual guidance from our church
            community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              post={post}/>
          ))}
        </div>
        <div
          className={`mt-12 text-center `}
         
        >
          <a
            href="#"
            className="inline-block bg-transparent border-2
             border-red-600 text-red-600 hover:bg-red-600
              hover:text-white font-medium py-3 px-8 rounded-md transition-all"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  )
}

