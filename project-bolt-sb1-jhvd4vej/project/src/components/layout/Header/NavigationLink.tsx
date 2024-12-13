import React from 'react';

interface NavigationLinkProps {
  href: string;
  label: string;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
    >
      {label}
    </a>
  );
};