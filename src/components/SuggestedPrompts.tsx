import React from 'react';
import { Sparkles } from 'lucide-react';

interface SuggestedPromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

const prompts = [
  "What are the essential features of a modern PMS system?",
  "How can I improve my hotel's guest review scores?",
  "What are the best practices for pricing short-term rentals?",
  "How can I automate check-in/check-out processes?"
];

export function SuggestedPrompts({ onSelectPrompt }: SuggestedPromptsProps) {
  return (
    <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-medium text-gray-700">Suggested Questions</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onSelectPrompt(prompt)}
            className="text-sm px-3 py-1.5 bg-white border border-gray-200 rounded-full 
                     hover:border-blue-400 hover:bg-blue-50 transition-colors duration-200
                     text-gray-700 hover:text-blue-600"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}