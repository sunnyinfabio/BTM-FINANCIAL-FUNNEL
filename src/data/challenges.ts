import { ChallengeOption } from './types';

export const BTM_CHALLENGES: ChallengeOption[] = [
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    shortDescription: 'Turn complex information into actionable insight.',
    iconName: 'BarChart3',
    tag: 'Core Discipline',
    meaning: 'Centralize, standardize, and visualize disparate financial datasets to drive faster, data-backed decisions and regulatory readiness.',
    typicalProblems: [
      'Dispersed data silos in legacy spreadsheets and disconnected databases',
      'Slow manual compilation of monthly executive and investor reports',
      'Inconsistent data definitions and lack of centralized validation rules',
      'Difficulty extracting actionable intelligence from unstructured filings'
    ],
    exampleOutcomes: [
      'Automated data warehouse with unified single source of truth',
      'Interactive executive dashboards and real-time drill-down tearsheets',
      'Automated data quality checks and anomaly alerts across pipelines',
      'Drastically reduced reporting turnaround cycles'
    ],
    relatedCapabilityIds: ['data-analytics', 'application-services', 'technology-consulting'],
    caseStudyIds: ['data-warehouse', 'property-loan-analytics', 'data-management-reporting']
  },
  {
    id: 'tech-applications',
    title: 'Technology & Applications',
    shortDescription: 'Build, modernize or scale financial technology.',
    iconName: 'Code2',
    tag: 'Software Engineering',
    meaning: 'Engineer robust web platforms, modernize monolithic legacy codebases, and develop scalable custom financial applications.',
    typicalProblems: [
      'Outdated desktop tools struggling with modern enterprise data scale',
      'High maintenance cost and fragility of legacy internal applications',
      'Fragmented user experiences across multiple third-party point solutions',
      'Need for secure, cloud-native web tools with granular role-based access'
    ],
    exampleOutcomes: [
      'Modern, high-performance web applications built on React/Next.js and robust microservices',
      'Seamless API integrations with major financial data providers',
      'Scalable, cloud-native deployments with automated CI/CD pipelines',
      'Intuitive user interfaces tailored for institutional analysts'
    ],
    relatedCapabilityIds: ['application-services', 'technology-consulting', 'cloud-computing'],
    caseStudyIds: ['blockchain-lending', 'pipeline-management', 'regression-testing-suite']
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    shortDescription: 'Automate processes and unlock intelligent workflows.',
    iconName: 'Cpu',
    tag: 'Intelligent Systems',
    meaning: 'Deploy machine learning, natural language extraction, and robotic workflow automation to eliminate repetitive manual processes.',
    typicalProblems: [
      'Heavy analyst hours spent on copy-pasting data between documents and models',
      'Manual parsing of lease agreements, financial statements, and loan tapes',
      'Repetitive compliance checks prone to human fatigue and transcription error',
      'Unstructured text data trapped inside PDFs and scanned documents'
    ],
    exampleOutcomes: [
      'Human-assisted automation suite accelerating document ingestion',
      'Automated OCR and LLM-powered extraction with audit trails',
      'Intelligent exception handling and automated triage workflows',
      'Significant reduction in manual processing hours per transaction'
    ],
    relatedCapabilityIds: ['ai-ml', 'data-analytics', 'application-services'],
    caseStudyIds: ['human-assisted-automation', 'blockchain-lending', 'data-mart']
  },
  {
    id: 'financial-analytics',
    title: 'Financial Analytics',
    shortDescription: 'Improve modeling, valuation, risk and portfolio insight.',
    iconName: 'TrendingUp',
    tag: 'Quantitative Modeling',
    meaning: 'Strengthen quantitative models, risk stress testing, cash flow waterfalls, and portfolio analytics across asset classes.',
    typicalProblems: [
      'Complex cash flow waterfalls requiring independent tie-out validation',
      'Lack of automated regression suites for proprietary risk models',
      'Difficulty aggregating loan-level risks across large multi-borrower portfolios',
      'Evolving regulatory requirements for model governance (SR 11-7, CECL)'
    ],
    exampleOutcomes: [
      'Audited and validated cash flow models for structured debt (CMBS, CLO, RMBS)',
      'Automated model regression testing suites benchmarking code changes',
      'Comprehensive loan-level risk analytics and yield curve modeling',
      'Defensible, documented modeling frameworks ready for audit review'
    ],
    relatedCapabilityIds: ['quant-analytics', 'structured-finance', 'fixed-income-equity-analytics'],
    caseStudyIds: ['cmbs-credit-model', 'regression-testing-suite', 'clo-model-audit', 'end-to-end-mortgage']
  },
  {
    id: 'cloud-infra',
    title: 'Cloud & Infrastructure',
    shortDescription: 'Modernize infrastructure and improve scalability.',
    iconName: 'Cloud',
    tag: 'Enterprise Cloud',
    meaning: 'Architect, migrate, and secure enterprise cloud infrastructure to support intensive analytical workloads and strict compliance.',
    typicalProblems: [
      'On-premise infrastructure bottlenecks during peak calculation runs',
      'Uncontrolled cloud infrastructure expenditures and inefficient resource allocation',
      'Compliance and security concerns regarding sensitive client financial data',
      'Lack of automated failover and disaster recovery capabilities'
    ],
    exampleOutcomes: [
      'Secure, multi-region cloud deployment on AWS or Azure with VPC isolation',
      'Elastic compute nodes scaling dynamically for batch financial simulations',
      'Infrastructure as Code (Terraform) ensuring repeatable, auditable deployments',
      'Compliance-ready environment adhering to institutional security standards'
    ],
    relatedCapabilityIds: ['cloud-computing', 'technology-consulting', 'application-services'],
    caseStudyIds: ['pipeline-management', 'data-mart']
  },
  {
    id: 'advisory-valuation',
    title: 'Advisory & Valuation',
    shortDescription: 'Strengthen financial decisions with specialized expertise.',
    iconName: 'Scale',
    tag: 'Advisory & Real Estate',
    meaning: 'Leverage independent property valuation, appraisal review, and structured deal underwriting support from seasoned domain specialists.',
    typicalProblems: [
      'High volume of real estate underwriting requests creating closing delays',
      'Inconsistent valuation methodologies across diverse geographic markets',
      'Need for independent third-party asset reviews for credit committees',
      'Complex lease structures requiring granular lease-by-lease cash flow modeling'
    ],
    exampleOutcomes: [
      'Standardized valuation models with thorough market rent benchmarking',
      'Defensible appraisal reviews and collateral underwriting packages',
      'Dedicated analyst teams scaling capacity during high-volume deal cycles',
      'Clear, presentation-ready investment committee memorandum packages'
    ],
    relatedCapabilityIds: ['valuation-advisory-services', 'structured-finance', 'specialized-support-team'],
    caseStudyIds: ['property-loan-analytics', 'term-sheet-model', 'cmbs-credit-model']
  },
  {
    id: 'something-else',
    title: 'Custom Advisory or Hybrid Challenge',
    shortDescription: 'Have a bespoke requirement or multidisciplinary initiative?',
    iconName: 'Sparkles',
    tag: 'Bespoke Initiative',
    meaning: 'Partner with BTM to scope a tailored cross-disciplinary engagement combining software engineering, data science, and financial advisory.',
    typicalProblems: [
      'Cross-functional initiatives requiring both deep quantitative finance and modern software engineering',
      'Uncertainty about the right technology roadmap or build-vs-buy decisions',
      'Requirement for specialized talent augmentation to accelerate an internal project'
    ],
    exampleOutcomes: [
      'Comprehensive discovery workshop and technical architectural blueprint',
      'Proof-of-concept prototype delivered in rapid iterative sprints',
      'Dedicated agile pod combining financial analysts and senior software engineers'
    ],
    relatedCapabilityIds: ['technology-consulting', 'application-services', 'specialized-support-team'],
    caseStudyIds: ['pipeline-management', 'blockchain-lending']
  }
];
