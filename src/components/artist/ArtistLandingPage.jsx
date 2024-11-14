// src/components/artist/ArtistLandingPage.jsx
import React, { useContext } from 'react';

const ArtistLandingPage = () => {
  return (
    <div className="text-center py-20 text-white">
      
          <h1 className="text-4xl font-bold mb-4">Welcome, Artist!</h1>
          <p className="mb-6">Find auditions, showcase your talents, and build your profile.</p>
          <Link to="/artist/create-profile" className="mr-4 hover:underline">New User ? Create Profile</Link>
          
    </div>
  );
};

export default ArtistLandingPage;
