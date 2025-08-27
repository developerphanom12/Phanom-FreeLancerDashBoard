import React from "react";
import { ErrorMessage } from "formik";
import JoditEditor from "jodit-react";

const Description = ({ onCancel, onContinue, initialData, formikProps }) => {
  const { values, setFieldValue, errors, touched } = formikProps;

  const handleContinue = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onContinue();
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm w-full">
      {/* Heading */}
      <h2 className="text-lg font-semibold text-gray-800">Description</h2>
      <p className="text-sm text-gray-500 mt-1">
        Capture buyer interest by crafting a clear and compelling description –
        they'll understand your service at a glance and feel confident in choosing you.
      </p>

      {/* Label */}
      <label className="block text-sm font-medium text-gray-700 mt-6 mb-2">
        Briefly Describe Your Gig
      </label>

      {/* Jodit Editor */}
      <div className="border rounded-md">
        <JoditEditor
          value={values.description?.description || ""}
          onChange={(newContent) => setFieldValue("description.description", newContent)}
        />
      </div>
      <ErrorMessage
        name="description.description"
        component="p"
        className="text-red-500 text-sm mt-1"
      />

      {/* Footer Buttons */}
      <div className="flex justify-start space-x-3 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 text-sm"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleContinue}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 text-sm"
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default Description;
