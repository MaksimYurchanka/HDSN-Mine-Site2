import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16">
          <Logo />
          <Navigation />
        </nav>
      </div>
    </header>
  );
};