import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import PostDetails from './PostDetails';
import ApplicationsList from './ApplicationsList';

export default function PostApplicationsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [shortlistedApplicants, setShortlistedApplicants] = useState([]);
  const { post: selectedPost } = location.state || {};

  const handleDeletePost = (postId) => {
    // Example delete post logic
    fetch(`http://localhost:8888/api/posts/${postId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to delete post');
        alert('Post deleted successfully');
        navigate('/director/dashboard');
      })
      .catch((error) => console.error('Error deleting post:', error));
  };

  const handleShortlistApplicant = (applicantId) => {
    // Example shortlist logic
    setShortlistedApplicants((prev) => [...prev, applicantId]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="pt-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            {/* Left Sidebar - Post Details */}
            <div className="w-1/3">
              <PostDetails post={selectedPost} />
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleDeletePost(selectedPost?.talentPostId)}
                  className="mx-4 text-red-500 hover:text-red-400"
                >
                  <FiTrash2 className="inline mr-2" /> Delete
                </button>
              
              <Link
                to={`/director/${selectedPost?.talentPostId}/shortlisted`}
                className="mx-4 text-white hover:text-blue-400 transition-colors no-underline"
              >
                View Shortlisted Applicants
              </Link>
              </div>
            </div>

            {/* Right Side - Applicants List */}
            <div className="w-2/3 space-y-8">
              <ApplicationsList
                postId={selectedPost?.talentPostId}
                onShortlist={handleShortlistApplicant}
                shortlistedApplicants={shortlistedApplicants}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
