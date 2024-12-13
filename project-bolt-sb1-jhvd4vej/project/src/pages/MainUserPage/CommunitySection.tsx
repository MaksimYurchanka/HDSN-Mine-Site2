import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';

export const CommunitySection: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-6">
        <BsPeopleFill className="text-2xl text-indigo-600" />
        <h3 className="text-xl font-semibold">Community Connections</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <h4 className="font-medium mb-2">Similar Types</h4>
          <p className="text-gray-600">Connect with other Generators</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-medium mb-2">Recent Activity</h4>
          <p className="text-gray-600">Join ongoing discussions</p>
        </div>
      </div>
    </section>
  );
};