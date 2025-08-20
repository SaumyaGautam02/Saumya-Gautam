'use client';
import React from 'react';

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search events..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-2 py-2 w-80 border border-gray-300 rounded"
        aria-label="Search events"
      />
    </div>
  );
}
