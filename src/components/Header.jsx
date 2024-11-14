// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiLogIn } from "react-icons/fi";
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-sm p-4 z-10">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo and App Name */}
        <Link to="/" className="flex items-center text-white space-x-2 no-underline hover:text-blue-400 transition-colors">
          <img src={logo} alt="Talent Hunt Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold">Talent Hunt</span>
        </Link>

        {/* Navigation Links with Icons */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
          >
            <FiHome className="mr-2" />
            Home
          </Link>

          <Link
            to="/artist"
            className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
          >
            <FiUser className="mr-2" />
            Artists
          </Link>

          <Link
            to="/director"
            className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
          >
            <FiUser className="mr-2" />
            Directors
          </Link>

          <Link
            to="/login"
            className="flex items-center text-white hover:text-red-400 transition-colors no-underline"
          >
            <FiLogIn className="mr-2" />
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
