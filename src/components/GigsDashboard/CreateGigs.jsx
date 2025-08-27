import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
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

// Validation schema for the entire form
const validationSchema = Yup.object({
  basic: Yup.object({
    title: Yup.string()
      .min(10, "Title must be at least 10 characters")
      .max(80, "Title cannot exceed 80 characters")
      .required("Gig title is required"),
    category: Yup.string().required("Category is required"),
    subcategory: Yup.string().required("Subcategory is required"),
    technology: Yup.string().required("Technology is required"),
    tags: Yup.array().min(1, "At least one tag is required"),
  }),
  description: Yup.object({
    description: Yup.string()
      .min(50, "Description must be at least 50 characters")
      .required("Description is required"),
  }),
  faq: Yup.object({
    faqs: Yup.array().min(1, "At least one FAQ is required"),
  }),
  milestones: Yup.object({
    milestones: Yup.array().min(1, "At least one milestone is required"),
  }),
  gallery: Yup.object({
    images: Yup.array().min(1, "At least one image is required"),
  }),
});

const CreateGigs = () => {
  const [activeStep, setActiveStep] = useState("basic");
  const [completedSteps, setCompletedSteps] = useState([]);
  const navigate = useNavigate();

  // Initial form values
const initialValues = {
  basic: {
    title: "",
    category: "",
    subcategory: "",
    technology: "",
    tags: [],
    confirmed: false,
  },
  description: {
    description: "",   // object with description key
  },
  faq: {
    faqs: [],          // object with faqs array
  },
  milestones: {
    milestones: [],    // object with milestones array
  },
  gallery: {
    images: [],
    videos: [],
  },
};


  const handleContinue = (step) => {
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

 const handleSubmit = async (values) => {
  try {
    console.log("Submitting gig data:", values);

    const payload = {
      basic: values.basic,
      description: values.description,
      faq: values.faq,
      milestones: values.milestones,
      gallery: values.gallery,
    };

    // yaha API call karo
    // await api.post("/gigs", payload);

    console.log("Gig created successfully!");
  } catch (error) {
    console.error("Error creating gig:", error);
  }
};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
      enableReinitialize={true}
      validateOnChange={true}
    >
      {(formikProps) => {
        const { values } = formikProps;

        React.useEffect(() => {
          console.log("onChange Data:", {
            
              gigs: values,
            
          });
        }, [values]);
return(
        <div className="min-h-screen  text-gray-600">
      {/* Navbar */}
      <div className="bg-gray-100 ">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold">Create Gigs</h1>
          <div className="flex space-x-3">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 hover:bg-gray-200 rounded-lg text-sm"
            >
              Save
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 hover:bg-gray-200 rounded-lg text-sm"
            >
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
            onContinue={() => handleContinue("basic")}
            initialData={formikProps.values.basic}
            formikProps={formikProps}
          />
        )}
        {activeStep === "description" && (
          <Description
            onCancel={() => handleBack("description")}
            onContinue={() => handleContinue("description")}
            initialData={formikProps.values.description}
            formikProps={formikProps}
          />
        )}
        {activeStep === "faq" && (
          <FAQSection
            onCancel={() => handleBack("faq")}
            onContinue={() => handleContinue("faq")}
            initialData={formikProps.values.faq}
            formikProps={formikProps}
          />
        )}
        {activeStep === "milestones" && (
          <Milestones
            onCancel={() => handleBack("milestones")}
            onContinue={() => handleContinue("milestones")}
            initialData={formikProps.values.milestones}
            formikProps={formikProps}
          />
        )}
        {activeStep === "gallery" && (
          <GalleryMedia
            onCancel={() => handleBack("gallery")}
            onContinue={() => handleContinue("gallery")}
            initialData={formikProps.values.gallery}
            formikProps={formikProps}
          />
        )}
        {activeStep === "review" && (
          <Review
            onBack={() => handleBack("review")}
            gigData={formikProps.values}
            onSubmit={() => handleSubmit(formikProps.values)}
          />
        )}
      </div>
    </div>
    );
  }}
  </Formik>
  );
};

export default CreateGigs;
