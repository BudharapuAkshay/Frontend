import React from 'react';
import { Theater, Film, Tv, Radio } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gray-200 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive casting services across all entertainment mediums, ensuring the perfect match between talent and production needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Film />}
            title="Film Casting"
            description="From independent films to major productions, we source talent that brings your characters to life."
          />
          <ServiceCard
            icon={<Tv />}
            title="Television"
            description="Casting for series regulars, guest stars, and background talent for TV productions."
          />
          <ServiceCard
            icon={<Theater />}
            title="Theater"
            description="Finding exceptional stage performers for theatrical productions of all scales."
          />
          <ServiceCard
            icon={<Radio />}
            title="Voice Over"
            description="Connecting productions with versatile voice talent for various media projects."
          />
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
    <div className="text-gray-200 mb-4">
      {React.cloneElement(icon, { size: 48 })}
    </div>
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);