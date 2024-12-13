import { BsPerson, BsPeopleFill } from 'react-icons/bs';
import { IoBookOutline } from 'react-icons/io5';
import { Feature } from '../types/features';

export const features: Feature[] = [
  {
    icon: BsPerson,
    title: "Personal Profile",
    description: "Create your unique Human Design profile and share your journey"
  },
  {
    icon: BsPeopleFill,
    title: "Connect",
    description: "Find and connect with others who share your Human Design type"
  },
  {
    icon: IoBookOutline,
    title: "Learn",
    description: "Access resources and insights about Human Design"
  }
];