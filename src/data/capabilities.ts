import { Capability } from './types';

export const BTM_CAPABILITIES: Capability[] = [
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    tagline: 'Turn complex financial data into clearer, more actionable insight.',
    shortDescription: 'Advanced data analytics, robust data management pipelines, and visualization solutions to manage exposure and regulatory reporting.',
    fullOverview: 'BTM Financial provides advanced data analytics, robust data management tools, and visualization solutions to help firms manage exposure to business risks and meet their regulatory requirements. We help you unlock powerful analytics insights by tapping into data pipelines across disparate sources.',
    benefits: [
      'Comprehensive data management and governance',
      'Interactive executive analytics and custom dashboards',
      'Risk, performance, and regulatory reporting support'
    ],
    coreCompetencies: [
      'Data warehousing & data mart design',
      'ETL/ELT orchestration & pipeline monitoring',
      'PowerBI, Tableau & custom web reporting',
      'Data validation & regression anomaly detection'
    ],
    technologies: ['Snowflake', 'PostgreSQL', 'Python', 'Apache Airflow', 'PowerBI', 'Tableau'],
    relatedCaseStudyIds: ['data-warehouse', 'property-loan-analytics', 'data-management-reporting', 'data-mart'],
    iconName: 'BarChart3',
    category: 'analytics'
  },
  {
    id: 'application-services',
    name: 'Application Services',
    tagline: 'Build, engineer, modernize and scale custom financial technology.',
    shortDescription: 'From ideation to POC, deployment, and ongoing enterprise support, delivering financial services software engineering.',
    fullOverview: 'We provide comprehensive consulting services and financial services software engineering together with key technology acceleration solutions. From ideation to POC, to deployment, to all-inclusive support, our professionals harness modern engineering practices for mission-critical institutional operations.',
    benefits: [
      'Tailored full-stack financial software engineering',
      'Legacy modernization & microservices architecture',
      'High-throughput transaction & reporting systems'
    ],
    coreCompetencies: [
      'Web application development (React, Next.js, Node.js, .NET)',
      'Enterprise API integration & middleware',
      'Financial workflow automation engines',
      'Secure multi-tenant cloud architectures'
    ],
    technologies: ['React', 'Next.js', '.NET Core', 'Node.js', 'Python', 'Docker', 'Kubernetes'],
    relatedCaseStudyIds: ['blockchain-lending', 'pipeline-management', 'regression-testing-suite', 'property-loan-analytics'],
    iconName: 'Code2',
    category: 'tech'
  },
  {
    id: 'technology-consulting',
    name: 'Technology Consulting',
    tagline: 'Strategic architectural guidance and digital transformation for financial institutions.',
    shortDescription: 'Modernize infrastructure, design resilient architectures, and optimize software development lifecycle processes.',
    fullOverview: 'Our technology consulting practice partners with institutional leaders to assess legacy debt, architect modern scalable technology stacks, and execute roadmap milestones with precision.',
    benefits: [
      'Technology audit and architectural roadmap design',
      'Vendor evaluation and core systems integration',
      'Performance optimization and security hardening'
    ],
    coreCompetencies: [
      'Cloud readiness & migration blueprints',
      'Data architecture & integration strategies',
      'DevOps and CI/CD automated deployment pipelines',
      'Technical risk & compliance governance'
    ],
    technologies: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'Microservices', 'GraphQL'],
    relatedCaseStudyIds: ['data-management-reporting', 'pipeline-management', 'data-mart'],
    iconName: 'Layers',
    category: 'tech'
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    tagline: 'Secure, scalable, and resilient cloud infrastructure designed for finance.',
    shortDescription: 'Simplify cloud complexity, migrate critical financial workloads, and ensure institutional-grade availability and compliance.',
    fullOverview: 'Enable your organization to innovate faster and consistently deliver better business outcomes with secure cloud observability, automated scaling, and resilient multi-region infrastructure tailored to regulatory mandates.',
    benefits: [
      'Cost-optimized multi-cloud & hybrid cloud architectures',
      'Automated disaster recovery and high availability',
      'Strict financial data isolation and security encryption'
    ],
    coreCompetencies: [
      'AWS & Microsoft Azure infrastructure engineering',
      'Infrastructure as Code (IaC) with Terraform & CloudFormation',
      'Serverless computing & container orchestration',
      'Continuous security monitoring & compliance audits'
    ],
    technologies: ['AWS', 'Microsoft Azure', 'Terraform', 'Docker', 'PostgreSQL', 'Redis'],
    relatedCaseStudyIds: ['pipeline-management', 'data-mart'],
    iconName: 'Cloud',
    category: 'cloud'
  },
  {
    id: 'structured-finance',
    name: 'Structured Finance',
    tagline: 'Precision modeling, deal cash flow waterfall engines, and securitization analytics.',
    shortDescription: 'Deep domain expertise in CMBS, RMBS, ABS, and CLO structures, supporting deal origination, modeling, and ongoing surveillance.',
    fullOverview: 'BTM Financial delivers specialized structured finance modeling and analytics. Our team assists with deal structuring, cash flow waterfall calculations, tie-out validations, loan tape analysis, and automated remittance reporting for fixed income market participants.',
    benefits: [
      'Accurate cash flow waterfall & deal structuring models',
      'Automated loan tape stratification & collateral analysis',
      'Independent model validation & collateral surveillance'
    ],
    coreCompetencies: [
      'CMBS & CLO cash flow waterfall development',
      'Intex, Trepp & Bloomberg data integrations',
      'Remittance & distribution report automation',
      'Credit underwriting & loan tape scrubbing'
    ],
    technologies: ['Python', 'SQL', 'Intex', 'Excel/VBA Engines', 'R', 'PowerBI'],
    relatedCaseStudyIds: ['cmbs-credit-model', 'clo-model-audit', 'term-sheet-model', 'end-to-end-mortgage'],
    iconName: 'PieChart',
    category: 'financial'
  },
  {
    id: 'quant-analytics',
    name: 'Quant Analytics',
    tagline: 'Model governance, mathematical validation, and risk simulation frameworks.',
    shortDescription: 'Quantitative model development, stress testing, statistical backtesting, and regulatory risk parameter validation.',
    fullOverview: 'We support quantitative research teams, risk committees, and asset managers with robust mathematical modeling, statistical validation, regression testing suites, and scenario analysis to ensure model soundness.',
    benefits: [
      'Independent quantitative model validation and governance',
      'Custom stress testing & Monte Carlo risk simulations',
      'Algorithmic backtesting and parameter tuning'
    ],
    coreCompetencies: [
      'Market, credit, and counterparty risk modeling',
      'Statistical regression & machine learning validations',
      'Automated model testing suites and regression benchmarking',
      'FRTB, CECL, and SR 11-7 compliance documentation'
    ],
    technologies: ['Python', 'R', 'NumPy/SciPy', 'C++', 'SQL', 'Jupyter'],
    relatedCaseStudyIds: ['regression-testing-suite', 'cmbs-credit-model', 'clo-model-audit'],
    iconName: 'TrendingUp',
    category: 'financial'
  },
  {
    id: 'fixed-income-equity-analytics',
    name: 'Fixed Income & Equity Analytics',
    tagline: 'Portfolio performance attribution, pricing models, and risk analytics.',
    shortDescription: 'Custom valuation tools, yield curve modeling, spread analysis, and comprehensive portfolio intelligence.',
    fullOverview: 'Empower asset managers and trading desks with granular fixed income yield analysis, duration/convexity modeling, equity factor attribution, and custom portfolio analytics dashboards.',
    benefits: [
      'Real-time yield curve, spread & sensitivity tracking',
      'Custom portfolio risk decomposition and factor attribution',
      'Automated tearsheet generation and performance reporting'
    ],
    coreCompetencies: [
      'Fixed income pricing and scenario analytics',
      'Equity fundamental & factor risk models',
      'Automated daily tearsheet generation',
      'Market data feed integrations'
    ],
    technologies: ['Python', 'Pandas', 'Bloomberg API', 'FactSet', 'SQL', 'React'],
    relatedCaseStudyIds: ['end-to-end-mortgage', 'cmbs-credit-model', 'data-warehouse'],
    iconName: 'LineChart',
    category: 'financial'
  },
  {
    id: 'valuation-advisory-services',
    name: 'Valuation & Advisory Services',
    tagline: 'Rigorous valuation, real estate appraisal review, and transaction support.',
    shortDescription: 'Independent valuation analysis, portfolio reviews, collateral evaluation, and structured transaction advisory.',
    fullOverview: 'Our valuation and advisory specialists combine financial modeling expertise with deep commercial real estate and asset-level knowledge to provide defensible valuations, underwriting reviews, and due diligence support.',
    benefits: [
      'Defensible commercial real estate & portfolio valuations',
      'Loan-level collateral underwriting and risk assessment',
      'Acquisition and disposition due diligence support'
    ],
    coreCompetencies: [
      'Discounted Cash Flow (DCF) & direct capitalization models',
      'Commercial property lease-by-lease underwriting',
      'Mark-to-market portfolio revaluations',
      'Appraisal review and variance analysis'
    ],
    technologies: ['Argus Enterprise', 'Excel Financial Modeling', 'SQL', 'Tableau', 'PowerBI'],
    relatedCaseStudyIds: ['property-loan-analytics', 'term-sheet-model', 'cmbs-credit-model'],
    iconName: 'Scale',
    category: 'advisory'
  },
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & Machine Learning',
    tagline: 'Intelligent automation, natural language processing, and predictive financial intelligence.',
    shortDescription: 'Harness LLMs, document extraction pipelines, predictive models, and intelligent workflows tailored to financial data.',
    fullOverview: 'We build enterprise-grade AI solutions that automate cognitive tasks: extracting data from complex unstructured financial filings, detecting anomalies in loan portfolios, and powering intelligent conversational interfaces for analysts.',
    benefits: [
      'Automated document extraction for financial filings & leases',
      'Predictive default, prepayment, and anomaly detection models',
      'Human-in-the-loop workflow automation to reduce manual overhead'
    ],
    coreCompetencies: [
      'Financial document parsing & OCR extraction pipelines',
      'Custom LLM orchestration, RAG & agentic workflows',
      'Time-series forecasting & tabular ML models',
      'Secure on-premise / private cloud model deployment'
    ],
    technologies: ['Python', 'PyTorch', 'LangChain', 'OpenAI/Azure AI', 'HuggingFace', 'FastAPI'],
    relatedCaseStudyIds: ['human-assisted-automation', 'blockchain-lending', 'data-mart'],
    iconName: 'Cpu',
    category: 'ai'
  },
  {
    id: 'specialized-support-team',
    name: 'Specialized Support Team',
    tagline: 'Dedicated domain specialists and analyst augmentation for financial teams.',
    shortDescription: 'Flexible engagement models pairing seasoned financial analysts and software engineers with your in-house teams.',
    fullOverview: 'Scale your team seamlessly with BTM Financial’s specialized dedicated teams. We provide experienced financial analysts, quant developers, and data engineers who integrate directly into your workflow and time zones.',
    benefits: [
      'Rapid ramp-up with domain-trained financial analysts',
      'Flexible engagement structures (staff augmentation, managed capacity)',
      'High operational continuity and institutional knowledge retention'
    ],
    coreCompetencies: [
      'Deal closing & underwriting support desks',
      'Daily model execution and collateral surveillance',
      'Dedicated offshore development teams (US/India footprint)',
      'Continuous data quality review and operations'
    ],
    technologies: ['Jira', 'GitLab', 'Confluence', 'Agile Pods', 'Enterprise SLAs'],
    relatedCaseStudyIds: ['property-loan-analytics', 'human-assisted-automation', 'pipeline-management'],
    iconName: 'Users',
    category: 'advisory'
  }
];
