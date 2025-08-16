import React, { useState } from 'react';
import { FaAngleRight, FaHeart, FaEye, FaUpload, FaMapMarkerAlt, FaLanguage, FaPlusCircle, FaEdit, FaStar, FaThumbsUp } from 'react-icons/fa';
import { RiContactsLine } from "react-icons/ri";
import { TbCurrentLocation } from "react-icons/tb";
import { IoIosTime } from "react-icons/io";
import { CiLink } from "react-icons/ci";


const Banner = () => {
    const [bannerImage, setBannerImage] = useState(null);

    // Projects data
    const projects = [
        {
            id: 1,
            title: 'UI/UX design creating intuitive, user-first designs and Figma layouts for web and mobile applications.',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
            likes: 1.1,
            views: 473,
            orders: 4.6,
            price: 'From ₹ 4,999 /-'
        },
        {
            id: 2,
            title: 'UI/UX design creating intuitive, user-first designs and Figma layouts for web and mobile applications.',
            image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400',
            likes: 1.1,
            views: 473,
            orders: 4.6,
            price: 'From ₹ 4,999 /-'
        },
        {
            id: 3,
            title: 'UI/UX design creating intuitive, user-first designs and Figma layouts for web and mobile applications.',
            image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400',
            likes: 1.1,
            views: 473,
            orders: 4.6,
            price: 'From ₹ 4,999 /-'
        }
    ];

    const myGigs = [
        {
            id: 1,
            title: 'UI/UX design creating intuitive, user-first designs and Figma layouts for web and mobile applications.',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
            likes: 1.1,
            views: 473,
            orders: 4.6,
            price: 'From ₹ 4,999 /-'
        },
        {
            id: 2,
            title: 'UI/UX design creating intuitive, user-first designs and Figma layouts for web and mobile applications.',
            image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400',
            likes: 1.1,
            views: 473,
            orders: 4.6,
            price: 'From ₹ 4,999 /-'
        },
        {
            id: 3,
            title: 'UI/UX design creating intuitive, user-first designs and Figma layouts for web and mobile applications.',
            image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400',
            likes: 1.1,
            views: 473,
            orders: 4.6,
            price: 'From ₹ 4,999 /-'
        }
    ];

    const handleBannerUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setBannerImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='min-h-screen p-6'>
            {/* Gradient Header */}

            {/* Main Content */}
            <div className=' pb-8'>
                <div className=' rounded-lg  '>
                    {/* Banner Section */}
                    <div className='relative h-48 md:h-64 bg-gray-400'>
                        {bannerImage ? (
                            <img src={bannerImage} alt="Banner" className='w-full h-full object-cover' />
                        ) : (
                            <div className='flex flex-col items-center justify-center h-full text-white'>
                                <FaUpload className='text-3xl mb-2' />
                                <p className='font-medium'>Add a banner image</p>
                                <p className='text-sm'>Optimal dimensions 1200 x 400px</p>
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleBannerUpload}
                            className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                        />
                    </div>

                    {/* Profile Section */}
                    <div className=' sm:px-5 '>
                        <div className='flex flex-col md:flex-row gap-6'>
                            {/* Left - Profile Info */}
                            <div className='md:w-1/3'>
                                <div className='flex flex-col items-center md:items-start md:w-[80%]'>
                                    <img
                                        src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8fDA%3D"
                                        alt="Profile"
                                        className='w-32 h-32 rounded-full object-cover mb-4 -mt-24 border-4 border-white shadow-lg z-20'
                                    />

                                    <div className='text-center md:text-left mb-4'>
                                        <div className='flex items-center gap-2 mb-1'>
                                            <span className='bg-gradient-to-r from-[#4899E1] via-[#984EE8] to-[#D019E4] bg-clip-text text-transparent font-semibold'>
                                                Phanom Verified
                                            </span>
                                        </div>
                                        <h2 className='text-xl font-bold'>Sonali Singh<span className='text-gray-400 text-sm ml-4'>@sonalisingh</span></h2>
                                        <p className='text-purple-600 font-medium'>UI/UX Designer & Frontend Developer</p>
                                    </div>

                                    <div className='w-full space-y-2 text-sm text-gray-600 mb-4'>
                                        <p className='flex gap-2'>< RiContactsLine /> Web Design, Mobile UI, Figma Prototypes</p>
                                        <p className='flex gap-2'>< TbCurrentLocation /> Mobile, Punjab, India</p>
                                        <p className='flex gap-2'>< IoIosTime />  Mon - Fri | 10:00 AM to 6:00 PM</p>
                                        <p className='flex gap-2'>< CiLink />  www.phanomprofessionals.com</p>
                                    </div>

                                    <div className='w-full space-y-2 mb-6'>
                                        <button className='w-full bg-purple-600 text-white py-2 px-4 hover:bg-purple-700 transition-colors rounded-full flex justify-center items-center gap-3'>
                                            <FaEdit />Edit Profile Info
                                        </button>
                                        <button className='w-full bg-purple-600 text-white py-2 px-4 hover:bg-purple-700 transition-colors rounded-full flex justify-center items-center gap-3'>
                                            <FaUpload /> Upload Your Work
                                        </button>
                                    </div>

                                    {/* My Gigs Section */}
                                    <div className='mt-8'>
                                        <h2 className='text-2xl font-bold mb-6'>My Gigs</h2>
                                        <div className='grid grid-cols-1  gap-6'>
                                            {myGigs.map((gig) => (
                                                <div key={gig.id} className='overflow-hidden transition-shadow'>
                                                    <div className='relative'>
                                                        <img
                                                            src={gig.image}
                                                            alt={gig.title}
                                                            className='w-full h-48 object-cover  rounded-lg '
                                                        />
                                                        {/* <button className='absolute top-3 right-3 text-white hover:text-red-500 transition-colors'>
                                                            <FaHeart />
                                                        </button> */}
                                                    </div>

                                                    <div className='py-4'>
                                                        <p className='text-sm text-gray-700 mb-3 line-clamp-3'>{gig.title}</p>

                                                        {/* <div className='flex items-center justify-between text-xs text-gray-600 mb-3'>
                                                            <div className='flex items-center gap-3'>
                                                                <span className='flex items-center gap-1'>
                                                                    <FaHeart className='text-red-500' />
                                                                    {gig.likes}k
                                                                </span>
                                                                <span className='flex items-center gap-1'>
                                                                    <FaEye />
                                                                    {gig.views}
                                                                </span>
                                                                <span>⭐ {gig.orders}</span>
                                                            </div>
                                                        </div> */}

                                                        <p className='text-sm font-medium text-gray-800'>{gig.price}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right - About Section */}
                            <div className='md:w-2/3'>
                                <h2 className='text-2xl font-bold mb-6 text-purple-600 border-b-2 border-purple-600 w-fit px-6 p-2'>Work</h2>
                                <div className='bg-gray-100 rounded-lg p-6 h-48 flex items-center justify-center text-gray-500'>
                                    About section content goes here
                                </div>
                                <div className='mt-8'>
                                    <h2 className='text-2xl font-bold mb-6'>Projects</h2>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                        {projects.map((project) => (
                                            <div key={project.id} className=' overflow-hidden  rounded-lg'>
                                                <div className='relative'>
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className='w-full h-48 object-cover rounded-lg'
                                                    />
                                                    {/* <button className='absolute top-3 right-3 text-white hover:text-red-500 transition-colors'>
                    <FaHeart />
                  </button> */}
                                                </div>

                                                <div className='p-4'>

                                                    <div className='flex items-center justify-end text-xs text-gray-600 mb-3'>
                                                        <div className='flex items-center gap-3'>
                                                            <span className='flex items-center gap-1'>
                                                                <FaThumbsUp className='text-black' />
                                                                {project.likes}k
                                                            </span>
                                                            <span className='flex items-center gap-1 text-black'>
                                                                <FaEye />
                                                                {project.views}
                                                            </span>
                                                            <span className='flex gap-2 justify-center'><FaStar className='text-black ' /> {project.orders}{"(1k+)"}</span>
                                                        </div>
                                                    </div>
                                                    <p className='text-sm text-gray-700 mb-3 line-clamp-3'>{project.title}</p>

                                                    <p className='text-sm font-medium text-gray-800'>{project.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                        {/* <div  className='border-dashed border-black overflow-hidden hover:shadow-lg rounded-lg'>
                                                
                                                <div className='w-12 h-12 flex bg-violet-400 justify-center items-center rounded-full'>
                                                         < FaPlusCircle className='text-white'/>
                                                </div>
                                        </div> */}
                                        <div className='h-72 border-dashed border-2 border-[#D3BDF3] p-4 overflow-hidden hover:shadow-lg rounded-lg flex flex-col justify-between items-center gap-4 text-center'>
                                            <div className='w-18 h-18 flex bg-[#D3BDF3] justify-center items-center rounded-full'>
                                                <FaPlusCircle className='text-white text-xl' />
                                            </div>
                                            <h3 className='font-semibold border border-[#D3BDF3]  text-[#D3BDF3] rounded-full w-full py-1'>Create a Project</h3>
                                            <p className='text-sm text-gray-600'>
                                                Get feedback, views, and appreciations. Public projects can be featured by our curators.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Section */}



            </div>
        </div>
    );
};

export default Banner;
