import React, { useState } from 'react';
import { HiDotsHorizontal, HiPaperAirplane, HiPaperClip, HiStar } from 'react-icons/hi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegSmile, FaStar } from 'react-icons/fa';
import Images from '../../assets/Images';
import { CiFaceSmile } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const ChatArea = ({ selectedChat, showProfile, setShowProfile, setShowSidebar }) => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  const messages = [
    {
      id: 1,
      sender: 'hollyteacher',
      content: 'Okay',
      time: '08 Feb 2024, 16:31',
      isOwn: false
    },
    {
      id: 2,
      sender: 'Me',
      content: 'Coding I can do my self',
      time: '08 Feb 2024, 16:32',
      isOwn: true
    },
    {
      id: 3,
      sender: 'hollyteacher',
      content: 'I will charge £750 and I need 7-8 days',
      time: '08 Feb 2024, 16:33',
      isOwn: false
    },
    {
      id: 4,
      sender: 'Me',
      content: 'Have you done through with the flow?',
      time: '08 Feb 2024, 16:32',
      isOwn: true
    }
  ];

  const handleSendMessage = () => {
    navigate("milestone")
  };

  if (!selectedChat) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-300 flex-col flex-1 flex items-center justify-center m-1 md:m-2">
        <img src={Images.Message} alt="chat" className='w-[150px] md:w-[200px]' />
        <div className="text-center px-4">
          <h4 className='text-lg md:text-2xl font-semibold'>Pick Up Where You left off</h4>
          <p className="text-sm md:text-base text-gray-500">Select a conversation to start messaging</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-[#F5F7F9] p-1 md:p-2">
      {/* Chat Container */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-300 flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-3 md:p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3">
              {/* Back button for mobile */}
              <button 
                className="md:hidden p-1 hover:bg-gray-100 rounded-full"
                onClick={() => setShowSidebar(true)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="relative">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <h3 className="text-sm md:text-base font-medium text-gray-900">{selectedChat.name}</h3>
                  <span className="text-xs md:text-sm text-gray-500">@hollyteacher</span>
                </div>
                <p className="text-xs md:text-sm text-gray-500">22:20 local time</p>
              </div>
            </div>

            <div className="flex items-center space-x-1 md:space-x-2">
              <button className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full">
                <HiStar className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              </button>
              <button className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full">
                <BsThreeDotsVertical className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start space-x-2 md:space-x-3">
              <div className="flex-shrink-0">
                <img
                  src={msg.isOwn ? 'https://i.pravatar.cc/150?img=9' : selectedChat.avatar}
                  alt={msg.sender}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <span className="text-xs md:text-sm font-medium text-gray-900">{msg.sender}</span>
                  <span className="text-xs text-gray-500">{msg.time}</span>
                </div>
                <div className="inline-block max-w-[250px] md:max-w-xs lg:max-w-md px-2 md:px-3 py-1 rounded-lg">
                  <p className="text-xs md:text-sm">{msg.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-3 md:p-4 border-gray-200">
          <div className="flex-1 relative mb-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
          </div>
          <div className="flex justify-between items-center space-x-2 md:space-x-3">
            <div className="flex space-x-1">
              <button className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full">
                <HiPaperClip className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              </button>
              <button className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full">
                <span className="w-4 h-4 md:w-5 md:h-5 text-gray-400 text-sm md:text-lg"><FaRegSmile/></span>
              </button>
            </div>

            <div className='flex gap-2 md:gap-4'>
              <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#469AE0] via-[#9A4DE4] to-[#D01AE5] inline-block">
                <button
                  onClick={handleSendMessage}
                  className="px-2 md:px-4 py-1 md:py-2 rounded-lg bg-white flex items-center space-x-1 md:space-x-2"
                >
                  <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-[#469AE0] via-[#9A4DE4] to-[#D01AE5] bg-clip-text text-transparent">
                    Send Proposal
                  </span>
                </button>
              </div>
              <img src={Images.Send} alt="" className="w-6 h-6 md:w-auto md:h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Hidden on mobile */}
      <div className="hidden md:block mt-4 p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">About hollyteacher</h3>
        <div className="text-sm">
          <div className='flex justify-between '>
            <p className="text-gray-600 mb-1">From</p>
            <p className="font-medium text-gray-900">India</p>
          </div>
          <div className='flex justify-between'>
            <p className="text-gray-600 mb-1">On Fiverr since</p>
            <p className="font-medium text-gray-900">2021</p>
          </div>
          <div className='flex justify-between'>
            <p className="text-gray-600 mb-1">Languages</p>
            <p className="font-medium text-gray-900">English, Hindi, Gujarati</p>
          </div>
          <div className='flex justify-between'>
            <p className="text-gray-600 mb-1">Ratings</p>
            <p className="font-medium text-gray-900 flex gap-2"><FaStar className='mt-1' />4.9 (9k)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;

