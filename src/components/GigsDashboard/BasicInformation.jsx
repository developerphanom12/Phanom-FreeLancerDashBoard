import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";

export default function BasicInformation({ onCancel, onContinue, initialData, formikProps }) {
  const [tags, setTags] = useState(initialData.tags || []);
  const [tagInput, setTagInput] = useState("");

  // Use Formik's values and methods
  const { values, setFieldValue, errors, touched } = formikProps;

  const addTag = (e) => {
    e.preventDefault();
    if (tagInput && tags.length < 5) {
      const newTags = [...tags, tagInput];
      setTags(newTags);
      setFieldValue('basic.tags', newTags);
      setTagInput("");
    }
  };

  const removeTag = (tag) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
    setFieldValue('basic.tags', newTags);
  };

  const handleContinue = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Update Formik values with current tags
    setFieldValue('basic.tags', tags);

    // Call the parent's onContinue function
    onContinue();
  };

  return (
    <div className="w-full bg-white shadow-sm rounded-xl p-6 px-6">
      {/* Gig Title */}
      <div className="mb-6">
        <h2 className="text-lg font-medium">Gig Title</h2>
        <p className="text-sm text-gray-500 mb-2">
          As Your Gig Storefront, Your Title Is The Most Important Place To
          Include Keywords That Buyers Would Likely Use To Search For A Service
          Like Yours.
        </p>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h2 className="text-lg font-medium">Gig Title</h2>
         <Field
          name="basic.title"
          type="text"
          placeholder="Write your gig's title..."
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500"
        />
        <ErrorMessage name="basic.title" component="p" className="text-red-500 text-sm mt-1" />
        <h2 className="text-lg font-medium">Category</h2>
        <p className="text-sm text-gray-500 mb-2">
          Choose The Category And Sub-Category Most Suitable For Your Gig.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Field
              as="select"
              name="basic.category"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select a category</option>
              <option value="web">Web Development</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </Field>
            <ErrorMessage name="basic.category" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Field
              as="select"
              name="basic.subcategory"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select a subcategory</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="seo">SEO</option>
            </Field>
            <ErrorMessage name="basic.subcategory" component="p" className="text-red-500 text-sm mt-1" />
          </div>
        </div>
      </div>

      {/* Technology Used */}
      <div className="mb-6">
        <h2 className="text-lg font-medium">Technology Used</h2>
        <Field
          name="basic.technology"
          type="text"
          placeholder="Select technologies"
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500"
        />
        <ErrorMessage name="basic.technology" component="p" className="text-red-500 text-sm mt-1" />
      </div>

      {/* Search Tags */}
      <div className="mb-6">
        <h2 className="text-lg font-medium">Search Tags</h2>
        <p className="text-sm text-gray-500">
          Tag Your Gig With Buzz Words That Are Relevant To The Services You
          Offer. Use All 5 Tags To Get Found.
        </p>

        <form onSubmit={addTag} className="mt-3 flex">
          <input
            type="text"
            placeholder="Add tag"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500"
          />
        </form>

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              onClick={() => removeTag(tag)}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm cursor-pointer hover:bg-gray-300"
            >
              {tag} ✕
            </span>
          ))}
        </div>
        {tags.length === 0 && (
          <p className="text-red-500 text-sm mt-1">
            Please add at least 1 tag
          </p>
        )}
        <p className="text-xs text-gray-500 mt-1">
          5 tags maximum. Use letters and numbers only.
        </p>
      </div>

      {/* Confirmation Checkbox */}
      <div className="mb-6 flex items-start space-x-3">
        <Field
          type="checkbox"
          name="basic.confirmed"
          id="confirm"
          className="h-4 w-4 mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
        />
        <label htmlFor="confirm" className="text-sm">
          I Confirm That These Materials Are Original, Created By Me Or My Team,
          And Do Not Violate Any Third-Party Rights. I Understand That
          Unauthorized Use Of Digital Assets Is Against Phanom's Terms Of
          Service And May Result In My Account Being Blocked.
        </label>
      </div>
      <ErrorMessage name="basic.confirmed" component="p" className="text-red-500 text-sm mt-1" />

      {/* Footer Buttons */}
      <div className="flex justify-start space-x-3 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100"
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
}
