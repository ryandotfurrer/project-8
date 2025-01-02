import React, { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { useEvents } from '../hooks/useEvents';
import EventForm from './EventForm';
import { formatTo12Hour } from '../utils/timeUtils';
import type { Event } from '../types/events';

export default function EventManagement() {
  const { events, deleteEvent, updateEvent } = useEvents();
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const allEvents = Object.values(events).flat().sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      await deleteEvent(id);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Manage Events</h2>
      <div className="grid gap-4">
        {allEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow p-4 flex items-start gap-4">
            <img 
              src={event.thumbnail} 
              alt={event.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.description}</p>
              <div className="text-sm text-gray-500">
                <p>Date: {event.date}</p>
                <p>Time: {formatTo12Hour(event.time)}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(event)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(event.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-full"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="max-w-2xl w-full">
            <EventForm
              event={editingEvent}
              onSubmit={async (updatedEvent) => {
                await updateEvent(updatedEvent);
                setEditingEvent(null);
              }}
              onCancel={() => setEditingEvent(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}