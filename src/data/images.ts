/**
 * Centralized, audited image configuration for BTM Financial Funnel.
 * All assets adhere to:
 * - Institutional financial services and enterprise technology
 * - Restrained, cohesive color palette (Midnight Navy #062039, Slate, Subtle Emerald #009345)
 * - Cinematic, professional lighting (no tacky generic stock photos)
 * - Optimized dimensions and responsive loading
 * - Clear distinction of representative case study precedents
 */

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
  isIllustrative?: boolean;
  category: 'hero' | 'capability' | 'caseStudy' | 'branding';
}

export const BTM_IMAGES: Record<string, ImageAsset> = {
  // -------------------------------------------------------------
  // HERO VISUAL (Right side of hero, 16:10 ratio, cinematic dark console)
  // -------------------------------------------------------------
  heroFinancialAnalytics: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1280&h=800&q=80',
    alt: 'BTM Financial intelligence platform workspace displaying quantitative models and surveillance streams',
    caption: 'Institutional Financial Analytics & Surveillance Workspace',
    category: 'hero'
  },
  btmLogo: {
    src: '/images/btm-logo.svg',
    alt: 'BTM Financial Logo',
    category: 'branding'
  },

  // -------------------------------------------------------------
  // CAPABILITY 01: DATA & ANALYTICS (Analyst examining dashboard)
  // -------------------------------------------------------------
  dataAnalytics: {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&h=625&q=80',
    alt: 'Financial analyst examining data intelligence dashboards and metrics in an institutional environment',
    caption: 'Data Engineering, Pipeline Automation & Executive Dashboards',
    category: 'capability'
  },

  // -------------------------------------------------------------
  // CAPABILITY 02: TECHNOLOGY & APPLICATION SERVICES (Enterprise tech workspace)
  // -------------------------------------------------------------
  technologyConsulting: {
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&h=625&q=80',
    alt: 'Enterprise financial software engineering and cloud microservices architecture',
    caption: 'Financial Services Software Engineering & Microservices',
    category: 'capability'
  },
  applicationServices: {
    src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&h=625&q=80',
    alt: 'Enterprise software development workspace for custom financial technology applications',
    caption: 'Full-Stack Custom Financial Technology Development',
    category: 'capability'
  },

  // -------------------------------------------------------------
  // CAPABILITY 03: AI & AUTOMATION (Dark neural network & data pipelines)
  // -------------------------------------------------------------
  aiAutomation: {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&h=625&q=80',
    alt: 'Artificial intelligence data network visualization and intelligent workflow automation',
    caption: 'LLM Document Parsing, OCR Extraction & Neural Models',
    category: 'capability'
  },

  // -------------------------------------------------------------
  // CAPABILITY 04: CLOUD & INFRASTRUCTURE (Secure modern datacenter)
  // -------------------------------------------------------------
  cloudInfrastructure: {
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&h=625&q=80',
    alt: 'Enterprise cloud infrastructure visualization and secure datacenter servers',
    caption: 'Secure VPC Cloud Deployments & High-Availability Scaling',
    category: 'capability'
  },

  // -------------------------------------------------------------
  // CAPABILITY 05: STRUCTURED FINANCE (CRE towers & capital markets)
  // -------------------------------------------------------------
  structuredFinance: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&h=625&q=80',
    alt: 'Commercial real estate finance, capital markets, and structured debt modeling',
    caption: 'CMBS/CLO Waterfall Engines & Securitization Analytics',
    category: 'capability'
  },

  // -------------------------------------------------------------
  // CAPABILITY 06: QUANT & FINANCIAL ANALYTICS (Mathematical charts & yield curves)
  // -------------------------------------------------------------
  quantAnalytics: {
    src: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1000&h=625&q=80',
    alt: 'Quantitative finance analytics, mathematical models, and statistical backtesting simulation',
    caption: 'Model Governance, Regression Testing & Statistical Backtesting',
    category: 'capability'
  },
  financialAnalytics: {
    src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&h=625&q=80',
    alt: 'Quantitative market data visualization, yield curves, and risk portfolio attribution',
    caption: 'Fixed Income Yield Analysis & Portfolio Risk Attribution',
    category: 'capability'
  },
  fixedIncomeEquityAnalytics: {
    src: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1000&h=625&q=80',
    alt: 'Fixed income portfolio surveillance and pricing curve analytics',
    caption: 'Granular Yield Curve Modeling & Automated Tearsheets',
    category: 'capability'
  },

  // -------------------------------------------------------------
  // CAPABILITY 07: VALUATION & ADVISORY (Real estate & deal underwriting)
  // -------------------------------------------------------------
  valuationAdvisory: {
    src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&h=625&q=80',
    alt: 'Commercial real estate valuation analyst, property analytics, and appraisal workspace',
    caption: 'Commercial Property Underwriting & Defensible Appraisals',
    category: 'capability'
  },
  advisory: {
    src: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&h=625&q=80',
    alt: 'Executive financial advisory, deal review, and strategic consulting',
    caption: 'Independent Valuation & Structured Transaction Due Diligence',
    category: 'capability'
  },
  specializedSupportTeam: {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&h=625&q=80',
    alt: 'Dedicated financial analyst pods and domain specialists',
    caption: 'Dedicated Financial Analyst Pods & Pod Augmentation',
    category: 'capability'
  },

  // -------------------------------------------------------------
  // CASE STUDY PRECEDENTS (Clearly tagged as representative illustrative precedents)
  // -------------------------------------------------------------
  caseStudyPropertyAnalytics: {
    src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'Property and Loan Level Data Processing & Analytics (Representative Precedent)',
    caption: 'Representative Illustrative Precedent',
    isIllustrative: true,
    category: 'caseStudy'
  },
  caseStudyDataWarehouse: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'Data Warehouse and Executive Dashboard / Tear Sheet (Representative Precedent)',
    caption: 'Representative Illustrative Precedent',
    isIllustrative: true,
    category: 'caseStudy'
  },
  caseStudyAutomation: {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'Human Assisted Automation Suite (Representative Precedent)',
    caption: 'Representative Illustrative Precedent',
    isIllustrative: true,
    category: 'caseStudy'
  },
  caseStudyDataManagement: {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'Data Management & Reporting Tool (Representative Precedent)',
    caption: 'Representative Illustrative Precedent',
    isIllustrative: true,
    category: 'caseStudy'
  },
  caseStudyCmbs: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'CMBS Credit Model & Surveillance (Representative Precedent)',
    caption: 'Representative Illustrative Precedent',
    isIllustrative: true,
    category: 'caseStudy'
  },
  caseStudyMortgageAnalytics: {
    src: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'End-to-End Mortgage Analytics Platform (Representative Precedent)',
    caption: 'Representative Illustrative Precedent',
    isIllustrative: true,
    category: 'caseStudy'
  },
  caseStudyBlockchainLending: {
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'High-Throughput Ledger & Financial API Architecture (Representative Precedent)',
    caption: 'Representative Illustrative Precedent',
    isIllustrative: true,
    category: 'caseStudy'
  },
  caseStudyDataMart: {
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'High-Performance Columnar Data Mart (Representative Precedent)',
    caption: 'Representative Illustrative Precedent',
    isIllustrative: true,
    category: 'caseStudy'
  },
  caseStudyRegressionSuite: {
    src: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'Quantitative Model Regression Testing Suite (Representative Precedent)',
    caption: 'Representative Illustrative Precedent',
    isIllustrative: true,
    category: 'caseStudy'
  },
  caseStudyTermSheet: {
    src: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'Dynamic Term Sheet Model & Sizing Calculator (Representative Precedent)',
    caption: 'Representative Illustrative Precedent',
    isIllustrative: true,
    category: 'caseStudy'
  },
  caseStudyCloAudit: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'CLO Model Audit & Cash Flow Validation (Representative Precedent)',
    caption: 'Representative Illustrative Precedent',
    isIllustrative: true,
    category: 'caseStudy'
  },
  caseStudyPipelineManagement: {
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'Cloud-Native Deal Pipeline Management Platform (Representative Precedent)',
    caption: 'Representative Illustrative Precedent',
    isIllustrative: true,
    category: 'caseStudy'
  }
};

export function getImage(key: string): ImageAsset {
  return BTM_IMAGES[key] || BTM_IMAGES.heroFinancialAnalytics;
}
