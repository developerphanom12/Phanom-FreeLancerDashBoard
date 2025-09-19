import React, { useState, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ActiveGigsTable from "../../components/GigsDashboard/ActiveGigsTable";
import PendingApprovalTable from "../../components/GigsDashboard/PendingApprovalTable";
import DeniedGigsTable from "../../components/GigsDashboard/DeniedGigsTable";

const Gigs = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [gigsData, setGigsData] = useState([]);
  const navigate = useNavigate();

  // Default gigs
  const defaultGigs = [
    {
      id: 1,
      title:
        "Build a scalable saas web application for accounting CR, or business automation",
      impressions: 38,
      clicks: 0,
      orders: 0,
      cancellations: "0%",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/graphics-design-poster-gig-banner-template-16c2c2b59ad298534eebe31ed4a50c4e_screen.jpg?ts=1676322408",
    },
    {
      id: 2,
      title:
        "Build a scalable saas web application for accounting CR, or business automation",
      impressions: 38,
      clicks: 0,
      orders: 0,
      cancellations: "0%",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/graphics-design-poster-gig-banner-template-16c2c2b59ad298534eebe31ed4a50c4e_screen.jpg?ts=1676322408",
    },
  ];

  // Load gigs from API (placeholder for future API integration)
  const loadGigs = async () => {
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/gigs');
      // const data = await response.json();
      // setGigsData(data);

      // For now, use default gigs
      setGigsData(defaultGigs);
    } catch (error) {
      console.error('Error loading gigs:', error);
      setGigsData(defaultGigs);
    }
  };

  useEffect(() => {
    loadGigs();
  }, []);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Gigs</h1>
        <button
          onClick={() => navigate("/gigs/create-gigs")}
          className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-50 transition"
        >
          Create a New Gig
        </button>
      </div>

      {/* Tabs + Filter */}
      <div className="flex items-center justify-between  border-gray-200 mb-6">
        <div className="flex space-x-6">
          <button
            className={`pb-2 font-medium ${
              activeTab === "active"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("active")}
          >
            Active ({gigsData.length})
          </button>
          <button
            className={`pb-2 font-medium ${
              activeTab === "pending"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending Approval
          </button>
          <button
            className={`pb-2 font-medium ${
              activeTab === "denied"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("denied")}
          >
            Denied
          </button>
        </div>

        <div>
          <select
  className="hidden sm:block border border-gray-300 px-3 py-1.5 rounded-md text-gray-600 hover:bg-gray-50"
  defaultValue="30days"
>
  <option value="7days">Last 7 Days</option>
  <option value="30days">Last 30 Days</option>
  <option value="90days">Last 90 Days</option>
</select>

        </div>
      </div>

      {/* Conditional render */}
      {activeTab === "active" && <ActiveGigsTable gigsData={gigsData} tableType="Active Gigs" />}
      {activeTab === "pending" && <ActiveGigsTable gigsData={gigsData} tableType="Pending"/>}
      {activeTab === "denied" && <ActiveGigsTable gigsData={gigsData} tableType="Denied"/>}
    </div>
  );
};

export default Gigs;