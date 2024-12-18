export interface Message {
  text: string;
  isBot: boolean;
  timestamp?: Date;
}

export interface ChatResponse {
  text: string;
  status: 'success' | 'error';
}

export interface ChatConfig {
  apiUrl: string;
  modelName: string;
  maxTokens: number;
}