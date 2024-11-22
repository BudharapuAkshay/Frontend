import React, { useState, useEffect } from "react";
import { FiMail, FiPhone, FiBriefcase, FiUser, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import ShimmerPlaceholder from "../ShimmerPlaceHolder";

function DirectorProfile() {
  const [director, setDirector] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const directorId = sessionStorage.getItem("id");

  useEffect(() => {
    const fetchDirectorDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8888/api/directors/${directorId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch director details");
        }
        const data = await response.json();
        setDirector(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDirectorDetails();
  }, [directorId]);



  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <ShimmerPlaceholder />
      </div>
    );
  }

  if (error) {
    return;
      
  }

  return (
    <div className="min-h-screen bg-gray-900">

      {/* Main Content */}
      <div className="pt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gray-800 rounded-lg p-6">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-700">
                  <img
                    src={director.directorProfilePictureUrl}
                    alt="Director"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  {director.directorName}
                </h2>
                <p className="text-lg text-purple-400">
                  {director.directorDesignation}
                </p>
                <p className="text-gray-300">
                  <FiBriefcase className="inline-block mr-2" />
                  {director.directorCompanyName}
                </p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiMail className="text-gray-400 w-5 h-5 mr-3" />
                  <span className="text-white">{director.directorEmailAddress}</span>
                </div>
                <div className="flex items-center">
                  <FiPhone className="text-gray-400 w-5 h-5 mr-3" />
                  <span className="text-white">{director.directorPhoneNumber}</span>
                </div>
              </div>
            </div>

            {/* Industry Specialization */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Industry Details
              </h3>
              <p className="text-gray-300">
                <strong>Experience:</strong> {director.directorIndustryExperience}
              </p>
              <p className="text-gray-300 mt-2">
                <strong>Specialization:</strong> {director.directorIndustrySpecialization}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorProfile;
