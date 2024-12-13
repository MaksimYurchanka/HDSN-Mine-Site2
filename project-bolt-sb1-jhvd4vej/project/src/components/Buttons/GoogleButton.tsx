import React from 'react';
import { FcGoogle } from 'react-icons/fc';

export const GoogleButton: React.FC = () => {
  return (
    <button className="flex items-center justify-center space-x-2 w-full max-w-md mx-auto px-6 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
      <FcGoogle className="text-xl" />
      <span>Continue with Google</span>
    </button>
  );
};