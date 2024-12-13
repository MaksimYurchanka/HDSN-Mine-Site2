import React from 'react';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';

export const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
};