import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ShimmerPlaceholder from "../ShimmerPlaceHolder";

function DirectorDashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const navigate = useNavigate();

  useEffect(() => {
    const directorId = sessionStorage.getItem("id");
    if (directorId) {
      fetch(`http://localhost:8888/api/directors/${directorId}/posts`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setPosts(data);
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
          setLoading(false); // Set loading to false in case of an error
        });
    } else {
      setLoading(false); // If no directorId is found, set loading to false
    }
  }, []);

  const handleClick = (post) => {
    navigate(`/director/${post.talentPostId}/applicants`, { state: { post } });
  };

  if (loading) {
    // Show nothing or a loading spinner
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <ShimmerPlaceholder />
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="min-h-screen pt-10 flex justify-center bg-gray-900 text-white">
        <div className="text-center px-6">
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-blue-400">
              Oops! No Posts Found
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              It seems you haven’t created any posts yet. Start by adding a new
              talent post to find your ideal candidates!
            </p>
            <Link
              to="/director/add-talent-post"
              className="bg-green-600 hover:bg-green-400 text-white px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            >
              Add Talent Post
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="pt-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center leading-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Posts
          </h1>
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.talentPostId}
                onClick={() => handleClick(post)}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
              >
                <img
                  src={post.talentPostImageUrl}
                  alt={post.talentPostTalentType}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-white">
                      {post.talentPostRoleType.toUpperCase()}
                    </h2>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                      {post.talentPostTalentType.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {post.talentPostProjectDetails}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.talentPostLocation.toUpperCase()}</span>
                    <span>{post.talentPostGender.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorDashboard;
