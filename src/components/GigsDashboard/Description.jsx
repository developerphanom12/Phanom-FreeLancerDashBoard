import React from "react";
import { useForm } from "react-hook-form";
import { 
  FaBold, FaItalic, FaUnderline, FaLink, FaAlignLeft, FaAlignCenter, 
  FaAlignRight, FaAlignJustify, FaCode, FaFont, FaStrikethrough 
} from "react-icons/fa";

const Description = ({ onCancel, onContinue, initialData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      description: initialData.description || "",
    },
  });

  const onSubmit = (data) => {
    onContinue(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-lg p-6 shadow-sm w-full"
    >
      {/* Heading */}
      <h2 className="text-lg font-semibold text-gray-800">Description</h2>
      <p className="text-sm text-gray-500 mt-1">
        Capture buyer interest by crafting a clear and compelling description –
        they’ll understand your service at a glance and feel confident in choosing you.
      </p>

      {/* Label */}
      <label className="block text-sm font-medium text-gray-700 mt-6 mb-2">
        Briefly Describe Your Gig
      </label>

      {/* Dark Toolbar */}
      <div className="border border-gray-300 rounded-t-md bg-gray-900 text-gray-200 px-3 py-2 flex items-center space-x-2 text-sm">
        {/* Dropdowns */}
        <select className="bg-gray-900 text-gray-200 border-none focus:ring-0">
          <option>Paragraph</option>
          <option>Heading 1</option>
          <option>Heading 2</option>
        </select>
        <select className="bg-gray-900 text-gray-200 border-none focus:ring-0">
          <option>Helvetica</option>
          <option>Arial</option>
          <option>Times New Roman</option>
        </select>
        <select className="bg-gray-900 text-gray-200 border-none focus:ring-0 w-14">
          <option>20</option>
          <option>18</option>
          <option>16</option>
          <option>14</option>
        </select>

        {/* Buttons */}
        <div className="flex items-center space-x-2 ml-3">
          <button type="button" className="p-1 hover:bg-gray-700 rounded"><FaFont size={16} /></button>
          <button type="button" className="p-1 hover:bg-gray-700 rounded"><FaBold size={16} /></button>
          <button type="button" className="p-1 hover:bg-gray-700 rounded"><FaItalic size={16} /></button>
          <button type="button" className="p-1 hover:bg-gray-700 rounded"><FaUnderline size={16} /></button>
          <button type="button" className="p-1 hover:bg-gray-700 rounded"><FaAlignLeft size={16} /></button>
          <button type="button" className="p-1 hover:bg-gray-700 rounded"><FaAlignCenter size={16} /></button>
          <button type="button" className="p-1 hover:bg-gray-700 rounded"><FaAlignRight size={16} /></button>
          <button type="button" className="p-1 hover:bg-gray-700 rounded"><FaAlignJustify size={16} /></button>
          <button type="button" className="p-1 hover:bg-gray-700 rounded"><FaLink size={16} /></button>
          <button type="button" className="p-1 hover:bg-gray-700 rounded"><FaCode size={16} /></button>
          <button type="button" className="p-1 hover:bg-gray-700 rounded"><FaStrikethrough size={16} /></button>
        </div>
      </div>

      {/* Textarea */}
      <textarea
        rows={8}
        placeholder="Enter your text here..."
        {...register("description", {
          required: "Description is required",
          minLength: { value: 30, message: "Description must be at least 30 characters" },
          maxLength: { value: 1200, message: "Description cannot exceed 1200 characters" },
        })}
        className={`w-full border-t-0 border rounded-b-md p-3 focus:outline-none focus:ring-2 ${
          errors.description ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-purple-500"
        }`}
      />

      {/* Error Message */}
      {errors.description && (
        <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
      )}

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
          type="submit"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 text-sm"
        >
          Save and Continue
        </button>
      </div>
    </form>
  );
};

export default Description;
