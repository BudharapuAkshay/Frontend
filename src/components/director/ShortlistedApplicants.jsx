import React, { useState, useEffect } from "react";
import { Mail, Trash2, ExternalLink, User2 } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import ShimmerPlaceholder from "../ShimmerPlaceHolder";

const ShortlistedApplicants = () => {
  const [shortlistedApplicants, setShortlistedApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { talentPostId } = useParams();
  const navigate = useNavigate();

  // Fetch shortlisted applicants
  useEffect(() => {
    const fetchShortlistedApplicants = async () => {
      try {
        const response = await fetch(
          `http://localhost:8888/api/directors/applications/${talentPostId}/shortlisted`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch shortlisted applicants");
        }
        const data = await response.json();
        setShortlistedApplicants(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShortlistedApplicants();
  }, [talentPostId]);

  const handleRemove = async (applicationId) => {
    try {
      const response = await fetch(
        `http://localhost:8888/api/directors/applications/${applicationId}/shortlist`,
        {
          method: "PUT",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to remove applicant from shortlist");
      }
      setShortlistedApplicants((prevApplicants) =>
        prevApplicants.filter(
          (applicant) => applicant.applicationId !== applicationId
        )
      );

      // Optionally, you can show a success message or notification
      console.log("Applicant removed from shortlist");
    } catch (err) {
      setError(err.message);
    }
  };
  

  const handleEmailAll = async (e) => {
    try {
      const response = await fetch(
        `http://localhost:8888/api/directors/applications/${talentPostId}/notify-shortlisted`,
        {
          method: "POST", // Assuming a POST request to notify shortlisted applicants
        }
      );
      if (!response.ok) {
        throw new Error("Failed to send email notifications");
      }
      // Optionally, handle response here
      console.log("Email notifications sent to shortlisted applicants");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleViewProfile = (id) => {
    navigate(`/director/view-artist-profile/${id}`);
  };

  const handleViewFile = (url) =>{
    window.open(url, "_blank");
  }

  if (loading) {
    return (<div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <ShimmerPlaceholder />
    </div>);
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-display font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Shortlisted Applicants
            </h1>
            <p className="text-gray-400 mt-2">Manage your shortlisted candidates</p>
            <button
              onClick={() => navigate(-1)}
              className="mb-6 mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-200"
            >
              Go Back
            </button>
          </div>

          <button
            onClick={handleEmailAll}
            className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-full transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
            <span>Email Notify</span>
          </button>
        </div>

        {/* Applicants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {shortlistedApplicants.map((applicant) => (
            <div
              key={applicant.applicationId}
              className="bg-gray-800 rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={applicant.artistProfilePicture}
                    alt={applicant.artistName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {applicant.artistName}
                    </h3>
                    <p className="text-purple-400">{applicant.artistType}</p>
                    <p className="text-sm text-gray-400">
                      {applicant.artistExperience} years experience
                    </p>
                    <p className="text-sm text-gray-400">
                      Location: {applicant.artistPrimaryWorkLocation}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(applicant.applicationId)}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  title="Remove from shortlist"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
                <button
                  onClick={() => handleViewProfile(applicant.artistId)}
                  className="flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <User2 className="w-4 h-4" />
                  <span>View Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleViewFile(applicant.fileUrl)}
                  className="flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <User2 className="w-4 h-4" />
                  <span>Access Pre-screen Files</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <a
                  href={`mailto:${applicant.artistEmail}`}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {shortlistedApplicants.length === 0 && (
          <div className="text-center py-12">
            <User2 className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-400">No Shortlisted Applicants</h3>
            <p className="text-gray-500 mt-2">Start shortlisting candidates to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortlistedApplicants;
