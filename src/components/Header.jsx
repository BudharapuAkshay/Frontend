import React, { useState } from "react";

import {Menu, X } from "lucide-react";
import logo from '../assets/logo.svg'
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
          <Link
                to="/"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                
            <img src={logo} alt="Talent Hunt Logo" className="w-8 h-8" />
            <span className="px-2 text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Talent Hunt
            </span>
              </Link>

            
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => scrollToSection("home")}>Home</NavLink>

            <NavLink onClick={() => scrollToSection("about")}>About</NavLink>

            <NavLink onClick={() => scrollToSection("services")}>
              Services
            </NavLink>

            <NavLink onClick={() => scrollToSection("contact")}>
              Contact
            </NavLink>

            <button
            onClick={()=>navigate('/login')}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-gray-900 font-semibold rounded-full 

       transition-all duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </div>

          {/* Mobile menu button */}

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink onClick={() => scrollToSection("home")}>
              Home
            </MobileNavLink>

            <MobileNavLink onClick={() => scrollToSection("about")}>
              About
            </MobileNavLink>

            <MobileNavLink onClick={() => scrollToSection("services")}>
              Services
            </MobileNavLink>

            <MobileNavLink onClick={() => scrollToSection("contact")}>
              Contact
            </MobileNavLink>

            <div className="pt-2">
              <button
              onClick={()=>navigate('/login')}
                className="w-full px-6 py-2 bg-gray-200 hover:bg-white text-gray-900 

        font-semibold rounded-full transition-all duration-300"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-gray-300 hover:text-white transition-colors duration-300"
  >
    {children}
  </button>
);

const MobileNavLink = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
  >
    {children}
  </button>
);