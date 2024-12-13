import React from 'react';
import { GoogleAuthButton } from '../../components/auth/GoogleAuthButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Discover Your Human Design Journey
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with like-minded individuals, share experiences, and explore your
          unique Human Design blueprint in our growing community.
        </p>
        <GoogleAuthButton />
      </div>
    </section>
  );
};