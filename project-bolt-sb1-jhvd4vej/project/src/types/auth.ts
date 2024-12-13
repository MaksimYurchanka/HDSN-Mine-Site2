export interface GoogleAuthButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  humanDesignType?: string;
  profileImage?: string;
}