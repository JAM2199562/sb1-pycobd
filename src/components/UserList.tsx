import React from 'react';
import { User } from '../types';

interface UserListProps {
  users: User[];
  onUserClick: (user: User) => void;
}

export function UserList({ users, onUserClick }: UserListProps) {
  return (
    <div className="w-64 bg-gray-50 border-l border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Online Users</h2>
      <div className="space-y-3">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => onUserClick(user)}
            className="flex items-center gap-3 w-full text-left hover:bg-gray-100 p-2 rounded-lg transition-colors"
          >
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                  user.isOnline ? 'bg-green-500' : 'bg-gray-400'
                }`}
              />
            </div>
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-xs text-gray-500">
                {user.isOnline ? 'Online' : 'Offline'}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}