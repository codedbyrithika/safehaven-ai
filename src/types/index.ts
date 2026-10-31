export type PageId = 'home' | 'safepath' | 'evidence' | 'resources' | 'privacy' | 'about';

export type SituationType = 'threatened' | 'already_shared' | 'unsure';
export type ContentType = 'real' | 'synthetic' | 'unsure';
export type AgeGroup = 'minor' | 'adult';
export type CountryCode = 'US' | 'UK' | 'CA' | 'AU' | 'INTERNATIONAL';

export interface NavigatorInput {
  immediateDanger: boolean;
  situation: SituationType;
  contentType: ContentType;
  ageGroup: AgeGroup;
  country: CountryCode;
  stateOrRegion?: string;
}

export interface ActionPlanStep {
  id: string;
  phase: 'immediate' | '24hours' | 'next_steps' | 'support';
  phaseTitle: string;
  title: string;
  description: string;
  critical: boolean;
  actionUrl?: string;
  actionUrlLabel?: string;
  resourceBadge?: string;
  safetyTip?: string;
}

export interface ActionPlan {
  safetyAlert?: string;
  summary: string;
  primaryChannel: string;
  steps: ActionPlanStep[];
  applicableTools: {
    name: string;
    url: string;
    description: string;
    targetAge: string;
  }[];
  legalContext: string;
  doNotDoList: string[];
}

export interface EvidenceIncident {
  id: string;
  platform: string;
  profileUrlOrHandle: string;
  safeUrl: string;
  approxDateTime: string;
  reportReferenceNumber: string;
  officialChannel: string;
  supportNotes: string;
  evidenceItems: {
    id: string;
    text: string;
    completed: boolean;
  }[];
}

export type ResourceCategory = 
  | 'emergency' 
  | 'child_protection' 
  | 'government' 
  | 'social_media' 
  | 'search_removal';

export interface VerifiedResource {
  id: string;
  name: string;
  category: ResourceCategory;
  country: CountryCode | 'GLOBAL';
  countryLabel: string;
  eligibility: 'all' | 'minors' | 'adults';
  description: string;
  officialUrl: string;
  verificationDate: string;
  keyInstructions: string[];
  contactInfo?: string;
  isCrisis?: boolean;
}
