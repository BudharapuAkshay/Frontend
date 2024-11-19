import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ArtistProfileForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { artistId } = location.state;
  const [formData, setFormData] = useState({
    artistId: artistId,
    artistName: '',
    artistProfilePicture: null,
    artistAbout: '',
    artistPrimaryWorkLocation: '',
    artistHeight: '',
    artistWeight: '',
    artistAge: '',
    artistSpecialSkills: [],
    artistExperience: '',
    artistType: '',
    artistEmail:'',
    artistPhoneNumber:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5050/api/artists/${formData.artistId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        navigate("/login");
      } else {
        alert("Failed to create artist profile. Please try again.");
      }
    } catch (error) {
      console.error("Error creating artist profile:", error);
      alert("An error occurred while creating the profile.");
    }
  };

  return (
    <div className="pt-20 px-4 pb-20 sm:px-6 lg:px-8">
  <div className="max-w-2xl mx-auto">
    <div className="bg-gray-900 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl text-center font-bold text-white mb-6">
        Artist Registration
      </h2>

      {/* Single Form Section */}
      <form onSubmit={handleSubmit}>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="artistName" className="text-base font-semibold text-gray-300">Artist Name</label>
            <input
              type="text"
              name="artistName"
              value={formData.artistName}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="artistPrimaryWorkLocation" className="text-base font-semibold text-gray-300">Primary Work Location</label>
            <input
              type="text"
              name="artistPrimaryWorkLocation"
              value={formData.artistPrimaryWorkLocation}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="artistEmail" className="text-base font-semibold text-gray-300">Email ID</label>
            <input
              type="email"
              name="artistEmail"
              value={formData.artistEmail}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="artistPhoneNumber" className="text-base font-semibold text-gray-300">Phone Number</label>
            <input
              type="text"
              name="artistPhoneNumber"
              value={formData.artistPhoneNumber}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="mb-4">
          <label htmlFor="artistAbout" className="text-base font-semibold text-gray-300">About</label>
          <textarea
            rows={3}
            name="artistAbout"
            value={formData.artistAbout}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="artistHeight" className="text-base font-semibold text-gray-300">Height (in cm)</label>
            <input
              type="number"
              name="artistHeight"
              value={formData.artistHeight}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="artistWeight" className="text-base font-semibold text-gray-300">Weight (in kg)</label>
            <input
              type="number"
              name="artistWeight"
              value={formData.artistWeight}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="artistAge" className="text-base font-semibold text-gray-300">Age</label>
            <input
              type="number"
              name="artistAge"
              value={formData.artistAge}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="artistType" className="text-base font-semibold text-gray-300">Artist Type</label>
            <select
              name="artistType"
              value={formData.artistType}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>SELECT</option>
              <option value="Actor">Actor</option>
              <option value="Singer">Singer</option>
              <option value="Dancer">Dancer</option>
              <option value="Model">Model</option>
              <option value="Voice Artist">Voice Artist</option>
              <option value="Performer">Performer</option>
            </select>
          </div>
        </div>

        {/* Row 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="artistExperience" className="text-base font-semibold text-gray-300">Experience (years)</label>
            <input
              type="number"
              name="artistExperience"
              value={formData.artistExperience}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="artistProfilePicture" className="text-base font-semibold text-gray-300">Profile Picture</label>
            <input
              type="text"
              name="artistProfilePicture"
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Row 7 */}
        <div className="mb-4">
  <label htmlFor="artistSpecialSkills" className="text-base font-semibold text-gray-300">Special Skills</label>
  <input
    type="text"
    name="artistSpecialSkills"
    value={formData.artistSpecialSkills.join(', ')}  // Join the list back into a string with commas for display
    onChange={(e) => {
      // Split the input by commas and remove any empty spaces
      const skillsArray = e.target.value.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
      setFormData(prevData => ({
        ...prevData,
        artistSpecialSkills: skillsArray
      }));
    }}
    required
    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>


        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-400 text-white px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
}

export default ArtistProfileForm;