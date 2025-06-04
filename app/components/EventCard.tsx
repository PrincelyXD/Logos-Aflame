import React from "react";
import { motion } from "framer-motion";
import {  Clock, MapPin } from "lucide-react";
const EventCard = ({
  title,
  image,
  href,
  className,
  time,
  location,
  description,
}: {
  title: string;
  image: string;
  href: string;
  className: string;
  time: string;
  location: string;
  description: string;
}) => {
  return (
    <motion.a
    href={href}
    initial={{ opacity: 0, transform: "translateY(20px)" }}
    whileInView={{ opacity: 1, transform: "translateY(3px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.2 }}
      className={`bg-white h-[390px] relative
         rounded-4xl overflow-hidden shadow-md block
         hover:scale-[1.02] transition-transform duration-500
         `}
    >
      <div
        className="h-[58%] bg-cover shadow-2xl relative  z-[5] rounded-4xl bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <div className={` bg-white relative z-[3] 
       w-full  px-5 pt-12 grid grid-cols-4 -mt-5  ${className}  `}>
        <div
          className=" event-card_sect  border-r border-slate-500  h-fit pb-5
           items-center"
        >
          <p className="">Dec</p>
          <span className="font-bold text-3xl">24</span>
        </div>

        <div className=" col-span-3 event-card_sect  pl-5">
          <span className="text-gray-600 flex gap-x-1 text-sm capitalize ">
            <MapPin className="h-4 w-4  mb-2" />
            {location}
          </span>
          <span className="font-bold font-nunito text-lg">{title}</span>

          <p className="text-xs capitalize">{description}</p>

          <div className="flex items-center mb-2 text-xs mt-1.5
           normal-case text-gray-600">
            <Clock className="h-3 w-3 mr-2 " />
            <span>{time}</span>
          </div>
        </div>

        <span className={`absolute opacity-[0.4] -bottom-10 -left-7
        bg-[#000117]/10 backdrop-blur-md animate-ping flex items-center justify-center
        rounded-full size-20 text-black`}>

            <span className="bg-black/10  rounded-full size-10">

            </span>
        </span>
      </div>
    </motion.a>
  );
};

export default EventCard;
