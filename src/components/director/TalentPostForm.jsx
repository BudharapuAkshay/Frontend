import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function TalentPostForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    talentPostTalentType: "",
    talentPostRoleType: "",
    talentPostProjectDetails: "",
    talentPostPaymentInfo: "",
    talentPostStartDate: "",
    talentPostEndDate: "",
    talentPostHours: "",
    talentPostLocation: "",
    talentPostCompanyInfo: "",
    talentPostGender: "",
    talentPostPreScreenRequests: [],
    talentPostSubmissionDeadline: "",
    talentPostImageUrl: "",
  });

  const handleCheckboxChange = (e, option) => {
    setFormData((prevData) => {
      const updatedRequests = e.target.checked
        ? [...prevData.talentPostPreScreenRequests, option]
        : prevData.talentPostPreScreenRequests.filter(
            (item) => item !== option
          );

      return { ...prevData, talentPostPreScreenRequests: updatedRequests };
    });
  };

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(currentStep);
    const directorId = sessionStorage.getItem("id"); // Fetch director ID from sessionStorage
    if (!directorId) {
      console.error("Director ID not found in session storage");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8888/api/directors/${directorId}/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Post created successfully:", data);
      // Reset form or navigate to another page if needed
      navigate('/director/dashboard')
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Talent Type
              </label>
              <select
                value={formData.talentPostTalentType}
                onChange={(e) =>
                  handleInputChange("talentPostTalentType", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select talent type</option>
                {[
                  "Actor",
                  "Musician",
                  "Dancer",
                  "Model",
                  "Voice Artist",
                  "Performer",
                ].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Role Type
              </label>
              <input
                type="text"
                value={formData.talentPostRoleType}
                onChange={(e) =>
                  handleInputChange("talentPostRoleType", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Lead Role, Supporting Role"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Details
              </label>
              <textarea
                value={formData.talentPostProjectDetails}
                onChange={(e) =>
                  handleInputChange("talentPostProjectDetails", e.target.value)
                }
                rows="4"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your project..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  value={formData.talentPostStartDate}
                  onChange={(e) =>
                    handleInputChange("talentPostStartDate", e.target.value)
                  }
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  value={formData.talentPostEndDate}
                  onChange={(e) =>
                    handleInputChange("talentPostEndDate", e.target.value)
                  }
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Submission Deadline
              </label>
              <input
                type="date"
                value={formData.talentPostSubmissionDeadline}
                onChange={(e) =>
                  handleInputChange(
                    "talentPostSubmissionDeadline",
                    e.target.value
                  )
                }
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Payment Information
              </label>
              <input
                type="text"
                value={formData.talentPostPaymentInfo}
                onChange={(e) =>
                  handleInputChange("talentPostPaymentInfo", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., $500 per day, $5000 per month"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Work Hours
              </label>
              <input
                type="text"
                value={formData.talentPostHours}
                onChange={(e) =>
                  handleInputChange("talentPostHours", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 5 hours"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company Information
              </label>
              <input
                type="text"
                value={formData.talentPostCompanyInfo}
                onChange={(e) =>
                  handleInputChange("talentPostCompanyInfo", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Suresh Productions"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.talentPostLocation}
                onChange={(e) =>
                  handleInputChange("talentPostLocation", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Los Angeles, CA"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Gender
              </label>
              <select
                value={formData.talentPostGender}
                onChange={(e) =>
                  handleInputChange("talentPostGender", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="any">Any</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Pre-screen Requests
              </label>
              <div className="flex flex-wrap gap-3">
                {["Audio", "Video", "Photographs", "Resume", "Portfolio"].map(
                  (option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="talentPostPreScreenRequests"
                        value={option}
                        checked={formData.talentPostPreScreenRequests.includes(
                          option
                        )}
                        onChange={(e) => handleCheckboxChange(e, option)}
                        className="appearance-none h-4 w-4 border border-gray-500 rounded-sm bg-gray-700 checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
                      />
                      <span className="text-white">{option}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Image URL
              </label>
              <input
                type="url"
                value={formData.talentPostImageUrl}
                onChange={(e) =>
                  handleInputChange("talentPostImageUrl", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
              />
            </div>

            {formData.imageUrl && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preview
                </label>
                <div className="mt-2 relative aspect-video rounded-lg overflow-hidden bg-gray-700">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/800x400?text=Invalid+Image+URL";
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Main Content */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl text-center font-bold text-white mb-6 ">
              CREATE CASTING CALL
            </h2>

            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex justify-between">
                {[
                  "Project Info",
                  "Work Conditions",
                  "Role Requirements",
                  "Media",
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`flex-1 text-center ${
                      index + 1 === currentStep
                        ? "text-blue-400"
                        : "text-gray-400"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${
                        index + 1 === currentStep
                          ? "bg-blue-600"
                          : index + 1 < currentStep
                          ? "bg-green-600"
                          : "bg-gray-700"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
              <div className="relative mt-2">
                <div className="absolute left-0 top-1/2 h-0.5 w-full bg-gray-700" />
                <div
                  className="absolute left-0 top-1/2 h-0.5 bg-blue-600 transition-all"
                  style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* Form Content */}

            <form onSubmit={(e) => handleSubmit(e)}>
              {renderStepContent()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <FiArrowLeft className="mr-2" />
                    Previous
                  </button>
                )}

                {currentStep < 4 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors ml-auto"
                  >
                    Next
                    <FiArrowRight className="ml-2" />
                  </button>
                )}

                {currentStep === 4 && (
                  <button
                    type="submit"
                    className="flex items-center px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors ml-auto"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentPostForm;
