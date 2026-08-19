import { IndustryOption, PriorityOption, JourneyStageOption } from './types';

export const BTM_INDUSTRIES: IndustryOption[] = [
  {
    id: 'investment-banking',
    name: 'Investment Banking',
    iconName: 'Building2',
    description: 'Capital markets, M&A advisory, underwriting & structured transactions.'
  },
  {
    id: 'asset-management',
    name: 'Asset Management',
    iconName: 'TrendingUp',
    description: 'Portfolio surveillance, fixed income & equity analytics, fund operations.'
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    iconName: 'Landmark',
    description: 'Commercial real estate finance, loan underwriting & property valuation.'
  },
  {
    id: 'hedge-fund',
    name: 'Hedge Fund',
    iconName: 'LineChart',
    description: 'Quantitative analytics, algorithmic data pipelines & risk attribution.'
  },
  {
    id: 'insurance',
    name: 'Insurance',
    iconName: 'ShieldCheck',
    description: 'Asset-liability modeling, portfolio risk reporting & regulatory compliance.'
  },
  {
    id: 'pe-vc',
    name: 'Private Equity / Venture Capital',
    iconName: 'Briefcase',
    description: 'Deal screening, portfolio data harmonization & value creation analytics.'
  },
  {
    id: 'commercial-banking',
    name: 'Commercial / Corporate Banking',
    iconName: 'Coins',
    description: 'Loan origination, credit risk modeling & pipeline management.'
  },
  {
    id: 'other',
    name: 'Other',
    iconName: 'Globe',
    description: 'Special servicers, institutional investors & financial technology.'
  }
];

export const BTM_PRIORITIES: PriorityOption[] = [
  { id: 'reduce-manual-work', label: 'Reduce manual work', category: 'automation' },
  { id: 'improve-reporting', label: 'Improve reporting', category: 'data' },
  { id: 'improve-data-quality', label: 'Improve data quality', category: 'data' },
  { id: 'modernize-tech', label: 'Modernize technology', category: 'tech' },
  { id: 'improve-risk-analytics', label: 'Improve risk analytics', category: 'financial' },
  { id: 'build-new-app', label: 'Build a new application', category: 'tech' },
  { id: 'automate-workflows', label: 'Automate workflows', category: 'automation' },
  { id: 'scale-team', label: 'Scale an existing team', category: 'scale' },
  { id: 'explore-ai', label: 'Explore AI', category: 'automation' },
  { id: 'improve-valuation-modeling', label: 'Improve valuation / modeling', category: 'financial' }
];

export const BTM_JOURNEY_STAGES: JourneyStageOption[] = [
  {
    id: 'exploring',
    title: 'Exploring',
    description: 'Investigating potential solutions & orientation'
  },
  {
    id: 'defining-requirements',
    title: 'Defining requirements',
    description: 'Scoping technical specifications & roadmap'
  },
  {
    id: 'ready-to-build',
    title: 'Ready to build',
    description: 'Clear objective, seeking execution team'
  },
  {
    id: 'modernizing',
    title: 'Modernizing',
    description: 'Upgrading existing tools or data pipelines'
  },
  {
    id: 'scaling',
    title: 'Scaling',
    description: 'Expanding capacity, throughput or team size'
  }
];
