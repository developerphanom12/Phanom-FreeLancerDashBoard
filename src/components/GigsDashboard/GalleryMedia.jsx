import React, { useEffect } from "react";
import MakeEasyPopup from "./MakeEasyPopup";
import { FaRegImage, FaRegPlayCircle, FaExclamationCircle } from "react-icons/fa";

const GalleryMedia = ({ onCancel, onContinue, initialData, formikProps  }) => {
  const { values, setFieldValue } = formikProps; // 👈 ab sahi 
  const { gallery } = values;
  const { images = [], video = "", confirmed = false } = gallery || {};

  const [openPopup, setOpenPopup] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  // Disable background scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = openPopup ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openPopup]);

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImages = [...images];
        newImages[index] = event.target.result;
        setFieldValue("gallery.images", newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          video: "Video size must be less than 50MB.",
        }));
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setFieldValue("gallery.video", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!images.some((img) => img)) {
      newErrors.images = "Please upload at least 1 image.";
    }
    if (!confirmed) {
      newErrors.confirmed = "You must confirm that the materials are original.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      onContinue({ gallery: { images, video, confirmed } });
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm w-full relative">
      {/* Heading */}
      <h2 className="text-lg font-semibold text-gray-800">
        Highlight Your Skills With A Gig Gallery
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Show Different Samples Of Your Work To Attract And Convince Potential Buyers.
      </p>

      {/* Info Box */}
      <div className="bg-gray-100 border border-gray-200 rounded-md p-3 flex items-start mt-4">
        <FaExclamationCircle className="text-black w-5 h-5 mr-2 mt-0.5 cursor-pointer" />
        <p className="text-xs text-gray-700">
          Make It Easier For Buyers To Discover Your Services By Adding Relevant
          Tags To All Your Work Samples. Ensure You Only Upload Content You Own
          Or Have Proper Permission To Use, Following Fiverr’s Terms Of Service.
        </p>
      </div>

      {/* Images Upload Section */}
      <h3 className="text-md font-semibold text-gray-800 mt-6">
        Images (Up To 3)
      </h3>
      <p className="text-sm text-gray-500">
        Reach The Perfect Buyers By Displaying Examples Of Your Services.
      </p>
      {errors.images && (
        <p className="text-red-500 text-xs mt-1">{errors.images}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative">
              {images[i] ? (
                <div className="relative h-40 border rounded-md overflow-hidden">
                  <img
                    src={images[i]}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => {
                      const newImages = [...images];
                      newImages[i] = null;
                      setFieldValue("gallery.images", newImages);
                    }}
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md h-40 text-gray-500 text-sm cursor-pointer hover:border-purple-400 transition">
                  <FaRegImage size={32} className="mb-2 text-gray-400" />
                  <p>Upload Image</p>
                  <span className="text-blue-500 font-medium hover:underline">
                    Browse
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, i)}
                  />
                </label>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-start">
          <p className="text-sm text-blue-500 font-medium">
            <button onClick={() => setOpenPopup(true)}>
              Add Tags To This Sample
            </button>
            <br />
            <span className="text-sm text-red-500 font-medium">
              Add Info About This Sample To Continue.
            </span>
          </p>
        </div>
      </div>

      {/* Video Upload Section */}
      <h3 className="text-md font-semibold text-gray-800 mt-6">
        Video (Optional, One Only)
      </h3>
      <p className="text-sm text-gray-500">
        Capture Buyers’ Attention With A Video That Showcases Your Service
        (optional).
      </p>
      <p className="text-xs text-gray-400 mt-1">
        Please Choose A Video Shorter Than 75 Seconds And Smaller Than 50MB
      </p>
      {errors.video && (
        <p className="text-red-500 text-xs mt-1">{errors.video}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {video ? (
          <div className="relative h-40 border rounded-md overflow-hidden">
            <video src={video} className="w-full h-full object-cover" controls />
            <button
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              onClick={() => setFieldValue("gallery.video", "")}
            >
              ✕
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md h-40 text-gray-500 text-sm cursor-pointer hover:border-purple-400 transition">
            <FaRegPlayCircle size={36} className="mb-2 text-gray-400" />
            <p>Upload A Video Or</p>
            <span className="text-blue-500 font-medium hover:underline">
              Browse
            </span>
            <input
              type="file"
              className="hidden"
              accept="video/*"
              onChange={handleVideoUpload}
            />
          </label>
        )}
      </div>

      {/* Checkbox */}
      <div className="flex items-start mt-4">
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setFieldValue("gallery.confirmed", e.target.checked)}
          className="mt-1 w-4 h-4 border-gray-300 rounded"
        />
        <label className="ml-2 text-xs text-gray-600">
          I Confirm That These Materials Are Original, Created By Me Or My Team,
          And Do Not Violate Any Third-Party Rights. I Understand That
          Unauthorized Use Of Digital Assets Breaches Fiverr’s Terms And May
          Lead To Account Suspension.
        </label>
      </div>
      {errors.confirmed && (
        <p className="text-red-500 text-xs mt-1">{errors.confirmed}</p>
      )}

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

      {/* Popup */}
      {openPopup && (
        <div className="fixed inset-0 flex items-center backdrop-blur-sm justify-center z-50">
          <div className="absolute inset-0  opacity-50"></div>
          <div className="relative z-10">
            <MakeEasyPopup
              onClose={() => setOpenPopup(false)}
              uploadedImage={images[0]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryMedia;
