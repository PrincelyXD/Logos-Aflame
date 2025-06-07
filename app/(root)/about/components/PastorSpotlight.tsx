"use client";

import CountUp from "react-countup"
import { useState } from "react";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";

export const PastorSpotlight = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id="pastor-spotlight" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/snr-pastor.png"
                alt="Senior Pastor Grace Oby Johnson"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            {/* Floating Quote Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-modern max-w-sm">
              <Quote className="h-8 w-8 text-red-600 mb-4" />
              <p className="text-gray-700 italic mb-4">
                Our mission is to create a place where everyone can experience
                God’s transformative love and find their purpose in His plan.
              </p>
              <div className="text-sm text-gray-500">
                - Pastor Grace Oby Johnson
              </div>
            </div>
          </div>
          {/* Content Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Meet Our Senior Pastor</h2>
            <div
              className={`space-y-6 relative
             pb-20 ${isOpen ? "h-[800px]" : "h-[400px]"}
                transition-all duration-300
                text-gray-600 overflow-hidden`}
            >
              <div className="bottom-gradient flex items-end justify-center">
                <p
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-shadow-2xs hover:scale-[1.1] 
                transition-all duration-300 cursor-pointer
                flex font-nunito font-black"
                >
                  See {isOpen ? "less" : "more"}
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </p>
              </div>

              <p>
                Grace Oby Johnson is the Founder and Senior Pastor of the Logos
                Aflame Ministries, incorporated in the Federal Republic of
                Nigeria.
              </p>
              <p>
                Grace came to know the Lord Jesus Christ in a personal way while
                in high school on February 19, 1967. She served a freelance
                ministry for five years during when she raised and pastored a
                church at age twenty-three. She served as a Lecturer in the
                ministry’s Bible College, wrote and helped publish their Sunday
                school quarterly manuals.
              </p>
              <p>
                Grace attended another Bible College under the Foursquare
                Organization in Nigeria. She served within the organization for
                five years before moving on to found the Logos Aflame Ministries
                Inc. As a trained and ordained minister, Pastor Grace ministers
                in Africa, Europe, USA and other parts of the world. Many
                pastors and professional people have benefited from her
                mentorship. Her passion is to train Leaders who will be People
                Focused in Problem-solving with a servant heart. She is gifted
                in bringing order to the Church Body.
              </p>
              <p>
                Grace was heard weekly for many years on radio broadcast (Hour
                of Dominion) aired from the USA on shortwave radio over Africa,
                Middle East and some parts of Europe through the World Harvest
                Radio Indiana. She was the host of a television program
                (PRINCESS) for many years in the city of Lagos, Nigeria.
              </p>
              <p>
                Grace recently incorporated Grace Johnson Leadership Institute
                through which she develops leaders in Organizational Leadership
                and Management. She is a Leadership Strategist with 43 years of
                experience in ministry. An Accomplished Author, an International
                Speaker and Leadership Coach.
              </p>
              <p>
                Grace Johnson holds an Associate of Arts (A.A) degree in
                Psychology, and Bachelor of Science degree in Organizational
                Leadership and Management, both degrees were awarded by Regent
                University, Virginia Beach. Virginia. USA.
              </p>
              <p>
                Grace is blessed with two adult children and three
                grandchildren.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-2xl font-bold text-gray-900 mb-1"> <CountUp
            enableScrollSpy
            scrollSpyOnce
            end={50}
            delay={500}
            duration={1.5}
          />+</div>
                <div className="text-gray-600">Years in Ministry</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                <CountUp
            enableScrollSpy
            scrollSpyOnce
            end={5000}
            delay={500}
            duration={1.5}
          />+
                </div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
