import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function BasicInformation({ onCancel, onContinue, initialData }) {
  const [tags, setTags] = useState(initialData.tags || []);
  const [tagInput, setTagInput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      title: initialData.title || "",
      category: initialData.category || "",
      subcategory: initialData.subcategory || "",
      technology: initialData.technology || "",
      confirmed: initialData.confirmed || false,
    },
  });

  const addTag = (e) => {
    e.preventDefault();
    if (tagInput && tags.length < 5) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const onSubmit = (data) => {
    const finalData = { ...data, tags };
    onContinue(finalData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-white shadow-sm rounded-xl p-6 mt-6 px-6"
    >
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
         <input
          type="text"
          placeholder="Write your gig's title..."
          {...register("title", {
            required: "Gig title is required",
            minLength: {
              value: 10,
              message: "Title must be at least 10 characters",
            },
            maxLength: {
              value: 80,
              message: "Title cannot exceed 80 characters",
            },
          })}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
        <h2 className="text-lg font-medium">Category</h2>
        <p className="text-sm text-gray-500 mb-2">
          Choose The Category And Sub-Category Most Suitable For Your Gig.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select a category</option>
            <option value="web">Web Development</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
          )}

          <select
            {...register("subcategory", { required: "Subcategory is required" })}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select a subcategory</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="seo">SEO</option>
          </select>
          {errors.subcategory && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subcategory.message}
            </p>
          )}
        </div>
      </div>

      {/* Technology Used */}
      <div className="mb-6">
        <h2 className="text-lg font-medium">Technology Used</h2>
        <input
          type="text"
          placeholder="Select technologies"
          {...register("technology", { required: "Technology is required" })}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500"
        />
        {errors.technology && (
          <p className="text-red-500 text-sm mt-1">{errors.technology.message}</p>
        )}
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
        <input
          type="checkbox"
          id="confirm"
          {...register("confirmed", { required: "You must confirm ownership" })}
          className="h-4 w-4 mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
        />
        <label htmlFor="confirm" className="text-sm">
          I Confirm That These Materials Are Original, Created By Me Or My Team,
          And Do Not Violate Any Third-Party Rights. I Understand That
          Unauthorized Use Of Digital Assets Is Against Phanom's Terms Of
          Service And May Result In My Account Being Blocked.
        </label>
      </div>
      {errors.confirmed && (
        <p className="text-red-500 text-sm mt-1">{errors.confirmed.message}</p>
      )}

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
          type="submit"
          className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
        >
          Save and Continue
        </button>
      </div>
    </form>
  );
}
