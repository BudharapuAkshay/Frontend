import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DirectorDashboard() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const directorId = sessionStorage.getItem("id");
    if (directorId) {
      fetch(`http://localhost:8888/api/directors/${directorId}/posts`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setPosts(data))
        .catch(error => console.error("Error fetching posts:", error));
    }
  }, []);

  const handleClick = (post) => {
    navigate(`/director/${post.talentPostId}/applicants`, { state: { post } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="pt-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold text-white mb-8 text-center">My Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.talentPostId}
                onClick={() => handleClick(post)}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all"
              >
                <img
                  src={post.talentPostImageUrl}
                  alt={post.talentPostTalentType}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-white">{post.talentPostRoleType.toUpperCase()}</h2>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {post.talentPostTalentType.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 line-clamp-2">{post.talentPostProjectDetails}</p>
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
