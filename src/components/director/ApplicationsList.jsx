import React, { useEffect, useState } from 'react';
import { FiMail, FiCheck, FiX, FiUser, FiMapPin, FiBriefcase } from 'react-icons/fi';

function ApplicationsList({ postId, onShortlist, showShortlisted }) {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch applicants based on postId
    const fetchApplicants = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8888/api/applications/${postId}/applicants`);
        if (response.ok) {
          const data = await response.json();
          setApplicants(data);
        } else {
          console.error('Failed to fetch applicants');
        }
      } catch (error) {
        console.error('Error fetching applicants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, [postId]);

  const handleShortlist = (applicant) => {
    onShortlist(applicant);
  };

  const filteredApplicants = showShortlisted
    ? applicants.filter(applicant => applicant.isShortlisted)
    : applicants;

  if (loading) {
    return <p className="text-center text-gray-300">Loading applicants...</p>;
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-6">
        {showShortlisted ? 'Shortlisted Applicants' : 'Applicants'}
      </h2>
      <div className="space-y-4">
        {filteredApplicants.map((applicant) => (
          <div
            key={applicant.applicationId}
            className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <img
                src={applicant.artistProfilePicture}
                alt={applicant.artistName}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {applicant.artistName}
                </h3>
                <p className="text-sm text-gray-300">
                  {applicant.artistType} - {applicant.artistExperience} years experience
                </p>
                <p className="text-sm text-gray-300">Location: {applicant.artistPrimaryWorkLocation}</p>
              </div>
              <div className="flex space-x-2">
                {!applicant.isShortlisted ? (
                  <>
                    <button
                      onClick={() => handleShortlist(applicant)}
                      className="p-2 text-green-400 hover:text-green-300 transition-colors"
                      title="Shortlist"
                    >
                      <FiCheck />
                    </button>
                    <button
                      className="p-2 text-red-400 hover:text-red-300 transition-colors"
                      title="Reject"
                    >
                      <FiX />
                    </button>
                  </>
                ) : (
                  <span className="text-green-400">Shortlisted</span>
                )}
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center text-gray-300">
                <FiMail className="mr-2" />
                <a
                  href={`mailto:${applicant.artistEmail}`}
                  className="text-blue-400 hover:underline"
                >
                  {applicant.artistEmail}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <FiUser className="mr-2" />
                Artist ID: {applicant.applicationId}
              </div>
              <div className="flex items-center text-gray-300">
                <FiMapPin className="mr-2" />
                Location: {applicant.artistPrimaryWorkLocation}
              </div>
              <div className="flex items-center text-gray-300">
                <FiBriefcase className="mr-2" />
                Experience: {applicant.artistExperience} years
              </div>
            </div>
          </div>
        ))}
        {filteredApplicants.length === 0 && (
          <p className="text-gray-300">No applicants found.</p>
        )}
      </div>
    </div>
  );
}

export default ApplicationsList;
