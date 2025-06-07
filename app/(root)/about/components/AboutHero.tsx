"use client";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div
      className=" h-[100vh]
     relative 
      w-full bg-cover md:bg-fixed bg-center  bg-[url('/lam-building.png')]  "
    >
      <div className=" dark-overlay flex-center">
        <div className="relative z-10 text-center text-white px-4">
          {/* Fun Headline */}
          <motion.h1
           initial={{ opacity: 0, transform: "translateY(20px)" }}
           whileInView={{ opacity: 1, transform: "translateY(3px)" }}
           viewport={{ once: true }}
           transition={{ duration: 0.4, delay: 0.2 }}
           
            className="text-5xl font-nunito md:text-7xl font-black mb-7 drop-shadow-lg"
          >
            Get to Know Us at <br /> Logos Aflame
          </motion.h1>

          <motion.p
             initial={{ opacity: 0,}}
             whileInView={{ opacity: 1, }}
            className="font-semibold my-5 text-lg"
          >
            Sundays at 10:00am
          </motion.p>

          <motion.button
             initial={{ opacity: 0, transform: "translateY(20px)" }}
             whileInView={{ opacity: 1, transform: "translateY(3px)" }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="schedule-cta w-full my-5 cursor-pointer"
          >
            Dive Into Our Story
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full  overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default AboutHero;
