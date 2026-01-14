export type HomeSize = 'small' | 'medium' | 'large' | 'xl';
export type Stories = '1' | '2' | '3+';
export type Condition = 'clean' | 'dusty' | 'dirty' | 'neglected';
export type LastCleaned = 'recent' | '1-2yr' | 'over2yr' | 'never';

export interface AssessmentData {
  zipCode: string;
  homeSize: HomeSize;
  stories: Stories;
  lastCleaned: LastCleaned;
  trackCondition: Condition;
  services: string[];
  name: string;
  phone: string;
  email?: string;
  requestedServices?: string[];
}

export interface Package {
  id: 'basic' | 'deluxe' | 'luxury';
  name: string;
  tagline: string;
  priceRange: [number, number];
  features: string[];
  recommended?: boolean;
  preservationValue: number;
}

export interface AiInsight {
  observation: string;
  riskFactor: string;
  financialImpact: string;
  proTip: string;
  healthScore: number;
}
