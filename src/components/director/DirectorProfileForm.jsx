// src/components/director/RegistrationForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  // State to hold form input values
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    directorId: sessionStorage.getItem("id"),
    directorName: "",
    directorDesignation: "",
    directorProfilePictureUrl: "",
    directorPhoneNumber: "",
    directorEmailAddress: "",
    directorCompanyName: "",
    directorIndustryExperience: "",
    directorIndustrySpecialization: "",
  });

  // Handler for input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8888/api/directors/${formData.directorId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        navigate("/director/profile");
      } else {
        alert("Failed to create director profile. Please try again.");
      }
    } catch (error) {
      console.error("Error creating director profile:", error);
      alert("An error occurred while creating the profile.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

      {/* Main Content */}
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl text-center font-bold text-white mb-6">
              CREATE DIRECTOR PROFILE
            </h2>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Director Name & Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base font-semibold text-gray-300">Director Name</label>
                  <input
                    type="text"
                    name="directorName"
                    value={formData.directorName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-300">Director Designation</label>
                  <input
                    type="text"
                    name="directorDesignation"
                    value={formData.directorDesignation}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Director Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base font-semibold text-gray-300">Email ID</label>
                  <input
                    type="email"
                    name="directorEmailAddress"
                    value={formData.directorEmailAddress}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-300">Phone Number</label>
                  <input
                    type="text"
                    name="directorPhoneNumber"
                    value={formData.directorPhoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Director Company Name & Profile Picture */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base font-semibold text-gray-300">Company Name</label>
                  <input
                    type="text"
                    name="directorCompanyName"
                    value={formData.directorCompanyName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-300">Profile Picture URL</label>
                  <input
                    type="text"
                    name="directorProfilePictureUrl"
                    value={formData.directorProfilePictureUrl}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Director Industry Specialization */}
              <div>
                <label className="block text-base font-semibold text-gray-300">Industry Specialization</label>
                <input
                  type="text"
                  name="directorIndustrySpecialization"
                  value={formData.directorIndustrySpecialization}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Director Industry Experience */}
              <div>
                <label className="block text-base font-semibold text-gray-300">Industry Experience</label>
                <textarea
                  rows={3}
                  name="directorIndustryExperience"
                  value={formData.directorIndustryExperience}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
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
    </div>
  );
};

export default RegistrationForm;
