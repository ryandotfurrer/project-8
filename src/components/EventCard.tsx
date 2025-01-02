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
<<<<<<< HEAD
        className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
=======
        className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700"
>>>>>>> 9d149ec (test)
      >
        <div className="aspect-[16/9] w-full">
          <img
            src={event.thumbnail}
            alt={event.title}
<<<<<<< HEAD
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2">
          <h3 className="font-medium text-gray-800 truncate">{event.title}</h3>
          <p className="text-sm text-indigo-600">{formattedTime}</p>
=======
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-gray-800 dark:text-gray-100 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {event.title}
          </h3>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">{formattedTime}</p>
>>>>>>> 9d149ec (test)
        </div>
      </div>

      {showModal && (
<<<<<<< HEAD
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
=======
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
>>>>>>> 9d149ec (test)
            <div className="relative">
              <ImageGallery 
                images={event.images.length > 0 ? event.images : [event.thumbnail]} 
                className="rounded-t-lg"
              />
              <button
                onClick={() => setShowModal(false)}
<<<<<<< HEAD
                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
=======
                className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
>>>>>>> 9d149ec (test)
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
<<<<<<< HEAD
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="text-sm text-gray-500 mb-4">
=======
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
>>>>>>> 9d149ec (test)
                <p>Date: {event.date}</p>
                <p>Time: {formattedTime}</p>
              </div>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
<<<<<<< HEAD
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
=======
                className="inline-block px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
>>>>>>> 9d149ec (test)
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