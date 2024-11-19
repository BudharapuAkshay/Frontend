import React from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { FaRupeeSign } from "react-icons/fa";
function TalentCard({ post, onApply }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img 
          src={post.talentPostImageUrl} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
            {post.talentPostTalentType}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{post.talentPostRoleType.toUpperCase()} {post.talentPostTalentType.toUpperCase()}</h3>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-300">
            <FiMapPin className="mr-2" />
            <span>{post.talentPostLocation}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <FiCalendar className="mr-2" />
            <span>{post.talentPostSubmissionDeadline.substring(0,10)}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <FaRupeeSign className="mr-2" />
            <span>{post.talentPostPaymentInfo}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => onApply(post.talentPostId)}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TalentCard;