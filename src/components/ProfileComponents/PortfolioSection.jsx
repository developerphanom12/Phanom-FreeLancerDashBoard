import React from 'react';

const PortfolioSection = () => {
    return (

        <div className='sm:px-4 '>
            <h1 className='text-2xl font-bold mb-4 mx-auto '>Portfolio</h1>
            <div className='w-full mx-auto pb-6 flex flex-col lg:flex-row gap-6 items-start '>

                {/* Left image */}
                <div className='w-full lg:w-[40%]'>
                    <img
                        src='https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29saXR1ZGV8ZW58MHx8MHx8fDA%3D' // replace with your own image
                        alt='Portfolio'
                        className='rounded-xl w-full object-cover'
                    />
                </div>

                {/* Right content */}
                <div className='w-full lg:w-[60%] flex flex-col gap-4'>

                    {/* Date */}
                    <p className='text-sm text-gray-500'>From: March 2025</p>

                    {/* Title */}
                    <h2 className='text-xl md:text-2xl font-semibold text-black'>
                        Multi cuisine Food Delivery App Development
                    </h2>

                    {/* Description */}
                    <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                        Creative and detail-oriented UI/UX designer passionate about crafting user-friendly and visually stunning digital experiences. Proficient in Figma, Adobe XD, and user research, I bring concepts to life through thoughtful design and intuitive interfaces. I design with empathy and purpose, ensuring every interaction is both meaningful and impactful. From wireframes to prototypes, I combine creativity with strategy to solve real user problems. Experienced in design systems, accessibility, and collaborative workflows, I thrive in fast-paced environments and love transforming complex ideas into clean, functional solutions.
                    </p>

                    {/* Tags */}
                    <div className='flex flex-wrap gap-2'>
                        {["Wireframing", "Prototyping", "UX Design", "Responsive", "Components", "JSX", "Routing", "APIs", "+4"].map((tag, i) => (
                            <span
                                key={i}
                                className='px-3 py-1 rounded-full border border-gray-200 shadow-lg text-sm text-gray-700 bg-white hover:bg-gray-100'
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Cost & Duration */}
                    <div className='flex flex-col sm:flex-row gap-6 mt-2 text-sm'>
                        <div>
                            <p className='text-gray-500'>Project cost</p>
                            <p className='font-medium text-black'>₹4000 - ₹5000</p>
                        </div>
                        <div>
                            <p className='text-gray-500'>Project duration</p>
                            <p className='font-medium text-black'>1–3 months</p>
                        </div>
                    </div>
                </div>

                {/* Project thumbnails */}
                <div className='hidden lg:flex w-[20%] flex-col gap-3 mt-2'>
                    <img
                        src='https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29saXR1ZGV8ZW58MHx8MHx8fDA%3D'
                        alt='Project 1'
                        className='w-full  rounded-md object-cover'
                    />
                    <img
                        src='https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29saXR1ZGV8ZW58MHx8MHx8fDA%3D'
                        alt='Project 2'
                        className='w-full  rounded-md object-cover'
                    />
                    <div className='w-full min-h-[100px] border border-gray-300 flex items-center justify-center text-sm rounded-md'>
                        +3 <br /> Projects
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
