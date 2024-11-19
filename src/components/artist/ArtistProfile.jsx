import React, { useState, useEffect } from "react";
import { FiMail, FiPhone, FiMapPin, FiUser, FiLayers } from "react-icons/fi";
import { Link } from "react-router-dom";
import ShimmerPlaceholder from "../ShimmerPlaceHolder";

function ArtistProfile() {
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const artistId = sessionStorage.getItem("id");

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5050/api/artists/${artistId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch artist details");
        }
        const data = await response.json();
        setArtist(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtistDetails();
  }, [artistId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <ShimmerPlaceholder />
      </div>
    );
  }

  if (error) {
    return;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gray-800 rounded-lg p-6">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-700">
                  <img
                    src={artist.artistProfilePicture}
                    alt="Artist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  {artist.artistName}
                </h2>
                <p className="text-lg text-purple-400">
                  {artist.artistType}
                </p>
                <p className="text-gray-300">
                  <FiMapPin className="inline-block mr-2" />
                  {artist.artistPrimaryWorkLocation}
                </p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* About Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">About</h3>
              <p className="text-gray-300">{artist.artistAbout}</p>
            </div>

            {/* Physical Attributes */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Physical Attributes
              </h3>
              <p className="text-gray-300">
                <strong>Height:</strong> {artist.artistHeight}
              </p>
              <p className="text-gray-300 mt-2">
                <strong>Weight:</strong> {artist.artistWeight}
              </p>
              <p className="text-gray-300 mt-2">
                <strong>Age:</strong> {artist.artistAge}
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiMail className="text-gray-400 w-5 h-5 mr-3" />
                  <span className="text-white">{artist.artistEmail}</span>
                </div>
                <div className="flex items-center">
                  <FiPhone className="text-gray-400 w-5 h-5 mr-3" />
                  <span className="text-white">{artist.artistPhoneNumber}</span>
                </div>
              </div>
            </div>

            {/* Skills and Experience */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Skills & Experience
              </h3>
              <p className="text-gray-300">
                <strong>Special Skills:</strong> {artist.artistSpecialSkills.join(", ")}
              </p>
              <p className="text-gray-300 mt-2">
                <strong>Experience:</strong> {artist.artistExperience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistProfile;
