'use client';
import React, { useState } from 'react';
import { EventItem } from './EventItem';
import { useLocalStorage } from '../hooks/useLocalStorage';
import SearchBar from './SearchBar';
import EventForm from './EventForm';
import EventList from './EventList';

export default function EventsPage() {
  const [events, setEvents] = useLocalStorage<EventItem[]>('events', []);
  const [search, setSearch] = useState('');

  const filteredEvents = search
    ? events.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
    : events;

  const handleAdd = (formData: { name: string; date: string }) => {
    const newEvent: EventItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      name: formData.name.trim(),
      date: formData.date,
    };

    setEvents([...events, newEvent]);
  };

  const handleDelete = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-center mb-5 text-2xl font-bold">Event Manager</h1>

      <div className="mb-5 text-center">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="mb-5">
        <EventForm onAdd={handleAdd} />
      </div>

      <div>
        <EventList events={filteredEvents} onDelete={handleDelete} />
      </div>

      
      {events.length > 0 && search && filteredEvents.length === 0 && (
        <p className="text-center mt-5">No events found</p>
      )}
    </div>
  );
}
