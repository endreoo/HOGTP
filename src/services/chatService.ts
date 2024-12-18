import { ChatResponse, Message } from '../types/chat';
import { chatConfig } from '../config/chatConfig';

export async function sendMessage(message: string): Promise<ChatResponse> {
  try {
    const response = await fetch(chatConfig.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        model: chatConfig.modelName,
        max_tokens: chatConfig.maxTokens,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response from AI');
    }

    const data = await response.json();
    return {
      text: data.response,
      status: 'success',
    };
  } catch (error) {
    console.error('Error calling AI service:', error);
    return {
      text: 'I apologize, but I encountered an error processing your request. Please try again.',
      status: 'error',
    };
  }
}

export function formatMessage(text: string, isBot: boolean): Message {
  return {
    text,
    isBot,
    timestamp: new Date(),
  };
}