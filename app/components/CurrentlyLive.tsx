import { Maximize, Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const CurrentlyLive = () => {
  return (
    <div className="relative w-full h-full">
      <img
      
        src="/live-thumbnail.png"
        alt="Live church service"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      {/* Live Controls Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="bg-white/20 cursor-pointer backdrop-blur-md
           hover:bg-white/30 text-white p-2 rounded-full transition-all">
            <Play className="h-5 w-5" />
          </button>
          <div className="text-white text-sm">
            <div className="font-bold text-shadow-2xs">The Holy Spirit & You</div>
            <div className="text-white/80 text-shadow-2xs">Pastor Grace Oby Johnson</div>
          </div>
        </div>
        <button className="bg-white/20 backdrop-blur-md cursor-pointer
         hover:bg-white/30 text-white p-2 rounded-full transition-all">
          <Maximize className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CurrentlyLive;
