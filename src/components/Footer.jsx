// src/components/common/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-2 text-center">
      <div className="container mx-auto">
        <p>&copy; 2024 Talent Hunt. All rights reserved.</p>
        <p>
          <a href="#about" className="text-white hover:text-gray-400">About</a> | 
          <a href="#contact" className="text-white hover:text-gray-400 ml-2">Contact</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
