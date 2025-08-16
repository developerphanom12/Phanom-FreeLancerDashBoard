import upload from '../../assets/upload.svg';

const Supports = () => {
    return (
        <div className="p-5">
            <h2 className="text-[30px] font-medium leading-[42px] capitalize font-[Poppins] mt-0">
                Supports
            </h2>

            <div className="bg-white rounded-lg p-5 shadow-md mt-4">
                <h3 className="text-[24px] font-medium leading-[30px] capitalize font-[Poppins] mb-3">
                    Customer Support
                </h3>
                <p className="text-[16px] text-[#6F6F6F] font-[Poppins] mb-2 leading-6">
                    Deliver Seamless Assistance And Improve User Experience.
                </p>

                <form className="flex flex-col gap-5 mt-6">
                    {/* Row 1 */}
                    <div className="flex flex-wrap gap-6">
                        <div className="flex flex-col flex-1">
                            <label htmlFor="name" className="text-[16px] font-[Poppins] mb-1">
                                Name <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="p-3 border border-gray-300 rounded-lg text-sm"
                            />
                        </div>

                        <div className="flex flex-col flex-1">
                            <label htmlFor="subject" className="text-[16px] font-[Poppins] mb-1">
                                Subject <span className="text-red-500 ml-1">*</span>
                            </label>
                            <textarea
                                id="subject"
                                placeholder="Write Description..."
                                className="p-3 border border-gray-300 rounded-lg text-sm min-h-[50px]"
                            />
                        </div>
                    </div>

                    {/* Upload Section */}
                    <div className="flex flex-col w-1/2">
                        <label className="text-[16px] font-[Poppins] mb-1">
                            Upload Attachment <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative border border-gray-300 rounded-md px-4 py-3 bg-white text-sm text-gray-500 flex items-center justify-between cursor-pointer">
                            <span>Upload File</span>
                            <img src={upload} alt="Upload Icon" className="w-5 h-5" />
                            <input
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button
                            type="button"
                            className="px-4 py-2 border border-[#8F8F8F] rounded-lg text-sm bg-white shadow-md hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm text-white rounded-lg bg-gradient-to-r from-[#7b2ff7] to-[#f107a3] hover:opacity-90"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Supports;
