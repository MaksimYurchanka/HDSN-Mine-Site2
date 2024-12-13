import React from 'react';
import { ProfileSection } from './ProfileSection';
import { InsightsSection } from './InsightsSection';
import { CommunitySection } from './CommunitySection';

export const MainUserPage: React.FC = () => {
  return (
    <main className="pt-20 px-4 pb-12 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-6">
        <ProfileSection />
        <InsightsSection />
        <CommunitySection />
      </div>
    </main>
  );
};