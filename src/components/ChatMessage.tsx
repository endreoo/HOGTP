import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
  isLatest: boolean;
}

export function ChatMessage({ message, isLatest }: ChatMessageProps) {
  const { isBot, text, timestamp } = message;
  
  return (
    <div 
      className={`flex gap-4 ${isBot ? 'bg-gray-50' : 'bg-white'} p-6 border-b border-gray-100
                 ${isLatest ? 'animate-fadeIn' : ''}`}
    >
      <div 
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                   ${isBot ? 'bg-blue-600' : 'bg-gray-700'}
                   ${isLatest ? 'animate-bounce-subtle' : ''}`}
      >
        {isBot ? (
          <Bot className="w-5 h-5 text-white" />
        ) : (
          <User className="w-5 h-5 text-white" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
          {text}
        </p>
        {timestamp && (
          <span className="text-xs text-gray-500 mt-2 block">
            {timestamp.toLocaleTimeString()}
          </span>
        )}
      </div>
    </div>
  );
}