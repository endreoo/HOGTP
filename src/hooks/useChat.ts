import { useState, useCallback } from 'react';
import { Message } from '../types/chat';
import { sendMessage, formatMessage } from '../services/chatService';
import { initialMessage } from '../config/chatConfig';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendMessage = useCallback(async (messageText: string) => {
    setIsLoading(true);
    setError(null);

    // Add user message immediately
    const userMessage = formatMessage(messageText, false);
    setMessages(prev => [...prev, userMessage]);

    try {
      const response = await sendMessage(messageText);
      
      if (response.status === 'error') {
        setError('Failed to get response from AI');
      }

      const botMessage = formatMessage(response.text, true);
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    messages,
    isLoading,
    error,
    handleSendMessage
  };
}