import React, { useState } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { UserList } from './components/UserList';
import type { Message, User } from './types';
import { MessageSquare } from 'lucide-react';

// Sample data
const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hey everyone! Welcome to the chat room! 👋',
    sender: 'Sarah',
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
  },
  {
    id: '2',
    text: 'Thanks! Excited to be here!',
    sender: 'John',
    timestamp: new Date(Date.now() - 1000 * 60 * 10),
  },
];

const users: User[] = [
  {
    id: '1',
    name: 'Sarah',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    isOnline: true,
  },
  {
    id: '2',
    name: 'John',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    isOnline: true,
  },
  {
    id: '3',
    name: 'Emily',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    isOnline: false,
    lastSeen: new Date(Date.now() - 1000 * 60 * 30),
  },
];

const currentUser = 'You';

function App() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: currentUser,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col max-w-6xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Chat Room</h1>
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  isOwnMessage={message.sender === currentUser}
                />
              ))}
            </div>

            {/* Input */}
            <ChatInput onSendMessage={handleSendMessage} />
          </div>

          {/* User list */}
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;