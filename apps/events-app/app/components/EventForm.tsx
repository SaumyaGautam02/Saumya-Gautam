'use client';
import React, { useState } from 'react';

type FormData = {
  name: string;
  date: string;
};

type Props = {
  onAdd: (data: FormData) => void;
};

export default function EventForm({ onAdd }: Props) {
  const [formData, setFormData] = useState<FormData>({ name: '', date: '' });
  const [errors, setErrors] = useState<{ name?: string; date?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: { name?: string; date?: string } = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Event name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Event name must be at least 2 characters';
    }

    // Validate date
    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = 'Event date cannot be in the past';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      onAdd(formData);
      setFormData({ name: '', date: '' }); // Reset form
      setErrors({});
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="text-center mb-5">
      <h3 className="mb-2.5">Create New Event</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-2.5">
          <input
            type="text"
            placeholder="Enter event name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`px-2 py-2 mr-2.5 w-48 border rounded ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <div className="text-red-500 text-sm mt-1">{errors.name}</div>
          )}
        </div>

        <div className="mb-2.5">
          <input
            type="date"
            value={formData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            className={`px-2 py-2 mr-2.5 w-48 border rounded ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.date && (
            <div className="text-red-500 text-sm mt-1">{errors.date}</div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-500 text-white border-0 cursor-pointer hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed rounded"
        >
          {isSubmitting ? 'Adding...' : 'Add Event'}
        </button>
      </form>
    </div>
  );
}
