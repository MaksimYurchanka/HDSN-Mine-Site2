import React from 'react';
import { BsPerson } from 'react-icons/bs';

export const ProfileSection: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center">
          <BsPerson className="text-4xl text-indigo-600" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Welcome, User!</h2>
          <p className="text-gray-600">Human Design Type: Generator</p>
        </div>
      </div>
    </section>
  );
};