import React from 'react';
import StatCard from '../DashboardComponents/Cards';
import Images from '../../assets/Images';

const EarningsCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Work in Progress"
        value="₹900"
        img={Images.Card1}
        color="bg-purple-500"
      />
      <StatCard
        title="In Review"
        value="₹100"
        img={Images.Card2}
        color="bg-blue-500"
      />
      <StatCard
        title="Payment Pending"
        value="₹400"
        img={Images.Card3}
        color="bg-orange-500"
      />
      <StatCard
        title="Your Balance"
        value="₹2000"
        img={Images.Card4}
        color="bg-green-500"
      />
    </div>
  );
};

export default EarningsCards;