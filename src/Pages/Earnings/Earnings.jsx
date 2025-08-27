import React from 'react';
import EarningsCards from '../../components/EarningComponents/EarningsCards';
import RecentServiceOrdersEarnings from '../../components/EarningComponents/RecentServiceOrdersEarnings';
import PaymentHistoryTable from '../../components/EarningComponents/PaymentHistoryTable';

const Earnings = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Earnings</h1>
      </div>

      {/* Earnings Cards */}
      <EarningsCards />

      {/* Recent Service Orders */}
      <RecentServiceOrdersEarnings />

      {/* Payment History */}
      <PaymentHistoryTable />
    </div>
  );
};

export default Earnings;