import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SocialPostCard from './SocialPostCard';
import { useSocialPosts } from '../../hooks/useSocialPosts';

export default function SocialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { posts } = useSocialPosts();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= posts.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  if (posts.length === 0) return null;

  return (
    <div className="relative px-12">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {posts.map((post, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <SocialPostCard {...post} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 mt-4">
        {posts.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}