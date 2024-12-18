import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  onSuggestedPromptSelect?: (prompt: string) => void;
}

export function ChatInput({ onSendMessage, isLoading, onSuggestedPromptSelect }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white">
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about hotel management, rentals, or hospitality systems..."
              className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 
                       focus:ring-blue-500 resize-none min-h-[44px] max-h-[120px]"
              disabled={isLoading}
              rows={1}
            />
            <div className="absolute right-3 bottom-3 text-xs text-gray-400">
              {isLoading ? 'Processing...' : 'Press Enter to send'}
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-center
                      min-w-[44px] ${
                        isLoading 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
                      }`}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}