export interface HumanDesignType {
    id: string;
    name: string;
    description: string;
  }
  
  export interface CompatibilityScore {
    type: string;
    matchPercentage: number;
    strengths: string[];
    challenges: string[];
  }
  
  export interface UserCompatibilityProfile {
    userType: HumanDesignType;
    compatibleTypes: CompatibilityScore[];
  }
  