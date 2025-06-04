"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, Play, Phone, HeartHandshake, Link } from "lucide-react";
import Logo from "./Logo";
import MobileHamMenu from "./MobileHamMenu";
import CustomButton from "./CustomButton";
import { departments } from "../assets/static";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full py-3 flex-center z-50 transition-all duration-500 ${
        isScrolled ? "bg-white  shadow-md " : "bg-transparent"
      }`}
    >
      <div className="container  mx-auto px-4 md:px-6">
        <div className="flex  justify-between items-center">
          <div className="flex items-center">
            <Logo />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            <Link
              href="#"
              className={`${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-blue-600 font-medium transition-all duration-300 relative p-1 lg:p-3 group`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#about"
              className={`${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-blue-600 font-medium transition-all duration-300 relative p-1 lg:p-3 group`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="relative group">
              <button
                className={`flex items-center ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-600 font-medium transition-all duration-300 p-1 lg:p-3`}
              >
                Departments <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              <div className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md shadow-modern rounded-xl overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 origin-top">
                {departments.map((dept) => (
                  <Link
                    href={dept.path}
                    className="mobile-nav_link pl-5 hover:font-medium  text-sm "
                  >
                    {dept.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="#live"
              className={`${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-blue-600 font-medium transition-all duration-300 relative p-1 lg:p-3 group flex items-center`}
            >
              <Play className="h-4 w-4 mr-1" />
              Watch Live
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#contact"
              className={`${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-blue-600 font-medium transition-all duration-300 relative p-1 lg:p-3 group flex items-center`}
            >
              <Phone className="h-4 w-4 mr-1" />
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <CustomButton
              className=" flex gap-x-2 w-fit scale-[0.8] live-cta"
              beforeIcon={<HeartHandshake />}
              text="Giving"
              href="/giving"
            />
          </div>

          <MobileHamMenu isScrolled={isScrolled} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
