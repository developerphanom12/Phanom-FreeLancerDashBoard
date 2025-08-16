import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaStar, FaHeart } from 'react-icons/fa';

const MyGigs = () => {
  // Sample data for talent cards
const talentData = [ 
  {
    id: 1,
    description: 'UI/UX designer creating intuitive, user-first designs with Figma, Adobe XD, and user research. Focused on clean visuals, usability, and impactful solutions.',
    rating: 4.8,
    reviews: '(1k+)',
    price: '₹ 3,999',
    duration: '2 min',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww'
  },
  {
    id: 2,
    description: 'UI/UX designer creating intuitive, user-first designs with Figma, Adobe XD, and user research. Focused on clean visuals, usability, and impactful solutions.',
    price: '₹ 5,499',
    rating: 4.8,
    reviews: '(1k+)',
    duration: '3 min',
    image: 'https://www.denverheadshotco.com/wp-content/uploads/2023/05/Denver-Headshot-Co-0013-SMALL.jpg'
  },
  {
    id: 3,
    description: 'UI/UX designer creating intuitive, user-first designs with Figma, Adobe XD, and user research. Focused on clean visuals, usability, and impactful solutions.',
    price: '₹ 2,999',
     rating: 4.8,
    reviews: '(1k+)',
    duration: '1 min',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg'
  },
  {
    id: 4,
    description: 'UI/UX designer creating intuitive, user-first designs with Figma, Adobe XD, and user research. Focused on clean visuals, usability, and impactful solutions.',
    price: '₹ 3,200',
     rating: 4.8,
    reviews: '(1k+)',
    duration: '45 sec',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8y50Dr30jBvouA8SN75ulmi80w3aI-Ssgw&s'
  },
  {
    id: 5,
    description: 'UI/UX designer creating intuitive, user-first designs with Figma, Adobe XD, and user research. Focused on clean visuals, usability, and impactful solutions.',
    price: '₹ 6,000',
     rating: 4.8,
    reviews: '(1k+)',
    duration: '3 min',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww'
  },
  {
    id: 6,
    description: 'UI/UX designer creating intuitive, user-first designs with Figma, Adobe XD, and user research. Focused on clean visuals, usability, and impactful solutions.',
    price: '₹ 4,850',
     rating: 4.8,
    reviews: '(1k+)',
    duration: '1.5 min',
    image: 'https://www.denverheadshotco.com/wp-content/uploads/2023/05/Denver-Headshot-Co-0013-SMALL.jpg'
  },
  {
    id: 7,
    description: 'UI/UX designer creating intuitive, user-first designs with Figma, Adobe XD, and user research. Focused on clean visuals, usability, and impactful solutions.',
    price: '₹ 5,000',
     rating: 4.8,
    reviews: '(1k+)',
    duration: '2 min',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg'
  },
  {
    id: 8,
    description: 'UI/UX designer creating intuitive, user-first designs with Figma, Adobe XD, and user research. Focused on clean visuals, usability, and impactful solutions.',
    price: '₹ 4,200',
     rating: 4.8,
    reviews: '(1k+)',
    duration: '1 min',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8y50Dr30jBvouA8SN75ulmi80w3aI-Ssgw&s'
  },
  {
    id: 9,
    description: 'UI/UX designer creating intuitive, user-first designs with Figma, Adobe XD, and user research. Focused on clean visuals, usability, and impactful solutions.',
    price: '₹ 6,500',
     rating: 4.8,
    reviews: '(1k+)',
    duration: '3.5 min',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww'
  },
  {
    id: 10,
    description: 'UI/UX designer creating intuitive, user-first designs with Figma, Adobe XD, and user research. Focused on clean visuals, usability, and impactful solutions.',
    price: '₹ 3,750',
     rating: 4.8,
    reviews: '(1k+)',
    duration: '40 sec',
    image: 'https://www.denverheadshotco.com/wp-content/uploads/2023/05/Denver-Headshot-Co-0013-SMALL.jpg'
  },
  {
    id: 11,
    description: 'UI/UX designer creating intuitive, user-first designs with Figma, Adobe XD, and user research. Focused on clean visuals, usability, and impactful solutions.',
    price: '₹ 4,500',
     rating: 4.8,
    reviews: '(1k+)',
    duration: '2 min',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg'
  },
  {
    id: 12,
    description: 'UI/UX designer creating intuitive, user-first designs with Figma, Adobe XD, and user research. Focused on clean visuals, usability, and impactful solutions.',
    price: '₹ 5,900',
     rating: 4.8,
    reviews: '(1k+)',
    duration: '1.5 min',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8y50Dr30jBvouA8SN75ulmi80w3aI-Ssgw&s'
  }
];

  return (
    <section className=" my-10">
      <div className=" mx-auto ">
         <h2 className="text-2xl font-bold mb-3">My Gigs</h2>
        {/* Talent cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {talentData.map((talent) => (
            <div key={talent.id} className=" overflow-hidden  transition-shadow duration-300">
              <div className="relative ">
                <img
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-44 object-cover rounded-lg "
                />
                <button className="absolute top-3 right-3 text-white hover:text-red-500 transition-colors duration-300">
                  <CiHeart className="text-2xl" />
                </button>
              </div>
              <div className="p-4">
                {/* <h3 className="font-medium text-lg">{talent.name}</h3> */}
                <p className="text-gray-600 text-sm mb-2">{talent.description}</p>
                <div className="flex items-center mb-2 text-sm">
                  <FaStar className="text-black mr-1" />
                  <span className="font-normal">{talent.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">{talent.reviews}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">From {talent.price}</span>
                    <span className="text-gray-500 text-sm ml-1">/ {talent.duration}</span>
                  </div>
                </div>
                {/* <button className="mt-3 w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 px-4 rounded-full hover:from-purple-600 hover:to-purple-700 transition-colors duration-300">
                  Hire Talent
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyGigs;