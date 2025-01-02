import React from 'react';
import { Twitter, MessageCircle, Heart } from 'lucide-react';

interface SocialPostProps {
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  date: string;
  metrics: {
    likes: number;
    replies: number;
  };
  link: string;
}

export default function SocialPostCard({ author, content, date, metrics, link }: SocialPostProps) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start space-x-4">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="text-gray-900 font-medium truncate">{author.name}</h3>
            <span className="text-gray-500">@{author.handle}</span>
            <Twitter className="w-5 h-5 text-[#1DA1F2]" />
          </div>
          <p className="mt-1 text-gray-600">{content}</p>
          <div className="mt-2 flex items-center space-x-4 text-gray-500 text-sm">
            <span>{date}</span>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>{metrics.likes}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>{metrics.replies}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}