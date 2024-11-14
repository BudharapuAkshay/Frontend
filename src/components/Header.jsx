// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent p-4 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and App Name */}
        <Link to="/" className="flex items-center text-white text-2xl font-bold space-x-2">
          <img src={logo} alt="Talent Hunt Logo" className="w-8 h-8" />
          <span>Talent Hunt</span>
        </Link>
        
        {/* Navigation Links */}
        <nav className="space-x-6 text-white text-lg">
          <Link to="/artist">Artists</Link>
          <Link to="/director">Directors</Link>
        </nav>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link to="/login" className="text-gray-300 hover:text-white transition">Login</Link>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
