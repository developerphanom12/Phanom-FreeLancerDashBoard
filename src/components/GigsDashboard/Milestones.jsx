import React, { useState, useEffect } from "react";
import { FaPlus, FaTasks, FaLock, FaUsers, FaTrash } from "react-icons/fa";

const Milestones = ({ onCancel, onContinue, initialData }) => {
  const [showForm, setShowForm] = useState(false);
  const [milestones, setMilestones] = useState(initialData.milestones || []);
  const [currentData, setCurrentData] = useState({
    title: "",
    deliverables: "",
    timeline: "",
    price: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData.milestones) {
      setMilestones(initialData.milestones);
    }
  }, [initialData]);

  // ✅ Validate inputs
  const validateInputs = () => {
    let valid = true;
    let newErrors = {};

    if (!currentData.title.trim()) {
      newErrors.title = "Title is required.";
      valid = false;
    } else if (currentData.title.length < 5) {
      newErrors.title = "Title must be at least 5 characters.";
      valid = false;
    }

    if (!currentData.deliverables.trim()) {
      newErrors.deliverables = "Deliverables are required.";
      valid = false;
    } else if (currentData.deliverables.length < 10) {
      newErrors.deliverables = "Deliverables must be at least 10 characters.";
      valid = false;
    }

    if (!currentData.timeline.trim()) {
      newErrors.timeline = "Timeline is required.";
      valid = false;
    }

    if (currentData.price && !/^[0-9]+$/.test(currentData.price)) {
      newErrors.price = "Price must be a valid number.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // ✅ Add milestone
  const addMilestone = () => {
    if (!validateInputs()) return;

    const newMilestone = {
      title: currentData.title.trim(),
      deliverables: currentData.deliverables.trim(),
      timeline: currentData.timeline.trim(),
      price: currentData.price.trim() || "0",
    };

    setMilestones([...milestones, newMilestone]);
    setShowForm(false);
    setErrors({});
  };

  const removeMilestone = (index) => {
    const updated = [...milestones];
    updated.splice(index, 1);
    setMilestones(updated);
  };

  const handleContinue = () => {
    if (milestones.length === 0) {
      setErrors({ global: "Please add at least one milestone before continuing." });
      return;
    }
    setErrors({});
    onContinue({ milestones });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm w-full">
      {/* Heading */}
      <h2 className="text-lg font-semibold text-gray-800">Milestone Workflow</h2>
      <p className="text-sm text-gray-500 mt-1">
        Engage Buyers by breaking your gig into clear milestones. You’ll receive
        payment as each one is successfully completed.
      </p>

      {/* Global Error */}
      {errors.global && (
        <div className="mt-3 text-red-500 text-sm font-medium">{errors.global}</div>
      )}

      {/* Existing Milestones */}
      {milestones.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Your Milestones:</h3>
          {milestones.map((m, index) => (
            <div key={index} className="mb-3 p-3 border rounded-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{m.title}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Deliverables:</strong> {m.deliverables}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Timeline:</strong> {m.timeline}
                  </p>
                  {m.price && m.price !== "0" && (
                    <p className="text-sm text-gray-600">
                      <strong>Price:</strong> ₹{m.price}
                    </p>
                  )}
                </div>
                <button
                  type="button"
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

      {/* Add Form */}
      {showForm && (
        <div className="mt-4 p-4 rounded-md">
          {/* Title */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              placeholder="e.g., Design Homepage Layout"
              value={currentData.title}
              onChange={(e) => setCurrentData({ ...currentData, title: e.target.value })}
              className={`w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none ${
                errors.title
                  ? "border-red-500 focus:ring-red-300 focus:border-red-400"
                  : "border-gray-300 focus:ring-indigo-300 focus:border-indigo-400"
              }`}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          {/* Deliverables */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">Deliverables</label>
            <input
              type="text"
              placeholder="e.g., Provide 3 homepage layout options"
              value={currentData.deliverables}
              onChange={(e) =>
                setCurrentData({ ...currentData, deliverables: e.target.value })
              }
              className={`w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none ${
                errors.deliverables
                  ? "border-red-500 focus:ring-red-300 focus:border-red-400"
                  : "border-gray-300 focus:ring-indigo-300 focus:border-indigo-400"
              }`}
            />
            {errors.deliverables && (
              <p className="text-red-500 text-xs mt-1">{errors.deliverables}</p>
            )}
          </div>

          {/* Timeline */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">Timeline</label>
            <input
              type="text"
              placeholder="e.g., 5 days"
              value={currentData.timeline}
              onChange={(e) =>
                setCurrentData({ ...currentData, timeline: e.target.value })
              }
              className={`w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none ${
                errors.timeline
                  ? "border-red-500 focus:ring-red-300 focus:border-red-400"
                  : "border-gray-300 focus:ring-indigo-300 focus:border-indigo-400"
              }`}
            />
            {errors.timeline && (
              <p className="text-red-500 text-xs mt-1">{errors.timeline}</p>
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
              value={currentData.price}
              onChange={(e) => setCurrentData({ ...currentData, price: e.target.value })}
              className={`w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none ${
                errors.price
                  ? "border-red-500 focus:ring-red-300 focus:border-red-400"
                  : "border-gray-300 focus:ring-indigo-300 focus:border-indigo-400"
              }`}
            />
            {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setErrors({});
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 text-sm"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={addMilestone}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 text-sm"
            >
              Add Milestone
            </button>
          </div>
        </div>
      )}

      {/* Add Button */}
      {!showForm && (
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="flex items-center text-green-600 hover:text-green-700 mt-4 text-sm font-medium"
        >
          <FaPlus className="mr-1" />
          Add Milestones
        </button>
      )}

      {/* Info Section */}
      <div className="mt-6 space-y-4">
        <div className="flex items-start space-x-3">
          <FaTasks className="text-gray-600 text-lg mt-1" />
          <div>
            <p className="text-sm font-medium text-gray-800">Increase Your Orders</p>
            <p className="text-sm text-gray-500">
              Attract more buyers with flexible payment options for bigger projects.
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
              Receive payments step-by-step as each milestone is successfully delivered.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <FaUsers className="text-gray-600 text-lg mt-1" />
          <div>
            <p className="text-sm font-medium text-gray-800">Stay Aligned with Buyers</p>
            <p className="text-sm text-gray-500">
              Ensure clarity and smooth collaboration with shared expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-start space-x-3 mt-6">
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

export default Milestones;
