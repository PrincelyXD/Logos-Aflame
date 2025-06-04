"use client";

import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  Bell,
  Users,
  ArrowRight,
} from "lucide-react";
import CircleDesignBg from "../CircleDesignBg";
import NotLive from "../NotLive";
import CurrentlyLive from "../CurrentlyLive";
export const LiveStreamSection = () => {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);

  
  useEffect(() => {
    const liveStatus = Math.random() > 0.5;
    setIsLive(liveStatus);
    if (liveStatus) {
      setViewerCount(Math.floor(Math.random() * 200) + 50);
    }
  }, []);
  const upcomingStreams = [
    {
      title: "Sunday Morning Worship",
      date: "May 21, 2023",
      time: "10:00 AM",
      type: "Live Service",
    },
    {
      title: "Midweek Bible Study",
      date: "May 24, 2023",
      time: "7:00 PM",
      type: "Interactive Study",
    },
    {
      title: "Prayer & Worship Night",
      date: "May 26, 2023",
      time: "7:30 PM",
      type: "Community Prayer",
    },
  ];
  return (
    <section className="live-section">
      {/* Background Pattern */}
      <CircleDesignBg />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 transform `}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our{" "}
              <span className="text-gradient bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent">
                Live Stream
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-blue-100 leading-relaxed">
              Experience worship, community, and God's word from anywhere in the
              world. Connect with our church family in real-time.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Video Player */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 transform `}
          >
            <div className="live-section_videoc">
              <div className="relative">
                <div className="w-full h-[330px] pb-[56.25%] relative bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {isLive ? (
                   <CurrentlyLive/>
              
                    ) : (
                    <NotLive />
                    )}
                  </div>
                </div>
                {/* Live Badge */}
                {isLive && (
                  <div className="absolute top-4 select-none left-4 flex items-center space-x-3">
                    <div className=" live-indicator">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
                      LIVE NOW
                    </div>
                    <div className=" live-viewercount">
                      <Users className="h-3 w-3 mr-1" />
                      {viewerCount} watching
                    </div>
                  </div>
                )}
              </div>


              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {isLive
                    ? "Sunday Morning Worship Service"
                    : "Next Live Stream Coming Soon"}
                </h3>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  {isLive
                    ? "Join us for worship, prayer, and the word of God. Experience the presence of the Lord with our community."
                    : "Subscribe to notifications to be alerted when we go live. Never miss a service or special event."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    className={`${
                      isLive
                        ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                        : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800"
                    } text-white font-semibold py-3 px-8 cursor-pointer rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg`}
                  >
                    {isLive ? "Join Live Now" : "Past Recordings"}
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 cursor-pointer hover:bg-white/20 text-white font-medium py-3 px-6 rounded-full flex items-center transition-all duration-300">
                    <Bell className="mr-2 h-4 w-4" /> Get Notifications
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Schedule Sidebar */}
          <div
            className={`transition-all duration-1000 transform `}
           
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-8 text-white">
                Upcoming Streams
              </h3>
              <div className="space-y-6">
                {upcomingStreams.map((stream, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-white group-hover:text-blue-300 transition-colors">
                        {stream.title}
                      </h4>
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                        {stream.type}
                      </span>
                    </div>
                    <div className="flex items-center text-blue-200 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{stream.date}</span>
                    </div>
                    <div className="flex items-center text-blue-200">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{stream.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#"
                  className="inline-flex items-center text-blue-300 hover:text-white font-medium transition-colors group"
                >
                  View Full Schedule
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
