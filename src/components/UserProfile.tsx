import React from 'react';
import { X, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { User } from '../types';
import { format } from 'date-fns';

interface UserProfileProps {
  user: User;
  onClose: () => void;
}

export function UserProfile({ user, onClose }: UserProfileProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                user.isOnline ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {user.isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>

          {user.bio && (
            <p className="text-gray-600 mb-6">{user.bio}</p>
          )}

          <div className="space-y-3">
            {user.role && (
              <div className="flex items-center text-gray-600">
                <MessageSquare size={18} className="mr-2" />
                <span>{user.role}</span>
              </div>
            )}
            
            {user.location && (
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2" />
                <span>{user.location}</span>
              </div>
            )}

            <div className="flex items-center text-gray-600">
              <Calendar size={18} className="mr-2" />
              <span>Joined {format(user.joinDate, 'MMMM yyyy')}</span>
            </div>

            {user.messageCount !== undefined && (
              <div className="flex items-center text-gray-600">
                <MessageSquare size={18} className="mr-2" />
                <span>{user.messageCount} messages</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}