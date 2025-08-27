import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const PendingApprovalTable = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState({});

  const gigsData = [
    {
      id: 1,
      title: "Build a scalable saas web application for accounting CR, or business automation",
      impressions: 0,
      clicks: 0,
      orders: 0,
      cancellations: "0%",
      image: "https://via.placeholder.com/80x60.png?text=Pending+Gig",
    },
  ];

  // Toggle all checkboxes
  const handleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    const updated = {};
    gigsData.forEach((gig) => (updated[gig.id] = newValue));
    setSelected(updated);
  };

  // Toggle individual checkbox
  const handleSelect = (id) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-4">Gigs Pending Approval</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-sm text-gray-500 ">
              <th className="px-4 py-2">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-4 py-2">Gig</th>
              <th className="px-4 py-2 text-center">Impressions</th>
              <th className="px-4 py-2 text-center">Clicks</th>
              <th className="px-4 py-2 text-center">Orders</th>
              <th className="px-4 py-2 text-center">Cancellations</th>
              <th className="px-4 py-2 text-center">-</th>
            </tr>
          </thead>
          <tbody>
            {gigsData.map((gig) => (
              <tr key={gig.id} className=" hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={!!selected[gig.id]}
                    onChange={() => handleSelect(gig.id)}
                  />
                </td>
                <td className="px-4 py-3 flex items-center space-x-3">
                  <img
                    src={gig.image}
                    alt="Gig"
                    className="w-16 h-12 rounded-md object-cover"
                  />
                  <span className="text-sm text-gray-700">{gig.title}</span>
                </td>
                <td className="px-4 py-3 text-sm text-center">{gig.impressions}</td>
                <td className="px-4 py-3 text-sm text-center">{gig.clicks}</td>
                <td className="px-4 py-3 text-sm text-center">{gig.orders}</td>
                <td className="px-4 py-3 text-sm text-center">{gig.cancellations}</td>
                <td className="px-4 py-3 text-center">
                  <button className="p-1 rounded hover:bg-gray-200">
                    <HiChevronDown className="w-5 h-5 text-gray-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom info link */}
      <div className="mt-3 text-right">
        <a
          href="#"
          className="text-sm text-blue-500 hover:underline"
        >
          What does your Gig status mean?
        </a>
      </div>
    </div>
  );
};

export default PendingApprovalTable;
