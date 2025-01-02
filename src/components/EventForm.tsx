import React, { useState } from 'react';
import { Lock, Image, Layout } from 'lucide-react';
import type { Event } from '../types/events';
import { formatEventDate } from '../utils/eventUtils';
import ImageUpload from './ImageUpload';
import CarouselUpload from './carousel/CarouselUpload';

interface EventFormProps {
  event?: Event;
  onSubmit: (event: Event) => void;
  onCancel: () => void;
}

type Tab = 'event' | 'carousel';

export default function EventForm({ event, onSubmit, onCancel }: EventFormProps) {
  const [activeTab, setActiveTab] = useState<Tab>('event');
  const [formData, setFormData] = useState({
    title: event?.title || '',
    description: event?.description || '',
    time: event?.time || '',
    thumbnail: event?.thumbnail || '',
    link: event?.link || '',
    date: event?.date || formatEventDate(new Date()),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: event?.id || crypto.randomUUID(),
      ...formData,
      images: [formData.thumbnail], // Ensure images array contains the thumbnail
    });
  };

  const handleThumbnailSelect = (imageDataUrl: string) => {
    setFormData(prev => ({
      ...prev,
      thumbnail: imageDataUrl,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="text-center mb-4">
        <Lock className="mx-auto h-8 w-8 text-indigo-600" />
        <h2 className="text-xl font-semibold mt-2">
          {event ? 'Edit Event' : 'Add New Event'}
        </h2>
      </div>

      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab('event')}
          className={`px-4 py-2 border-b-2 font-medium text-sm ${
            activeTab === 'event'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <div className="flex items-center gap-2">
            <Layout className="w-4 h-4" />
            Event Details
          </div>
        </button>
        <button
          onClick={() => setActiveTab('carousel')}
          className={`px-4 py-2 border-b-2 font-medium text-sm ${
            activeTab === 'carousel'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <div className="flex items-center gap-2">
            <Image className="w-4 h-4" />
            Community Images
          </div>
        </button>
      </div>

      {activeTab === 'event' ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={e => setFormData(prev => ({ ...prev, date: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              id="time"
              value={formData.time}
              onChange={e => setFormData(prev => ({ ...prev, time: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Thumbnail</label>
            <ImageUpload 
              onImageSelect={handleThumbnailSelect}
              currentImage={formData.thumbnail}
            />
          </div>

          <div>
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">Event Link</label>
            <input
              type="url"
              id="link"
              value={formData.link}
              onChange={e => setFormData(prev => ({ ...prev, link: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
            >
              {event ? 'Update Event' : 'Add Event'}
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-gray-600 mb-4">
            Upload images to showcase in the community carousel. These images will be visible to all community members.
          </p>
          <CarouselUpload onClose={() => setActiveTab('event')} />
        </div>
      )}
    </div>
  );
}