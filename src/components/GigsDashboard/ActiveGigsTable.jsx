import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const ActiveGigsTable = ({ gigsData , tableType }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleCheckbox = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const toggleAll = () => {
    if (selectedIds.length === gigsData.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(gigsData.map((gig) => gig.id));
    }
  };

  const isAllSelected = gigsData.length > 0 && selectedIds.length === gigsData.length;

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4">{tableType}</h2>

        {gigsData.length === 0 ? (
          <div className="text-center text-gray-500 py-6">
            No {tableType} available.  
            <br />
            <span className="text-sm">Click "Create a New Gig" to get started.</span>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-sm text-gray-500">
                    <th className="px-4 py-2">
                      <input type="checkbox" checked={isAllSelected} onChange={toggleAll} />
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
                          className="w-22 h-12 rounded-md object-cover"
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

            {/* Mobile Cards */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {gigsData.map((gig) => (
                <div
                  key={gig.id}
                  className="p-4 border rounded-lg shadow-sm bg-white flex flex-col space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(gig.id)}
                        onChange={() => toggleCheckbox(gig.id)}
                      />
                      <img
                        src={gig.image}
                        alt="Gig"
                        className="w-16 h-10 rounded-md object-cover"
                      />
                      <span className="text-sm font-medium">{gig.title}</span>
                    </div>
                    <button className="p-1 rounded hover:bg-gray-200">
                      <HiChevronDown className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <span>Impressions: {gig.impressions}</span>
                    <span>Clicks: {gig.clicks}</span>
                    <span>Orders: {gig.orders}</span>
                    <span>Cancellations: {gig.cancellations}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mt-3 text-right">
        <a href="#" className="text-sm font-medium text-[#4A97E1] hover:underline">
          What does your Gig status mean?
        </a>
      </div>
    </>
  );
};

export default ActiveGigsTable;
