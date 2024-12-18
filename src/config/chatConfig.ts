import { ChatConfig } from '../types/chat';

export const chatConfig: ChatConfig = {
  apiUrl: 'http://your-linux-server/api/chat',
  modelName: 'llama-3.2',
  maxTokens: 2048
};

export const initialMessage = {
  text: "Hello! I'm HotelOnline AI, your hospitality management assistant. I can help you with hotel operations, property management systems, guest services, and short-term rental strategies. What would you like to know?",
  isBot: true,
  timestamp: new Date()
};