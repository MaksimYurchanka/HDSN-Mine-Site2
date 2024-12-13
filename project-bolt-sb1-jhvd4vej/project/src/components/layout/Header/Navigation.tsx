import React from 'react';
import { NavigationLink } from './NavigationLink';

export const Navigation: React.FC = () => {
  const links = [
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
  ];

  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <NavigationLink key={link.href} {...link} />
      ))}
    </div>
  );
};