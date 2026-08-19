'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BTM_CHALLENGES } from '@/data/challenges';
import { ChallengeOption } from '@/data/types';
import { ChallengeCard } from '@/components/cards/ChallengeCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface Stage2ChallengeProps {
  selectedChallenges: string[];
  onToggleChallenge: (id: string) => void;
  onExploreDetails: (challenge: ChallengeOption) => void;
  onContinue: () => void;
}

export function Stage2Challenge({
  selectedChallenges,
  onToggleChallenge,
  onExploreDetails,
  onContinue
}: Stage2ChallengeProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hasSelection = selectedChallenges.length > 0;

  // Individual challenge lookups for asymmetric editorial bento layout
  const dataChallenge = BTM_CHALLENGES.find((c) => c.id === 'data-analytics') || BTM_CHALLENGES[0];
  const aiChallenge = BTM_CHALLENGES.find((c) => c.id === 'ai-automation') || BTM_CHALLENGES[2];
  const techChallenge = BTM_CHALLENGES.find((c) => c.id === 'tech-applications') || BTM_CHALLENGES[1];
  const finChallenge = BTM_CHALLENGES.find((c) => c.id === 'financial-analytics') || BTM_CHALLENGES[3];
  const cloudChallenge = BTM_CHALLENGES.find((c) => c.id === 'cloud-infra') || BTM_CHALLENGES[4];
  const advisoryChallenge = BTM_CHALLENGES.find((c) => c.id === 'advisory-valuation') || BTM_CHALLENGES[5];
  const bespokeChallenge = BTM_CHALLENGES.find((c) => c.id === 'something-else') || BTM_CHALLENGES[6];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-28 sm:pb-16 scroll-mt-24">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="emerald" size="sm">
            Stage 02
          </Badge>
          <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
            Challenge Discovery
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#062039]">
          What do you want to solve?
        </h2>

        {/* Signature BTM Bar Separator */}
        <div className="btm-separator btm-separator-center" />

        <p className="text-sm sm:text-base text-slate-600 font-normal">
          Select one or more challenge areas. Click <span className="font-semibold text-[#009345]">"Explore →"</span> on any card to preview typical business problems and example outcomes.
        </p>

        {/* Multi-select count pill */}
        <div className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
          <span className="rounded-[3px] bg-slate-100 px-2.5 py-0.5 text-slate-800 font-bold text-xs">
            {selectedChallenges.length} selected
          </span>
          <span className="text-[11px]">(Multiple selections supported)</span>
        </div>
      </motion.div>

      {/* Asymmetric Editorial Bento Grid with Spotlight Interaction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6"
      >
        {/* ROW 1: Large Feature Data & Analytics (7 cols) + Medium AI & Automation (5 cols) */}
        <div className="lg:col-span-7 flex">
          <ChallengeCard
            challenge={dataChallenge}
            index={0}
            isSelected={selectedChallenges.includes(dataChallenge.id)}
            isHoveredByOther={!!hoveredId && hoveredId !== dataChallenge.id}
            onHoverStart={() => setHoveredId(dataChallenge.id)}
            onHoverEnd={() => setHoveredId(null)}
            onToggle={onToggleChallenge}
            onExploreDetails={onExploreDetails}
            isLarge={true}
            className="w-full"
          />
        </div>

        <div className="lg:col-span-5 flex">
          <ChallengeCard
            challenge={aiChallenge}
            index={1}
            isSelected={selectedChallenges.includes(aiChallenge.id)}
            isHoveredByOther={!!hoveredId && hoveredId !== aiChallenge.id}
            onHoverStart={() => setHoveredId(aiChallenge.id)}
            onHoverEnd={() => setHoveredId(null)}
            onToggle={onToggleChallenge}
            onExploreDetails={onExploreDetails}
            isLarge={false}
            className="w-full"
          />
        </div>

        {/* ROW 2: Medium Technology & Applications (5 cols) + Large Financial Analytics (7 cols) */}
        <div className="lg:col-span-5 flex">
          <ChallengeCard
            challenge={techChallenge}
            index={2}
            isSelected={selectedChallenges.includes(techChallenge.id)}
            isHoveredByOther={!!hoveredId && hoveredId !== techChallenge.id}
            onHoverStart={() => setHoveredId(techChallenge.id)}
            onHoverEnd={() => setHoveredId(null)}
            onToggle={onToggleChallenge}
            onExploreDetails={onExploreDetails}
            isLarge={false}
            className="w-full"
          />
        </div>

        <div className="lg:col-span-7 flex">
          <ChallengeCard
            challenge={finChallenge}
            index={3}
            isSelected={selectedChallenges.includes(finChallenge.id)}
            isHoveredByOther={!!hoveredId && hoveredId !== finChallenge.id}
            onHoverStart={() => setHoveredId(finChallenge.id)}
            onHoverEnd={() => setHoveredId(null)}
            onToggle={onToggleChallenge}
            onExploreDetails={onExploreDetails}
            isLarge={true}
            className="w-full"
          />
        </div>

        {/* ROW 3: Cloud & Infrastructure (6 cols) + Advisory & Valuation (6 cols) */}
        <div className="lg:col-span-6 flex">
          <ChallengeCard
            challenge={cloudChallenge}
            index={4}
            isSelected={selectedChallenges.includes(cloudChallenge.id)}
            isHoveredByOther={!!hoveredId && hoveredId !== cloudChallenge.id}
            onHoverStart={() => setHoveredId(cloudChallenge.id)}
            onHoverEnd={() => setHoveredId(null)}
            onToggle={onToggleChallenge}
            onExploreDetails={onExploreDetails}
            isLarge={false}
            className="w-full"
          />
        </div>

        <div className="lg:col-span-6 flex">
          <ChallengeCard
            challenge={advisoryChallenge}
            index={5}
            isSelected={selectedChallenges.includes(advisoryChallenge.id)}
            isHoveredByOther={!!hoveredId && hoveredId !== advisoryChallenge.id}
            onHoverStart={() => setHoveredId(advisoryChallenge.id)}
            onHoverEnd={() => setHoveredId(null)}
            onToggle={onToggleChallenge}
            onExploreDetails={onExploreDetails}
            isLarge={false}
            className="w-full"
          />
        </div>

        {/* ROW 4: Custom Advisory / Hybrid Challenge (12 cols) */}
        {bespokeChallenge && (
          <div className="lg:col-span-12">
            <div
              tabIndex={0}
              role="checkbox"
              aria-checked={selectedChallenges.includes(bespokeChallenge.id)}
              onClick={() => onToggleChallenge(bespokeChallenge.id)}
              onMouseEnter={() => setHoveredId(bespokeChallenge.id)}
              onMouseLeave={() => setHoveredId(null)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  onToggleChallenge(bespokeChallenge.id);
                }
              }}
              className={`group relative flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-xl border p-5 sm:p-6 cursor-pointer transition-all duration-300 outline-none select-none focus-visible:ring-2 focus-visible:ring-[#009345] focus-visible:ring-offset-2 ${
                selectedChallenges.includes(bespokeChallenge.id)
                  ? 'border-[#009345] ring-2 ring-[#009345] bg-gradient-to-r from-white to-emerald-50/30 shadow-md'
                  : hoveredId && hoveredId !== bespokeChallenge.id
                  ? 'border-slate-200 bg-white/70 opacity-80'
                  : 'border-slate-200/90 bg-white hover:border-[#009345] hover:shadow-xl hover:-translate-y-0.5'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#009345] transition-colors">
                  07
                </span>
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] border transition-colors ${
                    selectedChallenges.includes(bespokeChallenge.id)
                      ? 'bg-[#009345] text-white border-[#009345]'
                      : 'bg-slate-50 text-[#062039] border-slate-200 group-hover:bg-[#062039] group-hover:text-white'
                  }`}
                >
                  <Sparkles className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#062039] uppercase group-hover:text-[#009345] transition-colors">
                    {bespokeChallenge.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5">
                    {bespokeChallenge.shortDescription}
                  </p>
                </div>
              </div>

              <div className="mt-3 sm:mt-0 flex items-center justify-end w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onExploreDetails(bespokeChallenge);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#009345] hover:text-[#007a38] group-hover:translate-x-1 transition-all p-1"
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Compact Mobile & Desktop Fixed Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/98 backdrop-blur-md border-t border-slate-200/90 shadow-2xl px-4 py-3 sm:py-3.5 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-700 min-w-0 truncate">
            {hasSelection ? (
              <div className="flex items-center gap-1.5 font-semibold text-slate-900 truncate">
                <CheckCircle2 className="h-4 w-4 text-[#009345] shrink-0" />
                <span className="truncate">
                  <strong className="text-[#009345]">{selectedChallenges.length}</strong> focus {selectedChallenges.length === 1 ? 'area' : 'areas'}
                </span>
              </div>
            ) : (
              <span className="text-slate-500 text-[11px] sm:text-xs truncate">
                Select a challenge to proceed
              </span>
            )}
          </div>

          <Button
            variant="emerald"
            size="md"
            disabled={!hasSelection}
            onClick={onContinue}
            rightIcon={<ArrowRight className="h-4 w-4 shrink-0" />}
            className="shrink-0 whitespace-nowrap text-xs sm:text-sm px-5 sm:px-6 shadow-xs font-bold"
          >
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
}
