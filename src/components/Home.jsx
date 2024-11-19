import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Camera, Users, ChevronRight } from "lucide-react";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

export default function Home() {
  const navigate = useNavigate();

  // Handler functions for navigation
  const handleArtistClick = () => {
    navigate("/artist");
  };

  const handleDirectorClick = () => {
    navigate("/director");
  };

  return (
    <>
    <section id="home" className="min-h-screen relative flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 mt-4 py-2 bg-purple-900/30 rounded-full text-purple-300 text-sm mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            <span>Welcome to TalentHunt</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Where Talent Meets
            <span className="block">Opportunity</span>
          </h1>

          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Choose your path and become part of the next generation of
            entertainment industry. Whether you're seeking talent or showcasing
            yours, your journey begins here.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Artist Card */}
            <div
              className="group relative bg-gray-900/40 p-8 rounded-2xl backdrop-blur-sm 
    border border-purple-500/20 hover:bg-gray-900/60 transition-all duration-300"
            >
              <Camera className="w-12 h-12 text-purple-400 mb-4" />

              <h3 className="text-2xl font-bold text-white mb-4">
                I'm an Artist
              </h3>

              <p className="text-gray-300 mb-6">
                Showcase your talent, connect with casting directors, and find
                your next big role.
              </p>

              <button
                onClick={handleArtistClick}
                type="button"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
      text-white font-semibold rounded-lg flex items-center justify-center space-x-2
      transition-all duration-300 hover:opacity-90"
              >
                <span>Join as Artist</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div
              className="group relative bg-gray-900/40 p-8 rounded-2xl backdrop-blur-sm 
  border border-purple-500/20 hover:bg-gray-900/60 transition-all duration-300"
            >
              <Users className="w-12 h-12 text-purple-400 mb-4" />

              <h3 className="text-2xl font-bold text-white mb-4">
                I'm a Casting Director
              </h3>

              <p className="text-gray-300 mb-6">
                Find the perfect talent for your productions and manage your
                casting calls efficiently.
              </p>

              <button
                onClick={handleDirectorClick} // Using handler for navigation
                type="button" // Ensures no unintended form submission
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
    text-white font-semibold rounded-lg flex items-center justify-center space-x-2
    transition-all duration-300 hover:opacity-90"
              >
                <span>Join as Director</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <About />
    <Services />
    <Contact />
    </>
  );
}
