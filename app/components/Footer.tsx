import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import Logo from "./Logo";

export const Footer = () => {


  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
          <Logo/>
            <p className="text-gray-400 mb-4">
              Igniting Faith, Building Community, Transforming Lives through the
              power of God's word.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/GraceObyJohnson/?_rdc=1&_rdr#"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://mobile.twitter.com/logosaflame"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <strong>X</strong>
              </a>
              <a
                href="https://www.instagram.com/logosaflame_ministries/?hl=en"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCJ3vUbCnob8QtdaH_IjrxSA"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#live"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Live Stream
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Service Times</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <strong>Sunday:</strong> 10:00 AM - 12:00 PM
              </li>
              <li>
                <strong>Wednesday:</strong> 7:00 PM - 8:30 PM
              </li>
              <li>
                <strong>Friday:</strong> 6:30 PM - 8:30 PM (Youth)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and announcements.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full
                 bg-white 
                rounded-l-md focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700
               
                text-white px-4 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Logos Aflame LAM. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
