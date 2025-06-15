"use client";

import { motion } from "framer-motion";




export const GalleryIntro = () => {

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br  from-[#b35300] via-[#994409] to-[#7a3412]"></div>
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(3px)" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
          className={`transition-all duration-1000 transform `}
        >
         
          <h1 className="text-4xl md:text-6xl font-black font-nunito text-white mb-6">
            Capturing Our{" "}
            <span className="text-gradient bg-gradient-to-r from-amber-300 to-red-400 bg-clip-text text-transparent">
              Faith Journey
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Browse through moments of worship, fellowship, and community
            outreach that define our church family.
          </p>
        </motion.div>
      </div>
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
