import React, { useEffect, useState } from "react";
import {
  FiCalendar,
  FiMapPin,
  FiClock,
  FiBriefcase,
} from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { useParams } from "react-router-dom";
import ShimmerPlaceholder from "../ShimmerPlaceHolder";

function TalentPostDetails() {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const artistId = sessionStorage.getItem("id"); // Replace with dynamic artistId from authentication or context.

  useEffect(() => {
    const fetchPostDetailsAndStatus = async () => {
      try {
        // Fetch post details
        const postResponse = await fetch(
          `http://localhost:5959/api/talent-posts/${postId}`
        );
        if (!postResponse.ok) {
          throw new Error("Failed to fetch post details");
        }
        const postData = await postResponse.json();
        setPostDetails(postData);

        // Check application status
        const statusResponse = await fetch(
          `http://localhost:8989/api/applications/${artistId}/${postId}/status`
        );
        if (!statusResponse.ok) {
          throw new Error("Failed to fetch application status");
        }
        const hasApplied = await statusResponse.json();
        setApplicationSubmitted(hasApplied);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPostDetailsAndStatus();
  }, [postId, artistId]);

  const handleApplicationSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:5050/api/artists/posts/${artistId}/${postId}/apply`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fileUrl }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the application.");
      }

      setApplicationSubmitted(true);
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <ShimmerPlaceholder />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        Error: {error}. Please try again later.
      </div>
    );
  }

  const {
    talentPostTalentType,
    talentPostRoleType,
    talentPostProjectDetails,
    talentPostPaymentInfo,
    talentPostHours,
    talentPostLocation,
    talentPostStartDate,
    talentPostEndDate,
    talentPostCompanyInfo,
    talentPostPreScreenRequests,
    talentPostImageUrl,
    talentPostGender,
    talentPostSubmissionDeadline,
  } = postDetails;

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-8">
          <img
            src={talentPostImageUrl}
            alt={talentPostRoleType}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold">
              {talentPostTalentType}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">
              {talentPostRoleType.toUpperCase()} {talentPostTalentType.toUpperCase()}
            </h1>
            <p className="text-xl text-gray-300">{talentPostProjectDetails}</p>
            <p className="text-xl text-gray-300 mt-2"><span>Gender Required: </span>{talentPostGender.toUpperCase()}</p>
          </div>

          {/* Key Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Position Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <FiMapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">{talentPostLocation}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <FiClock className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Work Hours</p>
                    <p className="text-white">{talentPostHours}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaRupeeSign className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Payment Info</p>
                    <p className="text-white">{talentPostPaymentInfo}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Application Timeline
              </h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <FiBriefcase className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Application Deadline</p>
                    <p className="text-white">
                      {new Date(
                        talentPostSubmissionDeadline
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <FiCalendar className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Project Start Date</p>
                    <p className="text-white">
                      {new Date(talentPostStartDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <FiCalendar className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Project End Date</p>
                    <p className="text-white">
                      {new Date(talentPostEndDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pre-Screening Requests */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Pre-Screening Requests
            </h2>
            <ul className="space-y-2">
              {talentPostPreScreenRequests.map((request, index) => (
                <li key={index} className="text-gray-300">
                  {request}
                </li>
              ))}
            </ul>
            {/* File URL Input */}
            <div className="mt-6">
              <label
                htmlFor="fileUrl"
                className="block text-sm font-medium text-gray-300"
              >
                File URL for Pre-Screening
                <div>( Upload all files in a single folder, upload in Google Drive, make it public and share the link )
                </div>
              </label>
              <input
                type="text"
                id="fileUrl"
                value={fileUrl}
                onChange={(e) => setFileUrl(e.target.value)}
                placeholder="Enter file URL"
                className="mt-2 p-2 w-full bg-gray-700 text-white rounded-lg"
                required
              />
            </div>
          </div>

          {/* Apply Button */}
          <div className="flex justify-center">
            <button
              onClick={handleApplicationSubmit}
              disabled={applicationSubmitted}
              className={`px-8 py-3 font-semibold rounded-lg transition-colors ${
                applicationSubmitted
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {applicationSubmitted ? "Application Submitted" : "Submit Application"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentPostDetails;
