import React from 'react';
import { GoogleButton } from '../Buttons/GoogleButton';

export const Hero: React.FC = () => {
  return (
    <div className="text-center py-20 px-4 bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Discover Your Human Design Journey
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Connect with like-minded individuals, share experiences, and explore your
        unique Human Design blueprint in our growing community.
      </p>
      <GoogleButton />
    </div>
  );
};