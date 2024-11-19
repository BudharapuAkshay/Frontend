import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Briefcase, User, LogOut, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";

const DirectorHeader = ({ logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage and reset role
    sessionStorage.clear();
    if (logout) logout(); // Call logout function if provided
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="bg-gray-900 text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation Links */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link to={'/director'}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <img src={logo} alt="Talent Hunt Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Talent Hunt
            </span>
          </motion.div>
          </Link>

            {/* Navigation Links */}
            <NavLink
              to="/director/dashboard"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <Briefcase size={18} />
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/director/profile"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <User size={18} />
              <span>Profile</span>
            </NavLink>
          </div>

          {/* Additional Actions */}
          <div className="flex items-center space-x-4">
            <NavLink
              to="/director/add-talent-post"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <PlusCircle size={18} />
              <span>Add Talent Post</span>
            </NavLink>

            {/* Logout Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-800 hover:text-white"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DirectorHeader;
