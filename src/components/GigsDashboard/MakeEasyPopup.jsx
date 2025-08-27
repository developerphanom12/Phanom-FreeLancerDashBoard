import { useState, useEffect } from "react";
import { FaRegImage } from "react-icons/fa";

export default function MakeEasyPopup({ onClose, uploadedImage }) {
  const logoOptions = ["Monogram", "Abstract", "Minimal", "Vintage"];
  const tagOptions = ["3d Logo", "Flat Logo", "Minimal", "Retro", "Modern"];

  const [logoType, setLogoType] = useState([]);
  const [customTags, setCustomTags] = useState([]);
  const [savedImage, setSavedImage] = useState(null);
  const [showLogoDropdown, setShowLogoDropdown] = useState(false);
  const [showTagDropdown, setShowTagDropdown] = useState(false);

  // Load saved data from localStorage
  useEffect(() => {
    const savedLogo = JSON.parse(localStorage.getItem("logoType")) || [];
    const savedTags = JSON.parse(localStorage.getItem("customTags")) || [];
    const savedImg = localStorage.getItem("uploadedImage") || null;

    setLogoType(savedLogo);
    setCustomTags(savedTags);
    setSavedImage(savedImg);
  }, []);

  // Save to localStorage whenever changes happen
  useEffect(() => {
    localStorage.setItem("logoType", JSON.stringify(logoType));
    localStorage.setItem("customTags", JSON.stringify(customTags));

    if (uploadedImage) {
      localStorage.setItem("uploadedImage", uploadedImage);
      setSavedImage(uploadedImage);
    }
  }, [logoType, customTags, uploadedImage]);

  const handleLogoSelect = (option) => {
    if (logoType.length === 0) {
      setLogoType([option]);
      setShowLogoDropdown(false);
    }
  };

  const handleTagSelect = (option) => {
    if (customTags.length < 3 && !customTags.includes(option)) {
      setCustomTags([...customTags, option]);
    }
  };

  const removeLogo = () => setLogoType([]);
  const removeTag = (tag) =>
    setCustomTags(customTags.filter((t) => t !== tag));

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[700px] p-8 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900">
          Make Your Work Easy To Find
        </h2>
        <p className="text-gray-500 mt-1 text-sm">
          Describe every detail to improve search visibility and attract more views.
        </p>

        {/* Upload Section */}
        <div className="mt-6 w-48 h-40 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer overflow-hidden">
          {(uploadedImage || savedImage) ? (
            <img
              src={uploadedImage || savedImage}
              alt="Uploaded Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <FaRegImage className="text-3xl text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Drag & Drop A Photo Or</p>
              <span className="text-indigo-600 text-sm font-medium cursor-pointer">
                Browse
              </span>
            </>
          )}
        </div>

        {/* Dropdown: Logo Type */}
        <div className="mt-8 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Logo type (up to 1)
          </label>
          <div
            className="border rounded-xl px-3 py-2 flex items-center justify-between cursor-pointer"
            onClick={() => setShowLogoDropdown(!showLogoDropdown)}
          >
            <div className="flex gap-2 flex-wrap">
              {logoType.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 px-2 py-1 rounded-md text-sm text-gray-700 flex items-center gap-1"
                >
                  {item} <button onClick={removeLogo}>✕</button>
                </span>
              ))}
            </div>
            <span className="text-gray-500">⌄</span>
          </div>

          {showLogoDropdown && (
            <div className="absolute mt-2 bg-white border rounded-lg shadow w-full z-10">
              {logoOptions.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => handleLogoSelect(option)}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dropdown: Custom Tags */}
        <div className="mt-8 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Custom tags (up to 3)
          </label>
          <div
            className="border rounded-xl px-3 py-2 flex items-center justify-between cursor-pointer"
            onClick={() => setShowTagDropdown(!showTagDropdown)}
          >
            <div className="flex gap-2 flex-wrap">
              {customTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 px-2 py-1 rounded-md text-sm text-gray-700 flex items-center gap-1"
                >
                  {tag}{" "}
                  <button onClick={() => removeTag(tag)} className="ml-1">
                    ✕
                  </button>
                </span>
              ))}
            </div>
            <span className="text-gray-500">⌄</span>
          </div>

          {showTagDropdown && (
            <div className="absolute mt-2 bg-white border rounded-lg shadow w-full z-10 max-h-40 overflow-y-auto">
              {tagOptions.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => handleTagSelect(option)}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 border rounded-lg text-sm bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => onClose()}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
