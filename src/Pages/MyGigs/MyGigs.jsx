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
      image: "https://via.placeholder.com/80x60.png?text=Gig+1",
    },
    {
      id: 2,
      title:
        "Build a scalable saas web application for accounting CR, or business automation",
      impressions: 38,
      clicks: 0,
      orders: 0,
      cancellations: "0%",
      image: "https://via.placeholder.com/80x60.png?text=Gig+2",
    },
  ];

  // Load gigs (on mount + when localStorage changes)
  const loadGigs = () => {
    const storedGig = localStorage.getItem("gigData");
    let parsedGig = storedGig ? JSON.parse(storedGig) : null;

    if (parsedGig) {
      parsedGig = {
        id: Date.now(),
        title: parsedGig.title || "Untitled Gig",
        impressions: 0,
        clicks: 0,
        orders: 0,
        cancellations: "0%",
        image:
          parsedGig.image ||
          "https://via.placeholder.com/80x60.png?text=New+Gig",
      };

      setGigsData([parsedGig, ...defaultGigs]);
    } else {
      setGigsData(defaultGigs);
    }
  };

  useEffect(() => {
    loadGigs();

    // 👇 Listen to changes in localStorage (other tabs or after create gig)
    const handleStorageChange = (event) => {
      if (event.key === "gigData") {
        loadGigs();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">My Gigs</h1>
        <button
          onClick={() => navigate("/gigs/create-gigs")}
          className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-50 transition"
        >
          Create a New Gig
        </button>
      </div>

      {/* Tabs + Filter */}
      <div className="flex items-center justify-between border-b border-gray-200 mb-6">
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
          <button className="flex items-center border border-gray-300 px-3 py-1.5 rounded-md text-gray-600 hover:bg-gray-50">
            Last 30 Days <HiChevronDown className="ml-2" />
          </button>
        </div>
      </div>

      {/* Conditional render */}
      {activeTab === "active" && <ActiveGigsTable gigsData={gigsData} />}
      {activeTab === "pending" && <PendingApprovalTable />}
      {activeTab === "denied" && <DeniedGigsTable />}
    </div>
  );
};

export default Gigs;