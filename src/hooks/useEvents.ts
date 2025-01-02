import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { getEventDateKey } from '../utils/eventUtils';
import type { Event, DayEvents } from '../types/events';

export const useEvents = () => {
  const [events, setEvents] = useState<DayEvents>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;

      const groupedEvents = data.reduce((acc: DayEvents, event) => {
        const dateKey = getEventDateKey(event.date);
        return {
          ...acc,
          [dateKey]: [...(acc[dateKey] || []), event],
        };
      }, {});

      setEvents(groupedEvents);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch events');
    } finally {
      setLoading(false);
    }
  };

  const addNewEvent = async (event: Event) => {
    try {
      const { error } = await supabase
        .from('events')
        .insert([{
          ...event,
          user_id: (await supabase.auth.getUser()).data.user?.id,
        }]);

      if (error) throw error;
      await fetchEvents();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add event');
      throw err;
    }
  };

  const updateEvent = async (event: Event) => {
    try {
      const { error } = await supabase
        .from('events')
        .update({
          title: event.title,
          description: event.description,
          date: event.date,
          time: event.time,
          thumbnail: event.thumbnail,
          link: event.link,
        })
        .eq('id', event.id);

      if (error) throw error;
      await fetchEvents();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update event');
      throw err;
    }
  };

  const deleteEvent = async (eventId: string) => {
    try {
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', eventId);

      if (error) throw error;
      await fetchEvents();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete event');
      throw err;
    }
  };

  return {
    events,
    loading,
    error,
    addNewEvent,
    updateEvent,
    deleteEvent,
  };
};