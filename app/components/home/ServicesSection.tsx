"use client";

import { events } from "@/app/assets/static";
import CustomButton from "../CustomButton";
import EventCard from "../EventCard";
export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services & Events
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Join us for worship, fellowship, and spiritual growth. Everyone is
            welcome in our community of faith.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              href={event.href}
              className={event.className}
              image={event.image}
              location={event.location}
              time={event.time}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
        <div
          className={`mt-12 text-center transition-all duration-1000 transform `}
          style={{
            transitionDelay: "600ms",
          }}
        >
          <CustomButton
            className="live-cta"
            href="/events"
            text="View All Events"
          />
        </div>
      </div>
    </section>
  );
};
