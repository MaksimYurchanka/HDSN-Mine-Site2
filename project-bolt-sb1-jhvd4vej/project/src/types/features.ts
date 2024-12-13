import { IconType } from 'react-icons';

export interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

export interface FeatureCardProps extends Feature {
  className?: string;
}