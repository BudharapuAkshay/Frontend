// src/components/director/DirectorHeader.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import {
  FiHome,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";

const DirectorHeader = ({ logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage and reset role
    sessionStorage.clear();
    if (logout) logout(); // Call logout function from App context if available
    navigate('/'); // Redirect to login page
  };

  return (
      <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
            <Link
                to="/artist"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                
            <img src={logo} alt="Talent Hunt Logo" className="w-8 h-8" />
              </Link>
              
            </div>
            <div className="flex items-center space-x-6">
            <Link
                to="/artist/all-posts"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <FiHome className="mr-2" />
                All Posts
              </Link>
            <Link
                to="/artist/dashboard"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <RxDashboard className="mr-2" />
                Dashboard
              </Link>
              <Link
                to="/artist/profile"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <FiUser className="mr-2" />
                Profile
              </Link>
              <Link
                to="/logout"
                className="flex items-center text-white hover:text-red-400 transition-colors no-underline"
                onClick={handleLogout}
              >
                <FiLogOut className="mr-2" />
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>
      </div>
  );
};

export default DirectorHeader;
