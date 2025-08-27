import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const FAQSection = ({ onCancel, onContinue, initialData, formikProps }) => {
  const { values, setFieldValue } = formikProps;
  const faqs = values.faq.faqs || [];

  const [showForm, setShowForm] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [errors, setErrors] = useState({ question: "", answer: "", global: "" });

  const validateInputs = () => {
    let valid = true;
    let newErrors = { question: "", answer: "", global: "" };

    if (!currentQuestion.trim()) {
      newErrors.question = "Question cannot be empty.";
      valid = false;
    } else if (currentQuestion.trim().length < 10) {
      newErrors.question = "Question must be at least 10 characters long.";
      valid = false;
    }

    if (!currentAnswer.trim()) {
      newErrors.answer = "Answer cannot be empty.";
      valid = false;
    } else if (currentAnswer.trim().length < 20) {
      newErrors.answer = "Answer must be at least 20 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const addFAQ = () => {
    if (!validateInputs()) return;

    const newFAQ = {
      question: currentQuestion.trim(),
      answer: currentAnswer.trim(),
    };

    const updatedFaqs = [...faqs, newFAQ];
    setFieldValue("faq.faqs", updatedFaqs);

    setCurrentQuestion("");
    setCurrentAnswer("");
    setShowForm(false);
    setErrors({ question: "", answer: "", global: "" });
  };

  const removeFAQ = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs.splice(index, 1);
    setFieldValue("faq.faqs", updatedFaqs);
  };

  const handleContinueClick = () => {
    if (faqs.length === 0) {
      setErrors({
        ...errors,
        global: "Please add at least one FAQ before continuing.",
      });
      return;
    }
    setErrors({ question: "", answer: "", global: "" });
    onContinue({ faqs });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm w-full">
      {/* Main Heading */}
      <h2 className="text-lg font-semibold text-gray-800">
        Frequently Asked Questions
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Build trust by answering common questions upfront – buyers get quick
        clarity, and you save time by avoiding repeated queries.
      </p>

      {/* Global Error */}
      {errors.global && (
        <div className="mt-3 text-red-500 text-sm font-medium">
          {errors.global}
        </div>
      )}

      {/* Existing FAQs */}
      {faqs.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Your FAQs:</h3>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-3 p-3 border rounded-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{faq.question}</p>
                  <p className="text-sm text-gray-600 mt-1">{faq.answer}</p>
                </div>
                <button
                  onClick={() => removeFAQ(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="mt-4 p-4 rounded-md">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Add Question & Answer for your Buyers
          </h3>

          {/* Question Input */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Add Question
            </label>
            <input
              type="text"
              placeholder="Example: Do you translate to English as well?"
              value={currentQuestion}
              onChange={(e) => {
                setCurrentQuestion(e.target.value);
                if (errors.question) setErrors({ ...errors, question: "" });
              }}
              className={`w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none ${
                errors.question
                  ? "border-red-500 focus:ring-red-300 focus:border-red-400"
                  : "border-gray-300 focus:ring-indigo-300 focus:border-indigo-400"
              }`}
            />
            {errors.question && (
              <p className="text-red-500 text-xs mt-1">{errors.question}</p>
            )}
          </div>

          {/* Answer Input */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Add an Answer
            </label>
            <input
              type="text"
              placeholder="Example: Yes, I also translate from English to Hebrew."
              value={currentAnswer}
              onChange={(e) => {
                setCurrentAnswer(e.target.value);
                if (errors.answer) setErrors({ ...errors, answer: "" });
              }}
              className={`w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none ${
                errors.answer
                  ? "border-red-500 focus:ring-red-300 focus:border-red-400"
                  : "border-gray-300 focus:ring-indigo-300 focus:border-indigo-400"
              }`}
            />
            {errors.answer && (
              <p className="text-red-500 text-xs mt-1">{errors.answer}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => {
                setShowForm(false);
                setErrors({ question: "", answer: "", global: "" });
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 text-sm"
            >
              Cancel
            </button>
            <button
              onClick={addFAQ}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 text-sm"
            >
              Add FAQ
            </button>
          </div>
        </div>
      )}

      {/* Add FAQ button */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center text-green-600 hover:text-green-700 mt-4 text-sm font-medium"
        >
          <FaPlus className="mr-1" />
          Add FAQ
        </button>
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
          onClick={handleContinueClick}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 text-sm"
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
