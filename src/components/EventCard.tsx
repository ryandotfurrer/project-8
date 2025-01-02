import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { Event } from '../types/events';
import { formatTo12Hour } from '../utils/timeUtils';
import ImageGallery from './ImageGallery';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const [showModal, setShowModal] = useState(false);
  const formattedTime = formatTo12Hour(event.time);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
      >
        <div className="aspect-[16/9] w-full">
          <img
            src={event.thumbnail}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2">
          <h3 className="font-medium text-gray-800 truncate">{event.title}</h3>
          <p className="text-sm text-indigo-600">{formattedTime}</p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <ImageGallery 
                images={event.images.length > 0 ? event.images : [event.thumbnail]} 
                className="rounded-t-lg"
              />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="text-sm text-gray-500 mb-4">
                <p>Date: {event.date}</p>
                <p>Time: {formattedTime}</p>
              </div>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                View Event Details
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}