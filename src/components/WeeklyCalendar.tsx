import { addWeeks, subWeeks, format, eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useEvents } from '../hooks/useEvents';
import { useState } from 'react';
import AuthModal from './AuthModal';
import EventCard from './EventCard';
import EventForm from './EventForm';
import EventManagement from './EventManagement';
import type { Event } from '../types/events';

export default function WeeklyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showEventForm, setShowEventForm] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authError, setAuthError] = useState<string>();
  const { events, addNewEvent } = useEvents();
  const { user, login, logout } = useAuth();

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: weekStart, end: weekEnd }).slice(0, 5);

  const nextWeek = () => setCurrentDate(addWeeks(currentDate, 1));
  const prevWeek = () => setCurrentDate(subWeeks(currentDate, 1));

  const handleAddClick = () => {
    if (user) {
      setShowEventForm(true);
    } else {
      setShowAuthModal(true);
    }
  };

  const handleAuthSubmit = async (email: string, password: string) => {
    try {
      const success = await login(email, password);
      if (success) {
        setAuthError(undefined);
        setShowAuthModal(false);
        setShowEventForm(true);
      } else {
        setAuthError('Invalid credentials');
      }
    } catch (error) {
      setAuthError('Authentication failed');
    }
  };

  const handleAddEvent = async (event: Event) => {
    try {
      await addNewEvent(event);
      setShowEventForm(false);
    } catch (error) {
      console.error('Failed to add event:', error);
    }
  };

  return (
    <div className="bg-muted outline-border rounded-lg p-4 shadow-lg outline dark:shadow-none lg:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2>Week of {format(weekStart, 'MMM d, yyyy')}</h2>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button onClick={prevWeek} className="hover:bg-foreground/90 group rounded-full p-2 transition-colors">
              <ChevronLeft className="group-hover:text-background size-6" />
            </button>
            <button onClick={nextWeek} className="hover:bg-foreground/90 group rounded-full p-2 transition-colors">
              <ChevronRight className="group-hover:text-background size-6" />
            </button>
          </div>
          <button
            onClick={handleAddClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-md px-4 py-2 font-bold transition-colors"
          >
            <Plus className="text-primary-foreground/50 size-4" />
            Add Event
          </button>
          {user && (
            <button
              onClick={logout}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {showAuthModal && (
        <AuthModal
          mode="login"
          onSubmit={handleAuthSubmit}
          onCancel={() => setShowAuthModal(false)}
          error={authError}
        />
      )}

      {showEventForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-screen-sm">
            <EventForm onSubmit={handleAddEvent} onCancel={() => setShowEventForm(false)} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-5 gap-4">
        {days.map((day) => (
          <div key={day.toString()} className="min-h-96">
            <div className="rounded-t-lg p-2 text-center">
              <p className="text-sm font-bold">{format(day, 'EEEE')}</p>
              <p className="text-xs">{format(day, 'MMM d')}</p>
            </div>
            <div className="space-y-2 p-2">
              {events[format(day, 'yyyy-MM-dd')]?.map((event) => <EventCard key={event.id} event={event} />)}
            </div>
          </div>
        ))}
      </div>

      {user && <EventManagement />}
    </div>
  );
}
