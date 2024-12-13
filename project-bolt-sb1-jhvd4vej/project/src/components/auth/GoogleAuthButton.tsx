import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthButtonProps } from '../../types/auth';

export const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({
  disabled,
  className = '',
}) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate authentication
    navigate('/dashboard');
  };

  return (
    <button
      onClick={handleLogin}
      disabled={disabled}
      className={`flex items-center justify-center space-x-2 w-full max-w-md mx-auto px-6 py-3 
        border border-gray-300 rounded-lg bg-white hover:bg-gray-50 
        transition-colors duration-200 disabled:opacity-50 
        disabled:cursor-not-allowed ${className}`}
    >
      <FcGoogle className="text-xl" />
      <span>Continue with Google</span>
    </button>
  );
};