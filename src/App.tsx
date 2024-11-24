import React, { useState } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { UserList } from './components/UserList';
import { UserProfile } from './components/UserProfile';
import type { Message, User } from './types';
import { MessageSquare } from 'lucide-react';

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
    role: 'Community Manager',
    bio: 'Passionate about building communities and connecting people.',
    location: 'San Francisco, CA',
    joinDate: new Date('2023-01-15'),
    messageCount: 1542
  },
  {
    id: '2',
    name: 'John',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    isOnline: true,
    role: 'Software Developer',
    bio: 'Full-stack developer with a love for React and TypeScript.',
    location: 'London, UK',
    joinDate: new Date('2023-03-20'),
    messageCount: 873
  },
  {
    id: '3',
    name: 'Emily',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    isOnline: false,
    role: 'UX Designer',
    bio: 'Creating beautiful and intuitive user experiences.',
    location: 'Toronto, Canada',
    joinDate: new Date('2023-06-10'),
    messageCount: 245,
    lastSeen: new Date(Date.now() - 1000 * 60 * 30),
  },
];

const currentUser = 'You';

function App() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: currentUser,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col max-w-6xl mx-auto bg-white shadow-lg">
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Chat Room</h1>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  isOwnMessage={message.sender === currentUser}
                  onUserClick={() => {
                    const user = users.find(u => u.name === message.sender);
                    if (user) handleUserClick(user);
                  }}
                />
              ))}
            </div>

            <ChatInput onSendMessage={handleSendMessage} />
          </div>

          <UserList users={users} onUserClick={handleUserClick} />
        </div>
      </div>

      {selectedUser && (
        <UserProfile
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}

export default App;