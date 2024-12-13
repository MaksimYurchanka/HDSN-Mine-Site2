import React from 'react';
import { FeatureCard } from './FeatureCard';
import { BsPerson } from 'react-icons/bs';
import { BiConnection } from 'react-icons/bi';
import { IoBookOutline } from 'react-icons/io5';

export const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: BsPerson,
      title: "Personal Profile",
      description: "Create your unique Human Design profile and share your journey"
    },
    {
      icon: BiConnection,
      title: "Connect",
      description: "Find and connect with others who share your Human Design type"
    },
    {
      icon: IoBookOutline,
      title: "Learn",
      description: "Access resources and insights about Human Design"
    }
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-16">
        Why Join Our Community?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};