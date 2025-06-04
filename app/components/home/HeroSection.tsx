"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Calendar, Clock, Users } from "lucide-react";
import { calculateTimeToService } from "@/app/utils/calculateTimeToservice";
import CustomButton from "../CustomButton";
import CountUp from "../CounterUp";


export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeToService, setTimeToService] = useState("");

  useEffect(() => {
    setIsVisible(true);
    // Calculate time to next Sunday service
    calculateTimeToService(setTimeToService);

    const interval = setInterval(calculateTimeToService, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute bg-orange-500 inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          weeeeeee
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-amber-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="relative container mx-auto px-4 py-20 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all  duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Service Countdown Badge */}
            <div className="countdown-badge">
              <Clock className="h-4 w-4 text-amber-300 mr-2" />
              <span className="text-white text-sm font-medium">
                {timeToService}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-nunito leading-tight mb-6 text-white">
              Experience{" "}
              <span className="text-gradient font-black bg-gradient-to-r from-amber-300 to-red-400 bg-clip-text text-transparent">
                God&apos;s Love
              </span>{" "}
              With Us Every Sunday
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100   leading-relaxed">
              Join our welcoming community where faith comes alive, hearts are
              transformed, and lives find purpose through God&apos;s endless love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <CustomButton
                href="#live"
                beforeIcon={<Users className="h-5 w-5 mr-2" />}
                afterIcon={
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                }
                className="group live-cta flex-center"
                text="Watch Live Now"
              />

              <CustomButton
                text="Plan Your Visit"
                className="group schedule-cta"
                href="/events"
                afterIcon={
                  <Calendar
                    size={18}
                    className="ml-2 group-hover:scale-110 transition-transform"
                  />
                }
              />
            </div>
            {/* Quick Stats */}
            <CountUp />
          </div>
          {/* Image/Visual */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/church-service.png"
                  alt="Church community"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              {/* Floating Service Info Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-modern">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="font-semibold text-gray-800">
                    Next Service
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  Sunday 10:00 AM
                </div>
                <div className="text-gray-600">Main Sanctuary</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
