export interface ChallengeOption {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  tag: string;
  meaning: string;
  typicalProblems: string[];
  exampleOutcomes: string[];
  relatedCapabilityIds: string[];
  caseStudyIds: string[];
  accentColor?: string;
}

export interface IndustryOption {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export interface PriorityOption {
  id: string;
  label: string;
  category: 'data' | 'tech' | 'automation' | 'financial' | 'scale';
}

export interface JourneyStageOption {
  id: string;
  title: string;
  description: string;
}

export interface Capability {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  benefits: string[];
  coreCompetencies: string[];
  technologies: string[];
  relatedCaseStudyIds: string[];
  iconName: string;
  category: 'analytics' | 'tech' | 'financial' | 'advisory' | 'cloud' | 'ai';
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  serviceTags: string[];
  industry: string;
  challengeSummary: string;
  solutionArchitecture: string[];
  deliveredCapabilities: string[];
  technologiesUsed: string[];
  imageKey: string;
}

export interface FunnelState {
  currentStage: number; // 1 to 5
  selectedChallenges: string[];
  selectedIndustry: string | null;
  selectedPriorities: string[];
  journeyStage: string | null;
  leadData: {
    fullName: string;
    workEmail: string;
    company: string;
    phone?: string;
    projectDetails?: string;
    preferredAction: 'conversation' | 'meeting';
  } | null;
}

export interface RecommendationResult {
  recommendedCapabilities: Capability[];
  relevantCaseStudies: CaseStudy[];
  matchedInsights: {
    title: string;
    detail: string;
  }[];
  confidenceSummary: string;
}
