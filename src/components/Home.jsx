// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center relative bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fmovie-auditions&psig=AOvVaw1HdeYt7jDywnfXuE5qzrrD&ust=1731488383648000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiIvoa01okDFQAAAAAdAAAAABAE')]">
      {/* Overlay */}
      <div className="absolute inset-0 opacity-80"></div>
      <div className="relative z-10 text-center p-8">
        <h1 className="text-5xl font-extrabold text-white mb-6">Welcome to Talent Hunt</h1>
        <p className="text-lg text-gray-300 mb-8">
          Find your next big break or discover the perfect talent for your project.
        </p>
        <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
