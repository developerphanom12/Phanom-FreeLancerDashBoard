import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

const SellWorkForm = () => {
    const [thumbnails, setThumbnails] = useState([]);
    const navigate = useNavigate()

    const handleThumbnailUpload = (event) => {
        const files = Array.from(event.target.files);
        const newThumbs = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));
        setThumbnails((prev) => [...prev, ...newThumbs]);
    };

    const removeThumbnail = (index) => {
        setThumbnails((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="p-6">
             {/* Header */}
            <div className='flex justify-between mb-5'>
                <h1 className="text-2xl font-bold text-gray-900">Sell Your Work</h1>

                    <div className="flex gap-4">
                        <button
                            onClick={()=>navigate(-1)}
                            type="button"
                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white shadow-md hover:bg-gray-100"
                        >
                            cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm text-white rounded-lg bg-gradient-to-r from-[#459CE1] to-[#D11AE7] hover:opacity-90"
                        >
                            Sell & Upload
                        </button>
                    </div>
                
            </div>

        <Formik
            initialValues={{
                zipFile: null,
                projectType: "",
                imageType: "",
                description: "",
                rate: "",
                tags: [],
            }}
            onSubmit={(values) => {
                console.log("Form Values:", values, thumbnails);
            }}
        >
            {() => (
                <Form className=" mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
                    <div>
                        <h2 className="text-black text-xl font-medium">Upload & Sell Your Project</h2>
                        <p className="text-gray-400">Upload your project files and write a clear description with screenshots and details, so buyers understand exactly what they’re getting. Once published, your project will be live for purchase and accessible to users worldwide.</p>
                    </div>
                    {/* Upload ZIP File */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Upload ZIP File
                        </label>
                        <input
                            type="file"
                            name="zipFile"
                            onChange={(e) => setFieldValue("zipFile", e.target.files[0])}
                            className="w-full border border-gray-400 text-gray-600 rounded-lg px-3 py-2"
                        />
                        <ErrorMessage
                            name="zipFile"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    {/* Project Type */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Project Type</label>
                        <Field
                            as="select"
                            name="projectType"
                            className="w-full border border-gray-400 text-gray-600 rounded-lg p-2"
                        >
                            <option value="">Select Project Type</option>
                            <option value="design">Design</option>
                            <option value="development">Development</option>
                        </Field>
                    </div>

                    {/* Image Type */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Image Type</label>
                        <Field
                            as="select"
                            name="imageType"
                            className="w-full border border-gray-400 text-gray-600 rounded-lg p-2"
                        >
                            <option value="">Select Image Type</option>
                            <option value="png">PNG</option>
                            <option value="jpg">JPG</option>
                        </Field>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <Field
                            as="textarea"
                            name="description"
                            className="w-full border border-gray-400 text-gray-600 rounded-lg p-2"
                            placeholder="Enter Description"
                        />
                    </div>

                    {/* Rate */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Rate</label>
                        <Field
                            type="text"
                            name="rate"
                            className="w-full border border-gray-400 text-gray-600 rounded-lg p-2"
                            placeholder="Enter Rate"
                        />
                    </div>

                    {/* Thumbnail Upload */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Thumbnail</label>
                        <div className="border border-gray-400 text-gray-600 border-dashed rounded-lg p-6 text-center cursor-pointer">
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleThumbnailUpload}
                                className="hidden"
                                id="thumbnailUpload"
                            />
                            <label htmlFor="thumbnailUpload" className="cursor-pointer">
                                <p className="text-gray-500">Drag & Drop a photo or</p>
                                <span className="text-blue-600">Browse</span>
                            </label>
                        </div>

                        {/* Previews */}
                        <div className="flex gap-4 mt-4 flex-wrap">
                            {thumbnails.map((thumb, index) => (
                                <div key={index} className="relative w-32 h-32">
                                    <img
                                        src={thumb.preview}
                                        alt="thumbnail"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeThumbnail(index)}
                                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit */}
                    {/* <button
                        type="submit"
                        className="w-full py-2 text-white rounded-lg bg-gradient-to-r from-[#459CE1] to-[#D11AE7]"
                    >
                        Sell & Upload
                    </button> */}
                    <div>
                        <h4>Postive Keywords</h4>
                        <p className="text-gray-500"> Highlight your project with strong, positive keywords that make it easy for buyers to find and trust your work.</p>
                        <Field
                            name="tag"
                            type="text"
                            className="w-full border border-gray-400 text-gray-600 rounded-lg p-2 my-2"
                            placeholder="tags"
                        />
                        <p className="text-gray-600">5 tags maximum. Use letters and numbers only.</p>
                    </div>
                </Form>
            )}
        </Formik>
        </div>
    );
};

export default SellWorkForm;
