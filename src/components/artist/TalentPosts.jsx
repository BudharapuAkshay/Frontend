import React, { useState } from "react";
import TalentCard from "./TalentCard";
import TalentPostDetails from "./TalentPostDetails";
import { FiLogOut, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";

function TalentPosts() {
  const [filter, setFilter] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);

  const talentPosts = [
    {
      id: 1,
      title: "Lead Vocalist Needed",
      category: "Music",
      description:
        "Seeking a talented lead vocalist for an upcoming rock band album recording and tour.",
      location: "Los Angeles, CA",
      date: "Starting Sept 2023",
      duration: "6 months",
      compensation: "$5000/month",
      coverImage:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&h=400",
    },
    {
      id: 2,
      title: "Contemporary Dancer",
      category: "Dance",
      description:
        "Professional dance company looking for contemporary dancers for upcoming performance season.",
      location: "New York, NY",
      date: "Starting Oct 2023",
      duration: "3 months",
      compensation: "$4000/month",
      coverImage:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&h=400",
    },
    {
      id: 3,
      title: "Portrait Artist",
      category: "Visual Arts",
      description:
        "Gallery seeking portrait artist for commissioned works and exhibition opportunity.",
      location: "Chicago, IL",
      date: "Immediate Start",
      duration: "Ongoing",
      compensation: "Commission Based",
      coverImage:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&h=400",
    },
    {
      id: 4,
      title: "Theater Actor",
      category: "Acting",
      description:
        "Leading role available for upcoming Broadway production. Experience required.",
      location: "New York, NY",
      date: "Starting Nov 2023",
      duration: "12 months",
      compensation: "$6000/month",
      coverImage:
        "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&h=400",
    },
  ];

  const categories = ["all", "Music", "Dance", "Visual Arts", "Acting"];

  const handleApply = (postId) => {
    const post = talentPosts.find((p) => p.id === postId);
    setSelectedPost(post);
  };

  const handleSignOut = () => {
    console.log("Sign out clicked");
    // Add sign out logic here
  };

  const handleProfile = () => {
    console.log("Profile clicked");
    // Add profile navigation logic here
  };

  if (selectedPost) {
    return (
      <TalentPostDetails
        post={selectedPost}
        onBack={() => setSelectedPost(null)}
      />
    );
  }

  const filteredPosts =
    filter === "all"
      ? talentPosts
      : talentPosts.filter((post) => post.category === filter);

  return (
    <div className="min-h-screen bg-gray-900">

      {/* Main Content */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Find Your Next Opportunity
            </h2>
            <p className="text-gray-400 text-lg">
              Discover and apply for exciting opportunities in the arts
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Talent Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <TalentCard key={post.id} post={post} onApply={handleApply} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentPosts;