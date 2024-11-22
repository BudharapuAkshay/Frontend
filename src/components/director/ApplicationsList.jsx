import React, { useEffect, useState } from "react";
import { FiMail, FiMapPin, FiBriefcase, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ShimmerPlaceholder from "../ShimmerPlaceHolder";

function ApplicationsList({ postId }) {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch applicants based on postId
  const fetchApplicants = async () => {
    try {
      const response = await fetch(
        `http://localhost:8888/api/directors/applications/${postId}/applicants`
      );
      if (response.ok) {
        const data = await response.json();
        setApplicants(data);
      } else {
        console.error("Failed to fetch applicants");
      }
    } catch (error) {
      console.error("Error fetching applicants:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewProfile = (applicant) => {
    if (applicant) {
      navigate(`/director/view-artist-profile/`+applicant.artistId);
    } else {
      console.error("Artist ID is undefined");
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, [postId]);

  const handleShortlist = async (applicant) => {
    try {
      const response = await fetch(
        `http://localhost:8888/api/directors/applications/${applicant.applicationId}/shortlist`,
        { method: "PUT" }
      );

      if (response.ok) {
        fetchApplicants();
      } else {
        console.error("Failed to shortlist the applicant");
      }
    } catch (error) {
      console.error("Error shortlisting the applicant:", error);
    }
  };

  if (loading) {
    return (<div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <ShimmerPlaceholder />
    </div>);
  }
  
  return (
    <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-colors">
      <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Applicants
      </h2>
      <div className="space-y-4">
        {applicants.map((applicant) => (
          <div
            key={applicant.applicationId}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6"
          >
            <div className="flex items-center space-x-4">
              <img
                src={applicant.artistProfilePicture}
                alt={applicant.artistName}
                className="w-14 h-14 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {applicant.artistName}
                </h3>
                <p className="text-sm text-gray-300">{applicant.artistType}</p>
                <p className="text-sm text-gray-300">
                  Location: {applicant.artistPrimaryWorkLocation}
                </p>
              </div>
              <div className="flex space-x-2">
                {!applicant.shortlisted ? (
                  <button
                    onClick={() => handleShortlist(applicant)}
                    className="p-2 text-green-400 hover:text-green-300 transition-colors"
                    title="Shortlist"
                  >
                    Click to Shortlist
                  </button>
                ) : (
                  <span className="text-green-400">Shortlisted</span>
                )}
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center text-gray-300">
                <FiMail className="mr-2" />
                <a
                  href={`mailto:${applicant.artistEmail}`}
                  className="text-blue-400 hover:underline"
                >
                  {applicant.artistEmail}
                </a>
              </div>
              
              <div className="flex items-center text-gray-300">
                <FiUser className="mr-2" />
                <button
                  onClick={() => handleViewProfile(applicant)}
                  className="text-blue-400 hover:underline"
                >
                  View Profile
                </button>
              </div>
              <div className="flex items-center text-gray-300">
                <FiMapPin className="mr-2" />
                Location: {applicant.artistPrimaryWorkLocation}
              </div>
              <div className="flex items-center text-gray-300">
                <FiBriefcase className="mr-2" />
                Experience: {applicant.artistExperience} years
              </div>
            </div>
          </div>
        ))}
        {applicants.length === 0 && (
          <p className="text-gray-300">No applicants found.</p>
        )}
      </div>
    </div>
  );
}

export default ApplicationsList;
