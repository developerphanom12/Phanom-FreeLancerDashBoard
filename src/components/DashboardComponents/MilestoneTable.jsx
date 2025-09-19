import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { HiEye, HiChat, HiShare } from 'react-icons/hi';

const MilestoneTable = () => {
  const milestones = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "PrimeEdge Solutions",
      location: "Mohali, Punjab, India",
      type: "Job",
      price: "₹410",
      dueDate: "Mar 12, 2024",
      status: "Doing",
      statusColor: "bg-[#EDEDFF] text-[#504CFE]"
    },
    {
      id: 2,
      title: "Senior DevOps Engineer", 
      company: "Bright Future",
      location: "Las Vegas, USA",
      type: "Job",
      price: "₹410",
      dueDate: "Mar 12, 2024", 
      status: "Submitted",
      statusColor: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 3,
      title: "Social Media Marketing",
      company: "GlobalTech Partners",
      location: "Las Vegas, USA",
      type: "Job",
      price: "₹410",
      dueDate: "Mar 12, 2024",
      status: "Approved", 
      statusColor: "bg-green-100 text-green-800"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto w-full">
      <div className="px-2 sm:px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-900">Active Milestone</h3>
      </div>
      <div>
        <table className="min-w-full w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pricing</th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {milestones.map((milestone) => (
              <tr key={milestone.id}>
                <td className="px-2 sm:px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{milestone.title}</div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="">{milestone.company}</span>
                      <span className="mx-2"><FaLocationDot/></span>
                      <span>{milestone.location}</span>
                    </div>
                  </div>
                </td>
                <td className="px-2 sm:px-6 py-4">
                  <span className="text-sm font-semibold text-gray-900">{milestone.type}</span>
                </td>
                <td className="px-2 sm:px-6 py-4">
                  <span className="text-sm font-medium text-gray-900">{milestone.price}</span>
                </td>
                <td className="px-2 sm:px-6 py-4 font-semibold text-sm text-gray-900">{milestone.dueDate}</td>
                <td className="px-2 sm:px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${milestone.statusColor}`}>
                    {milestone.status}
                  </span>
                </td>
                <td className="px-2 sm:px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <HiEye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <HiChat className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <HiShare className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MilestoneTable;
