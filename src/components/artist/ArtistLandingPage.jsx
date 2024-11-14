// src/components/artist/ArtistLandingPage.jsx
import React, { useContext } from "react";
import { RoleContext } from "../../contexts/RoleContext";
import { Link } from "react-router-dom";

const ArtistLandingPage = () => {
  const { role } = useContext(RoleContext);
  return (
    <div className="text-center py-20 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome {sessionStorage.getItem("username")}!</h1>
      <p className="mb-6">
        Find auditions, showcase your talents, and build your profile.
      </p>
      {role ? (
        <Link to="/artist/create-profile" className="mr-4 hover:underline">
          Newly Registered ? Create Profile
        </Link>
      ) : (
        <Link to="/artist/signup" className="mr-4 hover:underline">
          New User ? Signup
        </Link>
      )}
    </div>
  );
};

export default ArtistLandingPage;
