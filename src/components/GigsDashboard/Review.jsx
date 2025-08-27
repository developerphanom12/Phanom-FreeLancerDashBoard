import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../assets/Images"; 

const Review = ({ onBack, onSubmit, gigData = {} }) => {
  const navigate = useNavigate();

  // fallback defaults so UI never crashes
  const safeGigData = {
    basic: {},
    description: {},
    faq: { faqs: [] },
    milestones: { milestones: [] },
    gallery: { images: [] },
    ...gigData,
  };

  const handleUpload = async () => {
    try {
      // Call the onSubmit function passed from parent (Formik's handleSubmit)
      await onSubmit(safeGigData);

      // Redirect to Gigs page after successful submission
      navigate("/gigs");
    } catch (error) {
      console.error("Error submitting gig:", error);
      alert("Error creating gig. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm w-full">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={Images.Congratulations}  
          alt="Congratulations"
          className="w-72 h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="mt-6 text-left">
        <h2 className="text-xl font-semibold text-gray-900">Congratulations!</h2>
        <p className="text-sm text-gray-500 mt-1">
          You’re Almost Done With Your First Gig.
        </p>
        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
          Before You Start Selling On Phanom, There’s One Last Step. Your
          Account’s Security Is Important To Us, So We Require Phone Number
          Verification. Complete This Step To Safely Publish Your First Gig.
        </p>
        <p className="text-xs text-gray-400 mt-6">
          Your Phone Number Remains Private And Is Not Used For Marketing
          Purposes. See More In Our{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-start space-x-3 mt-6">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 text-sm"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleUpload}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 text-sm"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Review;
