import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TalentCard from "./TalentCard";
import ShimmerPlaceholder from "../ShimmerPlaceHolder";

function ArtistHome() {
    
  const [filter, setFilter] = useState("All");
  const [talentPosts, setTalentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Hook for navigation

  const categories = [
    "All",
    "Actor",
    "Singer",
    "Dancer",
    "Model",
    "Voice Artist",
    "Performer",
  ];

  useEffect(() => {
    const fetchTalentPosts = async () => {
      try {
        const response = await fetch("http://localhost:5959/api/talent-posts");
        if (!response.ok) {
          throw new Error("Failed to fetch talent posts");
        }
        const data = await response.json();
        setTalentPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTalentPosts();
  }, []);

  const handleApply = (postId) => {
    navigate(`/artist/home/${postId}`); // Navigate to the post details page
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
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Error: {error}</p>
      </div>
    );
  }

  const filteredPosts =
    filter === "All"
      ? talentPosts
      : talentPosts.filter((post) => post.talentPostTalentType === filter);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Find Your Next Opportunity
            </h2>
            <p className="text-gray-400 text-lg">
              Discover and apply for exciting opportunities in the arts.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  filter === category
                    ? "bg-purple-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Talent Posts */}
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <TalentCard
                key={post.talentPostId}
                post={post}
                onApply={handleApply}
              />
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <div className="text-center text-gray-400 mt-10">
              <p>No posts available for the selected category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArtistHome;
