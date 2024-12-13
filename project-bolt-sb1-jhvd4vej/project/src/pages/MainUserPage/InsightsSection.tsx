import React from 'react';
import { IoStatsChartOutline, IoCalendarOutline } from 'react-icons/io5';

export const InsightsSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-4">
          <IoStatsChartOutline className="text-2xl text-indigo-600" />
          <h3 className="text-xl font-semibold">Your Energy Levels</h3>
        </div>
        <p className="text-gray-600">Track and understand your energy patterns</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-4">
          <IoCalendarOutline className="text-2xl text-indigo-600" />
          <h3 className="text-xl font-semibold">Daily Guidance</h3>
        </div>
        <p className="text-gray-600">Personalized recommendations based on your design</p>
      </div>
    </section>
  );
};