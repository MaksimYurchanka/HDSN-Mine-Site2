import React from 'react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <Logo />
      <NavLinks />
    </nav>
  );
};