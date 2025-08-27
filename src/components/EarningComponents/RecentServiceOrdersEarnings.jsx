import React from 'react';

const RecentServiceOrdersEarnings = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent Service Orders</h3>
        <p className="text-sm text-gray-600 mb-4">
          Balances Greater Than ₹500.00 Will Be Automatically Sent Jul 25, 2022
        </p>
        
        <div className="flex space-x-3">
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 text-sm">
            Get Paid Now
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-sm">
            View Payment Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentServiceOrdersEarnings;