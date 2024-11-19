import React, { useState } from 'react';
import { FiEdit2, FiCalendar, FiMapPin, FiSave, FiX } from 'react-icons/fi';
import { FaRupeeSign } from "react-icons/fa";

function PostDetails({ post }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState(post);

  const handleSave = () => {
    // Save logic goes here (e.g., API call to save `editedPost`)
    console.log("Saved post:", editedPost);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedPost(post);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-colors">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Post Details</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center px-3 py-1 text-sm text-blue-400 hover:text-blue-300"
          >
            <FiEdit2 className="mr-1" />
            Edit
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="flex items-center px-3 py-1 text-sm text-green-400 hover:text-green-300"
            >
              <FiSave className="mr-1" />
              Save
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center px-3 py-1 text-sm text-red-400 hover:text-red-300"
            >
              <FiX className="mr-1" />
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {isEditing ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Role Type</label>
              <input
                type="text"
                value={editedPost.talentPostRoleType}
                onChange={(e) => setEditedPost({ ...editedPost, talentPostRoleType: e.target.value })}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Project Details</label>
              <textarea
                value={editedPost.talentPostProjectDetails}
                onChange={(e) => setEditedPost({ ...editedPost, talentPostProjectDetails: e.target.value })}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2"
                rows="4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Location</label>
              <input
                type="text"
                value={editedPost.talentPostLocation}
                onChange={(e) => setEditedPost({ ...editedPost, talentPostLocation: e.target.value })}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Payment Info</label>
              <input
                type="text"
                value={editedPost.talentPostPaymentInfo}
                onChange={(e) => setEditedPost({ ...editedPost, talentPostPaymentInfo: e.target.value })}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Submission Deadline</label>
              <input
                type="Date"
                value={editedPost.talentPostSubmissionDeadline}
                onChange={(e) => setEditedPost({ ...editedPost, talentPostSubmissionDeadline: e.target.value })}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{post.talentPostRoleType} {post.talentPostTalentType}</h3>
              <p className="text-gray-300">{post.talentPostProjectDetails}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-gray-300">
                <FiMapPin className="mr-2 text-blue-400" />
                <span>{post.talentPostLocation}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiCalendar className="mr-2 text-blue-400" />
                <span>Start Date: {new Date(post.talentPostStartDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiCalendar className="mr-2 text-blue-400" />
                <span>End Date: {new Date(post.talentPostEndDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiCalendar className="mr-2 text-blue-400" />
                <span>Submission Deadline: {new Date(post.talentPostSubmissionDeadline).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaRupeeSign className="mr-2 text-blue-400" />
                <span>{post.talentPostPaymentInfo} per hour</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PostDetails;
