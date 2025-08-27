import React, { useState, useEffect } from "react";
import { FaPlus, FaTasks, FaLock, FaUsers, FaTrash } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Milestones = ({ onCancel, onContinue, initialData }) => {
  const [showForm, setShowForm] = useState(false);
  const [milestones, setMilestones] = useState(initialData.milestones || []);

  // ✅ React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (initialData.milestones) {
      setMilestones(initialData.milestones);
    }
  }, [initialData]);

  // ✅ On submit add milestone
  const onSubmit = (data) => {
    const newMilestone = {
      title: data.title,
      deliverables: data.deliverables,
      timeline: data.timeline,
      price: data.price || "0",
    };

    setMilestones([...milestones, newMilestone]);
    reset(); // Clear form
    setShowForm(false);
  };

  const removeMilestone = (index) => {
    const updatedMilestones = [...milestones];
    updatedMilestones.splice(index, 1);
    setMilestones(updatedMilestones);
  };

  const handleContinue = () => {
    onContinue({ milestones });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm w-full">
      {/* Heading */}
      <h2 className="text-lg font-semibold text-gray-800">Milestone Workflow</h2>
      <p className="text-sm text-gray-500 mt-1">
        Engage Buyers By Breaking Your Gig Into Clear Milestones – They’ll See
        Exactly What To Expect, And You’ll Receive Payment As Each Milestone Is
        Successfully Completed.
      </p>

      {/* Display existing milestones */}
      {milestones.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Your Milestones:
          </h3>
          {milestones.map((milestone, index) => (
            <div key={index} className="mb-3 p-3 border rounded-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{milestone.title}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Deliverables:</strong> {milestone.deliverables}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Timeline:</strong> {milestone.timeline}
                  </p>
                  {milestone.price && milestone.price !== "0" && (
                    <p className="text-sm text-gray-600">
                      <strong>Price:</strong> ₹{milestone.price}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => removeMilestone(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show Form OR Add Button */}
      {showForm ? (
        <>
          {/* FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 p-4 rounded-md"
          >
            <p className="text-sm text-gray-700 mb-4">
              Set clear titles, define deliverables, and specify timelines to
              create structured milestones.
            </p>

            {/* Title */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                placeholder="e.g., Design Homepage Layout"
                {...register("title", { required: "Title is required" })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Deliverables */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Deliverables
              </label>
              <input
                type="text"
                placeholder="e.g., Provide 3 homepage layout options in Figma"
                {...register("deliverables", {
                  required: "Deliverables are required",
                })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
              />
              {errors.deliverables && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.deliverables.message}
                </p>
              )}
            </div>

            {/* Timeline */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Timeline
              </label>
              <input
                type="text"
                placeholder="e.g., 5 days"
                {...register("timeline", { required: "Timeline is required" })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
              />
              {errors.timeline && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.timeline.message}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Price (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., ₹100"
                {...register("price", {
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Price must be a number",
                  },
                })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
              />
              {errors.price && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 text-sm"
              >
                Add Milestone
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-700 mt-4">
            Set clear titles, define deliverables, and specify timelines to
            create structured milestones.
          </p>
        </>
      )}

      {/* Add Milestones button */}
      <button
        onClick={() => setShowForm(true)}
        className="flex items-center text-green-600 hover:text-green-700 mt-4 text-sm font-medium"
      >
        <FaPlus className="mr-1" />
        Add Milestones
      </button>

      {/* Footer Buttons */}
      <div className="flex justify-start space-x-3 mt-6">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 text-sm"
        >
          Cancel
        </button>
        <button
          onClick={handleContinue}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 text-sm"
        >
          Save and Continue
        </button>
      </div>

      {/* Info Section - Always Below Footer */}
      <div className="mt-6">
        <p className="text-sm text-gray-700">
          Setting up a workflow with milestones lets you…
        </p>
        <div className="mt-4 space-y-4">
          <div className="flex items-start space-x-3">
            <FaTasks className="text-gray-600 text-lg mt-1" />
            <div>
              <p className="text-sm font-medium text-gray-800">
                Increase Your Orders
              </p>
              <p className="text-sm text-gray-500">
                Attract more buyers with flexible payment options for bigger
                projects.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FaLock className="text-gray-600 text-lg mt-1" />
            <div>
              <p className="text-sm font-medium text-gray-800">
                Secure Payments by Milestone
              </p>
              <p className="text-sm text-gray-500">
                Receive payments step-by-step as each milestone is successfully
                delivered.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FaUsers className="text-gray-600 text-lg mt-1" />
            <div>
              <p className="text-sm font-medium text-gray-800">
                Stay Aligned with Buyers
              </p>
              <p className="text-sm text-gray-500">
                Ensure clarity and smooth collaboration with shared expectations
                at every stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
