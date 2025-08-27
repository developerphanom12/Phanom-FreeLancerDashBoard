import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicInformation from "./BasicInformation";
import Description from "./Description";
import FAQSection from "./FAQSection";
import Milestones from "./Milestones";
import GalleryMedia from "./GalleryMedia";
import Review from "./Review";

const steps = ["basic", "description", "faq", "milestones", "gallery", "review"];

const stepLabels = {
  basic: "Basic Information",
  description: "Description",
  faq: "FAQ Section",
  milestones: "Milestones",
  gallery: "Gallery & Media",
  review: "Review",
};

const CreateGigs = () => {
  const [activeStep, setActiveStep] = useState("basic");
  const [gigData, setGigData] = useState({});
  const [completedSteps, setCompletedSteps] = useState([]); // ✅ track completed steps
  const navigate = useNavigate();

  const handleContinue = (step, data) => {
    const updatedData = { ...gigData, [step]: data };
    setGigData(updatedData);
    localStorage.setItem("gigData", JSON.stringify(updatedData));

    const currentIndex = steps.indexOf(step);

    // Mark current step as completed
    if (!completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step]);
    }

    // Move forward
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = (step) => {
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setActiveStep(steps[currentIndex - 1]);
    }
  };

  const handleUpload = () => {
    localStorage.setItem("gigData", JSON.stringify(gigData));
    alert("Gig created successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-600">
      {/* Navbar */}
      <div className="bg-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold">Create Gigs</h1>
          <div className="flex space-x-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 text-sm">
              Save
            </button>
            <button className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 text-sm">
              Save & Preview
            </button>
          </div>
        </div>

        {/* Step Navigation (non-clickable) */}
        <div className="flex items-center space-x-6 px-6 py-4 text-sm font-medium">
          {steps.map((step, index) => {
            const isActive = activeStep === step;
            const isCompleted = completedSteps.includes(step);

            return (
              <div
                key={step}
                className={`flex items-center space-x-2 cursor-default ${
                  isActive
                    ? "text-purple-600"
                    : isCompleted
                    ? "text-green-600"
                    : "text-gray-400"
                }`}
              >
                <span
                  className={`flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full ${
                    isActive
                      ? "bg-purple-600 text-white"
                      : isCompleted
                      ? "bg-green-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </span>
                <span>{stepLabels[step]}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Conditional Step Content */}
      <div className="p-6">
        {activeStep === "basic" && (
          <BasicInformation
            onCancel={() => navigate(-1)}
            onContinue={(data) => handleContinue("basic", data)}
            initialData={gigData.basic || {}}
          />
        )}
        {activeStep === "description" && (
          <Description
            onCancel={() => handleBack("description")}
            onContinue={(data) => handleContinue("description", data)}
            initialData={gigData.description || {}}
          />
        )}
        {activeStep === "faq" && (
          <FAQSection
            onCancel={() => handleBack("faq")}
            onContinue={(data) => handleContinue("faq", data)}
            initialData={gigData.faq || {}}
          />
        )}
        {activeStep === "milestones" && (
          <Milestones
            onCancel={() => handleBack("milestones")}
            onContinue={(data) => handleContinue("milestones", data)}
            initialData={gigData.milestones || {}}
          />
        )}
        {activeStep === "gallery" && (
          <GalleryMedia
            onCancel={() => handleBack("gallery")}
            onContinue={(data) => handleContinue("gallery", data)}
            initialData={gigData.gallery || {}}
          />
        )}
        {activeStep === "review" && (
          <Review
            onBack={() => handleBack("review")}
            onUpload={handleUpload}
            gigData={gigData}
          />
        )}
      </div>
    </div>
  );
};

export default CreateGigs;
