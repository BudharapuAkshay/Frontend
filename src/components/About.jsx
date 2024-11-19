import React from 'react';
import { Award, Users, Star, Clapperboard,Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  

  return (
    <div className="min-h-screen relative">
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <div className="w-24 h-1 bg-gray-200 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Bringing Stories to Life Since 2005
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With a passion for storytelling and an eye for talent, we've been at the 
              forefront of casting for over 15 years. Our expertise spans across film, 
              television, theater, and digital media.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We believe in discovering and nurturing talent that brings authentic, 
              compelling performances to every project. Our collaborative approach and 
              industry connections ensure we match the perfect talent with each role.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <StatCard
              icon={<Award className="h-8 w-8 mb-4 text-gray-200" />}
              title="Excellence"
              description="Award-winning casting services"
            />
            <StatCard
              icon={<Users className="h-8 w-8 mb-4 text-gray-200" />}
              title="Network"
              description="Vast talent pool access"
            />
            <StatCard
              icon={<Star className="h-8 w-8 mb-4 text-gray-200" />}
              title="Experience"
              description="15+ years in industry"
            />
            <StatCard
              icon={<Clapperboard className="h-8 w-8 mb-4 text-gray-200" />}
              title="Projects"
              description="500+ successful castings"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

const StatCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300">
    <div className="flex flex-col items-center">
      {icon}
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);