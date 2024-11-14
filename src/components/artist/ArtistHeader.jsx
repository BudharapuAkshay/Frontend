// src/components/artist/ArtistHeader.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const ArtistHeader = ({ logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage and reset role
    sessionStorage.clear();
    if (logout) logout(); // Call logout function from App context if available
    navigate('/'); // Redirect to login page
  };
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between">
      <Link to="/" className="flex items-center text-white text-2xl font-bold space-x-2">
          <img src={logo} alt="Talent Hunt Logo" className="w-8 h-8" />
          <span>Talent Hunt</span>
        </Link>
      <nav>
        <Link to="/artist" className="mr-4 hover:underline">Dashboard</Link>
        <Link to="/artist/profile" className="mr-4 hover:underline">Profile</Link>
        <Link to="/artist/jobs" className="mr-4 hover:underline">Jobs</Link>
        <button onClick={handleLogout} className="hover:underline">
          Logout
        </button>
      </nav>
    </header>
  );
};

export default ArtistHeader;
