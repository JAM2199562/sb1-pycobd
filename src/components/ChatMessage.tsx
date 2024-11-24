import React from 'react';
import { format } from 'date-fns';
import type { Message } from '../types';

interface ChatMessageProps {
  message: Message;
  isOwnMessage: boolean;
}

export function ChatMessage({ message, isOwnMessage }: ChatMessageProps) {
  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2 ${
          isOwnMessage
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-900 rounded-bl-none'
        }`}
      >
        <div className="flex items-baseline gap-2">
          {!isOwnMessage && (
            <span className="text-sm font-semibold">{message.sender}</span>
          )}
          <span className="text-xs opacity-70">
            {format(message.timestamp, 'HH:mm')}
          </span>
        </div>
        <p className="mt-1">{message.text}</p>
      </div>
    </div>
  );
}