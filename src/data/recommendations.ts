import { BTM_CAPABILITIES } from './capabilities';
import { BTM_CASE_STUDIES } from './caseStudies';
import { BTM_CHALLENGES } from './challenges';
import { BTM_INDUSTRIES, BTM_PRIORITIES, BTM_JOURNEY_STAGES } from './industries';
import { Capability, CaseStudy, RecommendationResult } from './types';

export function calculateRecommendations(
  selectedChallenges: string[],
  selectedIndustry: string | null,
  selectedPriorities: string[],
  journeyStage: string | null
): RecommendationResult {
  const scores: Record<string, number> = {};
  const matchedReasons: Record<string, string[]> = {};

  // Initialize scores
  BTM_CAPABILITIES.forEach((cap) => {
    scores[cap.id] = 0;
    matchedReasons[cap.id] = [];
  });

  // 1. Deterministic Scoring based on Selected Challenges
  selectedChallenges.forEach((challengeId) => {
    const challenge = BTM_CHALLENGES.find((c) => c.id === challengeId);
    if (challenge) {
      challenge.relatedCapabilityIds.forEach((capId, index) => {
        const weight = index === 0 ? 7 : index === 1 ? 4 : 3;
        scores[capId] = (scores[capId] || 0) + weight;
        matchedReasons[capId]?.push(`Directly addresses your challenge around ${challenge.title}.`);
      });
    }
  });

  // 2. Deterministic Scoring based on Selected Industry
  if (selectedIndustry) {
    switch (selectedIndustry) {
      case 'real-estate':
        scores['valuation-advisory-services'] += 6;
        scores['structured-finance'] += 5;
        scores['data-analytics'] += 4;
        break;
      case 'investment-banking':
        scores['structured-finance'] += 6;
        scores['application-services'] += 5;
        scores['ai-ml'] += 4;
        break;
      case 'asset-management':
        scores['fixed-income-equity-analytics'] += 6;
        scores['quant-analytics'] += 5;
        scores['data-analytics'] += 4;
        break;
      case 'hedge-fund':
        scores['quant-analytics'] += 7;
        scores['fixed-income-equity-analytics'] += 5;
        scores['data-analytics'] += 4;
        break;
      case 'insurance':
        scores['quant-analytics'] += 5;
        scores['fixed-income-equity-analytics'] += 5;
        scores['data-analytics'] += 4;
        break;
      case 'pe-vc':
        scores['data-analytics'] += 6;
        scores['application-services'] += 5;
        scores['valuation-advisory-services'] += 4;
        break;
      case 'commercial-banking':
        scores['application-services'] += 6;
        scores['data-analytics'] += 5;
        scores['ai-ml'] += 3;
        break;
      default:
        scores['data-analytics'] += 3;
        scores['technology-consulting'] += 3;
        scores['application-services'] += 3;
    }
  }

  // 3. Deterministic Scoring based on Selected Priorities
  selectedPriorities.forEach((priorityId) => {
    switch (priorityId) {
      case 'reduce-manual-work':
      case 'automate-workflows':
        scores['ai-ml'] += 5;
        scores['application-services'] += 4;
        break;
      case 'improve-reporting':
        scores['data-analytics'] += 6;
        scores['fixed-income-equity-analytics'] += 4;
        break;
      case 'improve-data-quality':
        scores['data-analytics'] += 6;
        scores['technology-consulting'] += 4;
        break;
      case 'modernize-tech':
        scores['application-services'] += 5;
        scores['technology-consulting'] += 5;
        scores['cloud-computing'] += 4;
        break;
      case 'improve-risk-analytics':
        scores['quant-analytics'] += 6;
        scores['structured-finance'] += 5;
        break;
      case 'build-new-app':
        scores['application-services'] += 7;
        scores['technology-consulting'] += 3;
        break;
      case 'scale-team':
        scores['specialized-support-team'] += 7;
        scores['application-services'] += 3;
        break;
      case 'explore-ai':
        scores['ai-ml'] += 7;
        scores['data-analytics'] += 3;
        break;
      case 'improve-valuation-modeling':
        scores['valuation-advisory-services'] += 6;
        scores['structured-finance'] += 5;
        break;
    }
  });

  // 4. Deterministic Scoring based on Project / Journey Stage
  if (journeyStage) {
    switch (journeyStage) {
      case 'exploring':
      case 'defining-requirements':
        scores['technology-consulting'] += 4;
        scores['valuation-advisory-services'] += 2;
        break;
      case 'ready-to-build':
        scores['application-services'] += 4;
        scores['specialized-support-team'] += 3;
        break;
      case 'modernizing':
        scores['technology-consulting'] += 4;
        scores['cloud-computing'] += 4;
        scores['data-analytics'] += 3;
        break;
      case 'scaling':
        scores['specialized-support-team'] += 5;
        scores['cloud-computing'] += 3;
        break;
    }
  }

  // Fallback defaults if user arrives with minimal selections
  if (selectedChallenges.length === 0 && !selectedIndustry && selectedPriorities.length === 0) {
    scores['data-analytics'] = 10;
    scores['application-services'] = 8;
    scores['technology-consulting'] = 6;
  }

  // Sort capabilities by score descending and take top 2 to 3
  const sortedCapIds = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const topCapIds = sortedCapIds.slice(0, 3);

  const recommendedCapabilities: Capability[] = topCapIds
    .map((id) => BTM_CAPABILITIES.find((c) => c.id === id))
    .filter((c): c is Capability => !!c);

  // Find relevant Case Studies mapped to top recommended capabilities
  const matchedCaseStudies: CaseStudy[] = [];
  const candidateCaseStudies = new Set<string>();

  recommendedCapabilities.forEach((cap) => {
    cap.relatedCaseStudyIds.forEach((csId) => candidateCaseStudies.add(csId));
  });

  Array.from(candidateCaseStudies).forEach((csId) => {
    const cs = BTM_CASE_STUDIES.find((item) => item.id === csId);
    if (cs && !matchedCaseStudies.some((existing) => existing.id === cs.id)) {
      matchedCaseStudies.push(cs);
    }
  });

  // Pick the single best primary featured case study (and backup)
  const selectedCaseStudies = matchedCaseStudies.slice(0, 2);

  // Generate Correlation Insights
  const matchedInsights: { title: string; detail: string }[] = [];

  if (selectedChallenges.length > 0) {
    const chalNames = selectedChallenges
      .map((id) => BTM_CHALLENGES.find((c) => c.id === id)?.title)
      .filter(Boolean)
      .join(', ');
    matchedInsights.push({
      title: 'Operational Alignment',
      detail: `Your focus on ${chalNames} strongly maps to BTM’s specialized practice in ${recommendedCapabilities[0]?.name}.`
    });
  }

  if (selectedIndustry) {
    const indName = BTM_INDUSTRIES.find((i) => i.id === selectedIndustry)?.name;
    if (indName) {
      matchedInsights.push({
        title: 'Institutional Domain Fit',
        detail: `Tailored for ${indName} operational models, workflow practices, and reporting standards.`
      });
    }
  }

  if (selectedPriorities.length > 0) {
    const priorityLabels = selectedPriorities
      .slice(0, 2)
      .map((id) => BTM_PRIORITIES.find((p) => p.id === id)?.label)
      .filter(Boolean)
      .join(' & ');
    matchedInsights.push({
      title: 'Priority Trajectory',
      detail: `Synthesized to accelerate your goals to ${priorityLabels.toLowerCase()}.`
    });
  }

  return {
    recommendedCapabilities,
    relevantCaseStudies: selectedCaseStudies.length > 0 ? selectedCaseStudies : BTM_CASE_STUDIES.slice(0, 1),
    matchedInsights,
    confidenceSummary: `Based on your selections, these capabilities appear relevant to your requirements.`
  };
}
