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
      image: "https://via.placeholder.com/80x60.png?text=Denied+Gig",
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

  // Toggle single gig selection
  const handleSelect = (id) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-4">Gigs Pending Approval</h2>

      {gigsData.length === 0 ? (
        <div className="text-center text-gray-500 py-6">
          No denied gigs available.
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-sm text-gray-500">
                  <th className="px-4 py-2">Gig</th>
                  <th className="px-4 py-2">Reason</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2 text-center">-</th>
                </tr>
              </thead>
              <tbody>
                {gigsData.map((gig) => (
                  <tr key={gig.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 flex items-center space-x-3">
                      <img
                        src={gig.image}
                        alt="Gig"
                        className="w-22 h-12 rounded-md object-cover"
                      />
                      <span className="text-sm text-gray-700">{gig.title}</span>
                    </td>
                    <td className="px-4 py-3 text-sm">{gig.reason}</td>
                    <td className="px-4 py-3 text-sm">{gig.date}</td>
                    <td className="px-4 py-3 text-center">
                      {/* Actions if any */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {gigsData.map((gig) => (
              <div
                key={gig.id}
                className="p-4 border rounded-lg shadow-sm bg-white flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={gig.image}
                    alt="Gig"
                    className="w-16 h-10 rounded-md object-cover"
                  />
                  <span className="text-sm font-medium">{gig.title}</span>
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs text-gray-600">
                  <span>Reason: {gig.reason}</span>
                  <span>Date: {gig.date}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Info link */}
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
