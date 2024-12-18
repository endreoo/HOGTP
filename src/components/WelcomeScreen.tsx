import React from 'react';
import { Building2, Hotel, Key, MessageSquare, Settings } from 'lucide-react';

const features = [
  {
    icon: <Hotel className="w-6 h-6" />,
    title: 'Hotel Management',
    description: 'Get insights on hotel operations and management strategies'
  },
  {
    icon: <Key className="w-6 h-6" />,
    title: 'Short-term Rentals',
    description: 'Learn about vacation rental optimization and guest experience'
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Property Systems',
    description: 'Explore PMS solutions and technology integration'
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Guest Services',
    description: 'Enhance guest satisfaction and communication'
  }
];

export function WelcomeScreen() {
  return (
    <div className="p-6 bg-gradient-to-b from-blue-50 to-white rounded-lg mb-4">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Welcome to HotelOnline AI Assistant
        </h2>
        <p className="text-gray-600">
          Your expert companion for hospitality management and operations
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="text-blue-600">{feature.icon}</div>
              <h3 className="font-medium text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-sm text-gray-600 ml-9">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}