import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const ActiveGigsTable = ({ gigsData }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  // Toggle individual checkbox
  const toggleCheckbox = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Toggle all checkboxes
  const toggleAll = () => {
    if (selectedIds.length === gigsData.length) {
      setSelectedIds([]); // uncheck all
    } else {
      setSelectedIds(gigsData.map((gig) => gig.id)); // check all
    }
  };

  const isAllSelected = gigsData.length > 0 && selectedIds.length === gigsData.length;

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-4">Active Gigs</h2>

      {gigsData.length === 0 ? (
        <div className="text-center text-gray-500 py-6">
          No active gigs available.  
          <br />
          <span className="text-sm">Click "Create a New Gig" to get started.</span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-sm text-gray-500">
                <th className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={toggleAll}
                  />
                </th>
                <th className="px-4 py-2">Gig</th>
                <th className="px-4 py-2">Impressions</th>
                <th className="px-4 py-2">Clicks</th>
                <th className="px-4 py-2">Orders</th>
                <th className="px-4 py-2">Cancellations</th>
                <th className="px-4 py-2 text-center">-</th>
              </tr>
            </thead>
            <tbody>
              {gigsData.map((gig) => (
                <tr key={gig.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(gig.id)}
                      onChange={() => toggleCheckbox(gig.id)}
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
                  <td className="px-4 py-3 text-sm">{gig.impressions}</td>
                  <td className="px-4 py-3 text-sm">{gig.clicks}</td>
                  <td className="px-4 py-3 text-sm">{gig.orders}</td>
                  <td className="px-4 py-3 text-sm">{gig.cancellations}</td>
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
      )}
    </div>
  );
};

export default ActiveGigsTable;
