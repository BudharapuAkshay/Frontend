import React, { useState, useEffect } from "react";
import {
  FiCalendar,
  FiMapPin,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ShimmerPlaceholder from "../ShimmerPlaceHolder";

function ArtistDashboard() {
  const [appliedPosts, setAppliedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const artistId = sessionStorage.getItem("id"); 

  useEffect(() => {
    const fetchAppliedPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8989/api/applications/artist/${artistId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch applied posts.");
        }
        const data = await response.json();
        setAppliedPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedPosts();
  }, [artistId]);

  const getStatusColor = (isShortlisted) => {
    return isShortlisted ? "text-green-400" : "text-yellow-400";
  };

  const getStatusIcon = (isShortlisted) => {
    return isShortlisted ? (
      <FiCheckCircle className="w-5 h-5 text-green-400" />
    ) : (
      <FiClock className="w-5 h-5 text-yellow-400" />
    );
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
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Applied Opportunities
          </h1>
          <p className="text-gray-400 mt-2">
            Track the status of your applications
          </p>
        </div>
        <div className="space-y-6">
          {appliedPosts.map((post) => (
            <div
              key={post.applicationId}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4">
                  <img
                    src={post.talentPostImageUrl}
                    alt={post.talentPostRoleType}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-2">
                        {post.talentPostRoleType.toUpperCase()}
                      </h2>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {post.talentPostTalentType.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(post.shortlisted)}
                      <span
                        className={`font-medium ${getStatusColor(
                          post.shortlisted
                        )}`}
                      >
                        {post.shortlisted ? "Shortlisted" : "Under-Review"}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center text-gray-300">
                      <FiMapPin className="mr-2" />
                      <span>{post.talentPostLocation}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FiCalendar className="mr-2" />
                      <span>
                        {new Date(post.talentPostStartDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FiClock className="mr-2" />
                      <span>{post.talentPostHours}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FaRupeeSign className="mr-2" />
                      <span>{post.talentPostPaymentInfo}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                      Applied on:{" "}
                      {new Date(post.talentPostSubmissionDeadline).toLocaleDateString()}
                    </span>
                    <button
                      onClick={() =>
                        navigate(`/opportunity-details/${post.talentPostId}`)
                      }
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtistDashboard;
