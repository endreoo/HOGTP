import React, { useEffect, useRef } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { ChatHeader } from './components/ChatHeader';
import { WelcomeScreen } from './components/WelcomeScreen';
import { SuggestedPrompts } from './components/SuggestedPrompts';
import { useChat } from './hooks/useChat';

function App() {
  const { messages, isLoading, error, handleSendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="min-h-screen bg-gray-100">
      <ChatHeader />
      
      <main className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg my-8">
        <div className="h-[700px] flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto">
            {messages.length === 1 && <WelcomeScreen />}
            
            {messages.map((message, index) => (
              <ChatMessage 
                key={index} 
                message={message}
                isLatest={index === messages.length - 1} 
              />
            ))}
            
            {error && (
              <div className="p-4 bg-red-50 text-red-600 text-sm animate-fadeIn">
                {error}
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <SuggestedPrompts onSelectPrompt={handleSendMessage} />
          
          {/* Chat Input */}
          <ChatInput 
            onSendMessage={handleSendMessage} 
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
}

export default App;