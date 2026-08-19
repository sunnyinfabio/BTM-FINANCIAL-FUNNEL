import { CaseStudy } from './types';

export const BTM_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'property-loan-analytics',
    title: 'Property and Loan Level Data Processing & Analytics',
    subtitle: 'Streamlining multi-property underwriting, data aggregation, and valuation reporting.',
    category: 'Valuation & Data Analytics',
    serviceTags: ['Automation', 'Application Services', 'Valuation and Advisory Services', 'Data & Analytics'],
    industry: 'Commercial Real Estate & Banking',
    challengeSummary: 'Managing and validating heterogeneous loan-level and property-level files across disparate originator formats created substantial processing bottlenecks and delayed underwriting decisions.',
    solutionArchitecture: [
      'Engineered an automated ingestion pipeline to standardize property and loan data tapes.',
      'Configured customizable rule-based validation engines for variance checks.',
      'Integrated interactive underwriting tear sheets and automated variance reporting.'
    ],
    deliveredCapabilities: [
      'Automated tape ingestion and cross-field validation',
      'Underwriting dashboard with property metrics drill-down',
      'Exportable reporting packages for credit risk committees'
    ],
    technologiesUsed: ['Python', 'SQL', 'React', 'FastAPI', 'Pandas'],
    imageKey: 'caseStudyPropertyAnalytics'
  },
  {
    id: 'data-warehouse',
    title: 'Data Warehouse and Dashboard / Tear Sheet',
    subtitle: 'Unified enterprise data warehouse and executive dashboard suite.',
    category: 'Data & Analytics',
    serviceTags: ['Automation', 'Application Services', 'Data & Analytics'],
    industry: 'Asset Management & Banking',
    challengeSummary: 'Key decision-makers faced fragmented visibility into portfolio health, relying on disparate spreadsheets with disconnected data updates and manual compilation cycles.',
    solutionArchitecture: [
      'Architected a centralized data warehouse aggregating multi-source portfolio and transaction data.',
      'Implemented automated ETL workflows with scheduled synchronization and reconciliation.',
      'Developed interactive dynamic tear sheets and executive BI dashboards.'
    ],
    deliveredCapabilities: [
      'Single source of truth for portfolio metrics and performance',
      'Automated daily/monthly tear sheet generation',
      'Granular role-based access control and export capabilities'
    ],
    technologiesUsed: ['Snowflake', 'Python', 'PowerBI', 'PostgreSQL', 'Airflow'],
    imageKey: 'caseStudyDataWarehouse'
  },
  {
    id: 'human-assisted-automation',
    title: 'Human Assisted Automation Suite',
    subtitle: 'AI-assisted document parsing with human-in-the-loop validation.',
    category: 'AI & Automation',
    serviceTags: ['Artificial Intelligence', 'Data & Analytics', 'Automation', 'Business Process Outsourcing'],
    industry: 'Institutional Finance & Servicing',
    challengeSummary: 'Processing voluminous complex financial documents (contracts, financial disclosures, and lease agreements) required extensive manual analyst review and transcription.',
    solutionArchitecture: [
      'Built a machine-learning extraction engine tailored for dense financial document structures.',
      'Designed an intuitive verification UI where analysts review model confidence scores and flagged discrepancies.',
      'Implemented an active-learning feedback loop continuously improving extraction precision.'
    ],
    deliveredCapabilities: [
      'Automated OCR and contextual entity extraction',
      'Human-in-the-loop reconciliation workbench',
      'Audit logging and compliance traceability'
    ],
    technologiesUsed: ['Python', 'PyTorch', 'FastAPI', 'React', 'Docker'],
    imageKey: 'caseStudyAutomation'
  },
  {
    id: 'data-management-reporting',
    title: 'Data Management & Reporting Tool',
    subtitle: 'End-to-end data lifecycle governance and regulatory report builder.',
    category: 'Technology Consulting',
    serviceTags: ['Technology Consulting', 'Data & Analytics', 'Automation', 'Application Services'],
    industry: 'Commercial & Investment Banking',
    challengeSummary: 'Complex regulatory reporting demands required strict data lineage, auditability, and validation rules that existing manual processes could not reliably support.',
    solutionArchitecture: [
      'Designed a modular web application for end-to-end data governance and report authoring.',
      'Built automated data validation pipelines with real-time error flags before final sign-off.',
      'Implemented automated report generators producing compliant formatted disclosures.'
    ],
    deliveredCapabilities: [
      'Comprehensive data lineage tracking and version control',
      'Rule-based validation engine and workflow approvals',
      'One-click regulatory disclosure generation'
    ],
    technologiesUsed: ['Next.js', 'Node.js', 'PostgreSQL', 'Python', 'AWS'],
    imageKey: 'caseStudyDataManagement'
  },
  {
    id: 'cmbs-credit-model',
    title: 'CMBS Credit Model',
    subtitle: 'Precision credit modeling, cash flow stress testing, and tranche surveillance.',
    category: 'Structured Finance & Quant Analytics',
    serviceTags: ['Application Services', 'Data & Analytics', 'Technology Consulting', 'Structured Finance', 'Fixed Income & Equity Analytics'],
    industry: 'Structured Finance & Debt Funds',
    challengeSummary: 'Assessing credit risk across commercial mortgage-backed securities required executing sophisticated scenario analysis and stress-testing on large underlying loan pools.',
    solutionArchitecture: [
      'Engineered a high-performance credit modeling engine calculating loan-level default probabilities and recovery expectations.',
      'Incorporated multi-factor macroeconomic stress scenarios and interest rate shock tests.',
      'Built a dashboard for loan tape surveillance and tranche rating evaluation.'
    ],
    deliveredCapabilities: [
      'Loan-level and deal-level credit loss modeling',
      'Macroeconomic stress testing framework',
      'Interactive cash flow waterfall and loss distribution charts'
    ],
    technologiesUsed: ['Python', 'Intex SDK', 'NumPy', 'React', 'SQL'],
    imageKey: 'caseStudyCmbs'
  },
  {
    id: 'end-to-end-mortgage',
    title: 'End-to-End Mortgage Analytics',
    subtitle: 'Comprehensive portfolio analytics, prepayment modeling, and valuation engine.',
    category: 'Fixed Income & Analytics',
    serviceTags: ['Application Services', 'Data & Analytics', 'Technology Consulting', 'Structured Finance', 'Fixed Income & Equity Analytics'],
    industry: 'Mortgage Banking & Institutional Investors',
    challengeSummary: 'Managing extensive residential and commercial mortgage portfolios required unified analytics covering origination pipeline analysis, prepayment forecasting, and secondary market valuation.',
    solutionArchitecture: [
      'Developed an integrated web portal consolidating loan origination, servicing, and performance feeds.',
      'Integrated econometric prepayment and credit risk models.',
      'Delivered pricing engines supporting mark-to-market valuations and risk sensitivities.'
    ],
    deliveredCapabilities: [
      'Consolidated mortgage portfolio surveillance',
      'Prepayment and default curve projections',
      'Secondary market bid-tape analysis and valuation'
    ],
    technologiesUsed: ['Python', 'Pandas', 'C# / .NET', 'React', 'SQL Server'],
    imageKey: 'caseStudyMortgageAnalytics'
  },
  {
    id: 'blockchain-lending',
    title: 'Blockchain & AI Enabled Lending Platform',
    subtitle: 'Decentralized verification and AI credit scoring for digital lending workflows.',
    category: 'Application Services & AI',
    serviceTags: ['Artificial Intelligence', 'Application Services', 'Data & Analytics', 'Technology Consulting', 'Automation'],
    industry: 'FinTech & Alternative Lending',
    challengeSummary: 'Alternative lending workflows faced friction in multi-party verification, borrower documentation validation, and rapid credit underwriting.',
    solutionArchitecture: [
      'Engineered a microservices-based lending platform with secure identity and contract ledger integrations.',
      'Integrated machine-learning credit scorecards analyzing multi-dimensional applicant data.',
      'Built streamlined borrower and lender portals with automated milestone approvals.'
    ],
    deliveredCapabilities: [
      'Automated borrower intake and verification workflow',
      'AI credit assessment and risk classification engine',
      'Tamper-evident audit trails for loan origination events'
    ],
    technologiesUsed: ['Next.js', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    imageKey: 'caseStudyBlockchainLending'
  },
  {
    id: 'data-mart',
    title: 'Data Mart Platform',
    subtitle: 'High-speed specialized data mart for quantitative research and reporting.',
    category: 'Cloud & Data Analytics',
    serviceTags: ['Artificial Intelligence', 'Application Services', 'Data & Analytics', 'Technology Consulting', 'Automation'],
    industry: 'Hedge Funds & Investment Management',
    challengeSummary: 'Quantitative analysts experienced slow query latencies when running complex historical simulations across terabytes of heterogeneous market and fundamental data.',
    solutionArchitecture: [
      'Designed and deployed an optimized columnar data mart partitioned for time-series analytics.',
      'Implemented automated pipeline orchestration with intraday reconciliation.',
      'Provided low-latency API access for research notebooks and production dashboards.'
    ],
    deliveredCapabilities: [
      'Sub-second query performance for complex quantitative queries',
      'Automated historical data versioning and point-in-time querying',
      'Direct integration with Python and R research environments'
    ],
    technologiesUsed: ['Snowflake', 'AWS', 'Python', 'Apache Airflow', 'FastAPI'],
    imageKey: 'caseStudyDataMart'
  },
  {
    id: 'regression-testing-suite',
    title: 'Regression Testing Suite Application',
    subtitle: 'Automated test suite and model benchmark validation for quantitative engines.',
    category: 'Quant Analytics',
    serviceTags: ['Quant Analytics', 'Application Services', 'Data & Analytics', 'Technology Consulting', 'Automation'],
    industry: 'Investment Banking & Risk Management',
    challengeSummary: 'Updating financial valuation models and algorithms posed high operational risk due to lack of automated regression testing against historical benchmark results.',
    solutionArchitecture: [
      'Architected a dedicated regression testing framework running automated comparison suites against gold-standard baseline outputs.',
      'Implemented tolerance-based numerical comparison engines highlighting subtle discrepancies.',
      'Created interactive test reports detailing execution runs, parameter sensitivities, and diffs.'
    ],
    deliveredCapabilities: [
      'Automated batch regression testing across model versions',
      'Numerical tolerance threshold monitoring and anomaly flagging',
      'Audit-ready validation logs for model governance committees'
    ],
    technologiesUsed: ['Python', 'PyTest', 'React', 'Docker', 'PostgreSQL'],
    imageKey: 'caseStudyRegressionSuite'
  },
  {
    id: 'term-sheet-model',
    title: 'Term Sheet Model',
    subtitle: 'Structured deal term sheet generator, underwriting calculator, and pricing tool.',
    category: 'Structured Finance & Advisory',
    serviceTags: ['Structured Finance', 'Application Services', 'Data & Analytics', 'Technology Consulting', 'Automation'],
    industry: 'Commercial Real Estate & Private Credit',
    challengeSummary: 'Deal teams needed a standardized, error-free tool to evaluate deal terms, test debt service coverage ratios (DSCR), and generate client-ready term sheets rapidly.',
    solutionArchitecture: [
      'Created a comprehensive dynamic modeling tool with flexible amortization, interest rate, and fee schedules.',
      'Built automated sensitivity matrices testing varying exit cap rates and interest rate environments.',
      'Enabled one-click generation of polished PDF term sheets and executive summaries.'
    ],
    deliveredCapabilities: [
      'Dynamic loan sizing and DSCR/debt yield calculator',
      'Interactive scenario sensitivity tables',
      'Automated export of branded term sheet documentation'
    ],
    technologiesUsed: ['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS'],
    imageKey: 'caseStudyTermSheet'
  },
  {
    id: 'clo-model-audit',
    title: 'Audit & Validation Reporting of CLO Model',
    subtitle: 'Independent model audit, cash flow validation, and test compliance reporting.',
    category: 'Structured Finance',
    serviceTags: ['Structured Finance', 'Data & Analytics', 'Quant Analytics'],
    industry: 'Collateralized Loan Obligations (CLO) & Debt Funds',
    challengeSummary: 'CLO managers and trustees required independent verification of complex cash flow priority of payments, coverage tests (OC/IC), and collateral quality tests.',
    solutionArchitecture: [
      'Performed rigorous code-level and calculation-level tie-outs of the collateralized loan obligation model.',
      'Replicated waterfall logic independently in Python to benchmark monthly trustee distribution reports.',
      'Delivered detailed model audit reports outlining validation findings and test criteria.'
    ],
    deliveredCapabilities: [
      'Independent cash flow waterfall validation and tie-out analysis',
      'Collateral quality test verification (WARF, WAS, Diversity Score)',
      'Formal audit documentation ready for rating agency and investor review'
    ],
    technologiesUsed: ['Python', 'Intex Calc SDK', 'SQL', 'Excel Financial Engineering'],
    imageKey: 'caseStudyCloAudit'
  },
  {
    id: 'pipeline-management',
    title: 'Pipeline Management System',
    subtitle: 'Cloud-native deal pipeline, underwriting workflow, and task management platform.',
    category: 'Cloud & Application Services',
    serviceTags: ['Cloud', 'Application Services', 'Business Process Outsourcing', 'Data & Analytics', 'Technology Consulting', 'Automation'],
    industry: 'Commercial Real Estate & Investment Banking',
    challengeSummary: 'Tracking hundreds of active deal opportunities across regional underwriting teams suffered from scattered email threads, disparate file versions, and lack of real-time milestone tracking.',
    solutionArchitecture: [
      'Designed and deployed a responsive cloud portal with Kanban and tabular pipeline tracking.',
      'Integrated real-time notification triggers, document repositories, and task assignment workflows.',
      'Built executive pipeline summary dashboards highlighting volume, stage velocity, and conversion.'
    ],
    deliveredCapabilities: [
      'Centralized deal lifecycle management from intake to closing',
      'Automated milestone tracking and document repository',
      'Executive pipeline analytics and capacity forecasting'
    ],
    technologiesUsed: ['Next.js', 'AWS Serverless', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
    imageKey: 'caseStudyPipelineManagement'
  }
];
