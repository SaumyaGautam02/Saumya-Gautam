'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome to Event Manager
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Organize and manage your events with ease. Add, search, and delete events 
          to keep track of your important dates.
        </p>
        
        <Link 
          href="/events"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go to Events Manager
        </Link>
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Add Events</h3>
            <p className="text-sm text-gray-600">Create new events with dates and descriptions</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Search Events</h3>
            <p className="text-sm text-gray-600">Quickly find events by name</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Manage Events</h3>
            <p className="text-sm text-gray-600">Delete events when they're no longer needed</p>
          </div>
        </div>
      </div>
    </div>
  );
}