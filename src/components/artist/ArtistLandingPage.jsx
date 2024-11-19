import React, { useContext } from "react";
import { Palette, Sparkles } from "lucide-react";
import Carousel from "../../assets/Carousel";
import { RoleContext } from "../../contexts/RoleContext";
import { useNavigate } from "react-router-dom";
import About from "../About";
import Services from "../Services";
import Contact from "../Contact";

function ArtistLandingPage() {
  const { role } = useContext(RoleContext);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/artist/signup"); // Navigate to the "signup" page
  };

  return (
    <>
      <section id="home" className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8 px-2">
              <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 rounded-full text-purple-300 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Unleash your creativity</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transform Your Art Into a Career
              </h1>

              <p className="text-xl text-gray-300">
                Join our community of talented artists and take your passion to
                the next level. We provide the platform, you provide the
                creativity.
              </p>

              <div className="flex flex-col px-2 sm:flex-row gap-4">
                {role !== "ARTIST" && (
                  <button
                    onClick={handleRegister}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
                  >
                    Sign up
                  </button>
                )}
              </div>

              <div className="flex items-center gap-4 px-16 pt-4">
                <div className="flex -space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                    className="w-10 h-10 rounded-full border-2 border-gray-900"
                    alt="Artist"
                  />

                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop"
                    className="w-10 h-10 rounded-full border-2 border-gray-900"
                    alt="Artist"
                  />

                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                    className="w-10 h-10 rounded-full border-2 border-gray-900"
                    alt="Artist"
                  />
                </div>

                <p className="text-gray-400">
                  <span className="text-purple-400 font-semibold">2,000+</span>{" "}
                  artists already joined
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl" />
              <Carousel />
            </div>
          </div>
        </div>
      

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Portfolio Showcase", "Global Exposure", "Artist Community"].map(
            (feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-b from-purple-900/50 to-transparent border border-purple-500/20"
              >
                <Palette className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-400">
                  Connect with fellow artists, showcase your work, and grow your
                  career in the arts.
                </p>
              </div>
            )
          )}
        </div>
      </div>
      </section>
      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />
    </>
  );
}

export default ArtistLandingPage;
