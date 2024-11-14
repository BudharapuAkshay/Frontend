// src/components/director/DirectorLandingPage.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RoleContext } from "../../contexts/RoleContext";

const DirectorLandingPage = () => {
  const { role } = useContext(RoleContext);

  return (
    <div className="text-center py-20 text-white">
      <h1 className="text-4xl font-bold mb-4">
        Welcome {sessionStorage.getItem("username")}!
      </h1>
      <p className="mb-6">
        Post job opportunities, find talent, and manage applications.
      </p>
      {role ? (
        <Link to="/director/create-profile" className="mr-4 hover:underline">
          Newly Registered ? Create Profile
        </Link>
      ) : (
        <Link to="/director/signup" className="mr-4 hover:underline">
          New User ? Signup
        </Link>
      )}
    </div>
  );
};

export default DirectorLandingPage;
