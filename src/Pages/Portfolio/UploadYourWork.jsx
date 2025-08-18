import React, { useState, useRef } from 'react'
import { BiText } from 'react-icons/bi'
import { CiGrid42 } from 'react-icons/ci'
import { FaImage, FaTimes, FaPlus } from 'react-icons/fa'
import JoditEditor from 'jodit-react'

const UploadYourWork = () => {
    const [activeMode, setActiveMode] = useState(null) // 'image', 'text', 'grid'
    const [uploadedImages, setUploadedImages] = useState([])
    const [gridImages, setGridImages] = useState([])
    const [textContent, setTextContent] = useState('')
    const fileInputRef = useRef(null)
    const gridFileInputRef = useRef(null)

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files)
        files.forEach(file => {
            const reader = new FileReader()
            reader.onload = (e) => {
                setUploadedImages(prev => [...prev, {
                    id: Date.now() + Math.random(),
                    src: e.target.result,
                    name: file.name
                }])
            }
            reader.readAsDataURL(file)
        })
    }

    const handleGridImageUpload = (event) => {
        const files = Array.from(event.target.files)
        files.forEach(file => {
            const reader = new FileReader()
            reader.onload = (e) => {
                setGridImages(prev => [...prev, {
                    id: Date.now() + Math.random(),
                    src: e.target.result,
                    name: file.name
                }])
            }
            reader.readAsDataURL(file)
        })
    }

    const removeImage = (id, isGrid = false) => {
        if (isGrid) {
            setGridImages(prev => prev.filter(img => img.id !== id))
        } else {
            setUploadedImages(prev => prev.filter(img => img.id !== id))
        }
    }

    const handleModeSelect = (mode) => {
        setActiveMode(mode)
        if (mode === 'image') {
            fileInputRef.current?.click()
        }
    }

    const resetToInitial = () => {
        setActiveMode(null)
        setUploadedImages([])
        setGridImages([])
        setTextContent('')
    }

    return (
        <div className='p-6'>
            {/* Header */}
            <div className='flex justify-between mb-3'>
                <h1 className="text-2xl font-bold text-gray-900">Upload Your Work</h1>
                {activeMode && (
                    <button
                        onClick={resetToInitial}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                        Back to Start
                    </button>
                )}
            </div>

            {/* Hidden file inputs */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                multiple
                className="hidden"
            />
            <input
                type="file"
                ref={gridFileInputRef}
                onChange={handleGridImageUpload}
                accept="image/*"
                multiple
                className="hidden"
            />

            {/* Initial Mode Selection */}
            {!activeMode && (
                <div className='w-full flex flex-col justify-center items-center min-h-[500px]'>
                    <h4 className='text-[#888888] text-2xl font-normal mb-6'>Start Building Your Project</h4>
                    <div className='flex gap-10'>
                        <div
                            className='flex flex-col gap-2 items-center cursor-pointer hover:scale-105 transition-transform'
                            onClick={() => handleModeSelect('image')}
                        >
                            <div className='bg-[#8E59E2] w-14 h-14 rounded-full flex justify-center items-center'>
                                <FaImage className='text-white'/>
                            </div>
                            <p className='text-purple-500'>Image</p>
                        </div>
                        <div
                            className='flex flex-col gap-2 items-center cursor-pointer hover:scale-105 transition-transform'
                            onClick={() => handleModeSelect('text')}
                        >
                            <div className='bg-[#8E59E2] w-14 h-14 rounded-full flex justify-center items-center'>
                                <BiText className='text-white'/>
                            </div>
                            <p className='text-purple-500'>Text</p>
                        </div>
                        <div
                            className='flex flex-col gap-2 items-center cursor-pointer hover:scale-105 transition-transform'
                            onClick={() => handleModeSelect('grid')}
                        >
                            <div className='bg-[#8E59E2] w-14 h-14 rounded-full flex justify-center items-center'>
                                <CiGrid42 className='text-white'/>
                            </div>
                            <p className='text-purple-500'>Photo Grid</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Image Upload Mode */}
            {activeMode === 'image' && (
                <div className='space-y-6'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-xl font-semibold'>Upload Images</h3>
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="bg-[#8E59E2] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                        >
                            <FaPlus /> Add More Images
                        </button>
                    </div>

                    {uploadedImages.length === 0 ? (
                        <div className='border-2 border-dashed border-gray-300 rounded-lg p-12 text-center'>
                            <FaImage className='mx-auto text-4xl text-gray-400 mb-4' />
                            <p className='text-gray-500'>No images uploaded yet. Click "Add More Images" to start.</p>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {uploadedImages.map((image) => (
                                <div key={image.id} className='relative group'>
                                    <img
                                        src={image.src}
                                        alt={image.name}
                                        className='w-full h-48 object-cover rounded-lg'
                                    />
                                    <button
                                        onClick={() => removeImage(image.id)}
                                        className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity'
                                    >
                                        <FaTimes />
                                    </button>
                                    <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg'>
                                        <p className='text-sm truncate'>{image.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Text Editor Mode */}
            {activeMode === 'text' && (
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold'>Text Editor</h3>
                    <div className='bg-white rounded-lg '>
                        <JoditEditor
                            value={textContent}
                            // onChange={newContent => setTextContent(newContent)}
                            config={{
                                readonly: false,
                                height: 400,
                                toolbar: true,
                                spellcheck: true,
                                language: 'en',
                                toolbarButtonSize: 'medium',
                                theme: 'default',
                                placeholder: 'Start typing your content here...'
                            }}
                        />
                    </div>
                    {textContent && (
                        <div className='mt-4'>
                            <h4 className='text-lg font-semibold mb-2'>Preview:</h4>
                            <div
                                className='bg-gray-50 p-4 rounded-lg border'
                                dangerouslySetInnerHTML={{ __html: textContent }}
                            />
                        </div>
                    )}
                </div>
            )}

            {/* Photo Grid Mode */}
            {activeMode === 'grid' && (
                <div className='space-y-6'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-xl font-semibold'>Photo Grid</h3>
                        <button
                            onClick={() => gridFileInputRef.current?.click()}
                            className="bg-[#8E59E2] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                        >
                            <FaPlus /> Add Images to Grid
                        </button>
                    </div>

                    {gridImages.length === 0 ? (
                        <div className='border-2 border-dashed border-gray-300 rounded-lg p-12 text-center'>
                            <CiGrid42 className='mx-auto text-4xl text-gray-400 mb-4' />
                            <p className='text-gray-500'>No images in grid yet. Click "Add Images to Grid" to start.</p>
                        </div>
                    ) : (
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                            {gridImages.map((image) => (
                                <div key={image.id} className='relative group aspect-square'>
                                    <img
                                        src={image.src}
                                        alt={image.name}
                                        className='w-full h-full object-cover rounded-lg'
                                    />
                                    <button
                                        onClick={() => removeImage(image.id, true)}
                                        className='absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity'
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default UploadYourWork
