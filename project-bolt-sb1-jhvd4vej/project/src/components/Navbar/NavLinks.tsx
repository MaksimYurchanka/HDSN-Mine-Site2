import React from 'react';

export const NavLinks: React.FC = () => {
  return (
    <div className="space-x-6">
      <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
      <a href="/features" className="text-gray-600 hover:text-gray-900">Features</a>
    </div>
  );
};