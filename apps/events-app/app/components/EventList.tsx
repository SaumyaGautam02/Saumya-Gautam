'use client';
import React from 'react';
import { EventItem } from './EventItem';

type Props = {
  events: EventItem[];
  onDelete: (id: string) => void;
};

export default function EventList({ events, onDelete }: Props) {
  return (
    <div className="w-full">
     
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="p-2 bg-gray-200 text-center font-semibold rounded">Events</div>
        <div className="p-2 bg-gray-200 text-center font-semibold rounded">Date</div>
        <div className="p-2 bg-gray-200 text-center font-semibold rounded">Action</div>
      </div>
      
      
      {events.length === 0 ? (
        <div className="grid grid-cols-3 gap-4">
          <div className="p-2 bg-gray-100 text-center rounded">No events</div>
          <div className="p-2 bg-gray-100 text-center rounded">—</div>
          <div className="p-2 bg-gray-100 text-center rounded">—</div>
        </div>
      ) : (
        events.map((ev) => (
          <div key={ev.id} className="grid grid-cols-3 gap-4 mb-2">
            <div className="p-2 bg-gray-100 text-center rounded">
              {ev.name}
            </div>
            <div className="p-2 bg-gray-100 text-center rounded">
              {(() => {
                try {
                  const d = new Date(ev.date);
                  return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
                } catch {
                  return ev.date;
                }
              })()}
            </div>
            <div className="p-2 bg-gray-100 text-center rounded">
              <button
                onClick={() => onDelete(ev.id)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
