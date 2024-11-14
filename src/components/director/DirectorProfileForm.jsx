// src/components/Director/DirectorProfileForm.jsx

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const DirectorProfileForm = () => {
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
        alert("Director profile created successfully!");
        navigate('/director/dashboard')
        // Optionally reset form or handle other actions
      } else {
        alert("Failed to create director profile. Please try again.");
      }
    } catch (error) {
      console.error("Error creating director profile:", error);
      alert("An error occurred while creating the profile.");
    }
  };

  return (
    <div className="p-10 mb-10 bg-white rounded-xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
        Create Director Profile
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            className="block text-gray-600 text-sm font-medium mb-2"
            htmlFor="directorName"
          >
            Name
          </label>
          <input
            type="text"
            id="directorName"
            name="directorName"
            value={formData.directorName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            placeholder="Enter full name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-600 text-sm font-medium mb-2"
            htmlFor="directorDesignation"
          >
            Designation
          </label>
          <input
            type="text"
            id="directorDesignation"
            name="directorDesignation"
            value={formData.directorDesignation}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            placeholder="Director of Operations, etc."
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-600 text-sm font-medium mb-2"
            htmlFor="directorProfilePictureUrl"
          >
            Profile Picture URL
          </label>
          <input
            type="url"
            id="directorProfilePictureUrl"
            name="directorProfilePictureUrl"
            value={formData.directorProfilePictureUrl}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            placeholder="Link to profile picture"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-600 text-sm font-medium mb-2"
            htmlFor="directorPhoneNumber"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="directorPhoneNumber"
            name="directorPhoneNumber"
            value={formData.directorPhoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-600 text-sm font-medium mb-2"
            htmlFor="directorEmailAddress"
          >
            Email Address
          </label>
          <input
            type="email"
            id="directorEmailAddress"
            name="directorEmailAddress"
            value={formData.directorEmailAddress}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-600 text-sm font-medium mb-2"
            htmlFor="directorCompanyName"
          >
            Company Name
          </label>
          <input
            type="text"
            id="directorCompanyName"
            name="directorCompanyName"
            value={formData.directorCompanyName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            placeholder="Enter company name"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-600 text-sm font-medium mb-2"
            htmlFor="directorIndustryExperience"
          >
            Industry Experience
          </label>
          <input
            type="text"
            id="directorIndustryExperience"
            name="directorIndustryExperience"
            value={formData.directorIndustryExperience}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            placeholder="e.g., 10+ years"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-600 text-sm font-medium mb-2"
            htmlFor="directorIndustrySpecialization"
          >
            Industry Specialization
          </label>
          <input
            type="text"
            id="directorIndustrySpecialization"
            name="directorIndustrySpecialization"
            value={formData.directorIndustrySpecialization}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            placeholder="Specialization field"
          />
        </div>
        <button
          type="submit"
          className="px-3 mx-36 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default DirectorProfileForm;
