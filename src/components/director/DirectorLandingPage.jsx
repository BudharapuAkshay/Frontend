import React, { useContext } from "react";

import {  Sparkles } from "lucide-react";
import { RoleContext } from "../../contexts/RoleContext";
import { useNavigate } from "react-router-dom";
import About from "../About";
import Services from "../Services";
import Contact from "../Contact";

export default function DirectorLandingPage() {
  const { role } = useContext(RoleContext);
  const navigate = useNavigate()
  return (
    <>
    <section id="home" className="min-h-screen relative flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80")',

          backgroundSize: "cover",

          backgroundPosition: "center",

          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 ">
        <div className="max-w-3xl py-2">
          <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 rounded-full text-purple-300 text-sm mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />

            <span>Discover New Talent</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Tomorrow's
            <span className="block">Stars Today</span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            With over two decades of industry experience, we connect exceptional
            talent with groundbreaking productions. Your next breakthrough role
            awaits.
          </p>

          <div className="flex flex-col px-2 sm:flex-row gap-4">
            {role !== "DIRECTOR" && (
              <button
                onClick={() => navigate("/director/signup")}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Sign up
              </button>
            )}
          </div>

          <div className="flex items-center gap-4 mt-8">
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

            <p className="text-gray-300">
              <span className="text-purple-400 font-semibold">2,000+</span>{" "}
              artists already joined
            </p>
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
