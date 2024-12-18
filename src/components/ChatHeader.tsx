import React from 'react';
import { Building2 } from 'lucide-react';

export function ChatHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <Building2 className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">HotelOnline AI</h1>
        </div>
        <p className="mt-2 text-gray-600">Your intelligent hospitality management assistant</p>
      </div>
    </header>
  );
}